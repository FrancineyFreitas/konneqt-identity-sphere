import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { validateSubscribeData } from './validators';
import { subscribeToMailchimp } from './mailchimp';
import { ApiError } from './types';
import { z } from 'zod';

dotenv.config();

if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID || !process.env.MAILCHIMP_SERVER) {
  throw new Error('Missing required environment variables');
}

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
  message: { 
    success: false, 
    message: 'Muitas tentativas. Por favor, tente novamente mais tarde.' 
  }
});

app.use(express.json());
app.use('/api/subscribe', limiter);

// Subscribe endpoint
app.post('/api/subscribe', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
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
    next(error); // Pass error to error handling middleware
  }
});

// Error handling middleware
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  if (err instanceof z.ZodError) {
    res.status(400).json({
      success: false,
      message: 'Dados inválidos',
      errors: err.errors
    });
    return;
  }

  if (err instanceof ApiError) {
    res.status(err.status).json({
      success: false,
      message: err.message
    });
    return;
  }

  res.status(500).json({
    success: false,
    message: 'Erro interno do servidor'
  });
  return;
};

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  app.listen().close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 