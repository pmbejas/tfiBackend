import { Router } from 'express';
import { RolesController } from '../controllers/controllers.index.js';
import { authenticateToken } from '../security/middlewares.js';

const router = Router();

router.get('/', RolesController.getRoles);
router.post('/', RolesController.createRoles);
router.get('/permisos/:id', RolesController.getPermisosByRolId);
router.patch('/permisos/', RolesController.updatePermisosByRolId);
/* router.delete('/:id', RolesController.deleteRoles); */

export default router;
