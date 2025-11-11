import { Router } from 'express';
import { DomiciliosController } from '../controllers/controllers.index.js';
import { authenticateToken } from '../security/middlewares.js';

const router = Router();

router.get('/user/:id', DomiciliosController.getDomiciliosByUserId);

export default router;