import { Router } from 'express';
import { MenusController } from '../controllers/controllers.index.js';
import { authenticateToken } from '../security/middlewares.js';

const router = Router();

router.get('/', MenusController.getMenus);
router.get('/user/:id', MenusController.getMenusByUserId);
router.get('/permisos/user/:id', MenusController.getPermisosByUserId);
router.patch('/permisos/user', MenusController.updatePermisosByUserId);
router.use(authenticateToken);

export default router;