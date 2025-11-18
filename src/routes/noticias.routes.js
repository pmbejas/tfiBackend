import { Router } from 'express';
import { NoticiasController } from '../controllers/controllers.index.js';
import rateLimit from 'express-rate-limit';
import { authenticateToken } from '../security/middlewares.js';

const router = Router();

const newsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

router.get('/', newsLimiter, NoticiasController.getNoticias);

export default router;