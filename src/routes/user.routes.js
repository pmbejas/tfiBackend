import { Router } from 'express';
import { UserController } from '../controllers/controllers.index.js';
import { authenticateToken } from '../security/middlewares.js';

const router = Router();
router.post('/login', UserController.Login);

router.get('/', UserController.getUsers);
router.get('/search/:id', UserController.getUserById);
router.post('/search/email', UserController.getUserByMail);
router.post('/', UserController.createUser);
router.put('/user/', UserController.updateUser);
router.put('/pass/', UserController.updatePassword);
router.delete('/destroy/:id', UserController.deleteUser);

router.use(authenticateToken);
export default router;
