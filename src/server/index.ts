import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { validateSubscribeData } from './validators';
import { subscribeToMailchimp } from './mailchimp';

dotenv.config();

const app = express();

// Security middleware
app.use(helmet());
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
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Muitas tentativas. Por favor, tente novamente mais tarde.'
});

app.use(express.json());
app.use('/api/subscribe', limiter);

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    // Validate request data
    const validatedData = validateSubscribeData(req.body);
    
    // Subscribe to Mailchimp
    await subscribeToMailchimp(validatedData);
    
    res.status(200).json({ 
      success: true, 
      message: 'Inscrição realizada com sucesso!' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(error.status || 500).json({ 
      success: false, 
      message: error.message || 'Erro interno do servidor' 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 