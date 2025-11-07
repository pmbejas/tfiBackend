import { Router } from 'express';
import { MenusController } from '../controllers/controllers.index.js';
import { authenticateToken } from '../security/middlewares.js';

const router = Router();

router.get('/', MenusController.getMenus);
router.get('/user/:id', MenusController.getMenusByUserId);
router.get('/permisos/user/:id', MenusController.getPermisosByUserId);

export default router;