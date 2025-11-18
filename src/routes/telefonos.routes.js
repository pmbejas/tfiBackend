import { Router } from 'express';
import { TelefonosController } from '../controllers/controllers.index.js';
import { authenticateToken } from '../security/middlewares.js';

const router = Router();

router.get('/user/:id', TelefonosController.getTelefonoByUserId);

export default router;