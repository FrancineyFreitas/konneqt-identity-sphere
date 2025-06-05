import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { validateSubscribeData } from './validators';
import { submitToN8N } from './n8n';
import { ApiError } from './types';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://konneqt.io', 'https://www.konneqt.io'] 
    : 'http://localhost:5173',
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

app.use('/api/subscribe', limiter);

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    // Validate request data
    const validatedData = validateSubscribeData(req.body);
    
    // Submit to n8n webhook
    await submitToN8N(validatedData);
    
    res.status(200).json({ 
      success: true, 
      message: 'Inscrição realizada com sucesso!' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    const apiError = error instanceof ApiError 
      ? error 
      : new ApiError('Erro interno do servidor', 500);
    
    res.status(apiError.status).json({ 
      success: false, 
      message: apiError.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 