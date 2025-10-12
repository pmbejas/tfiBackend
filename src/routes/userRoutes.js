import { Router } from 'express';
import { UserController } from '../controllers/controllers.index.js';

const router = Router();
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.post('/by-email', UserController.getUserByMail);
router.post('/', UserController.createUser);
router.post('/login', UserController.Login);

export default router;
