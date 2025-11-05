import { Router } from 'express';
import { RolesController } from '../controllers/controllers.index.js';
import { authenticateToken } from '../security/middlewares.js';

const router = Router();

router.get('/', RolesController.getRoles);

export default router;
