import { Router } from "express";
import { ProveedoresController} from "../controllers/controllers.index.js"; 
import { authenticateToken } from "../security/middlewares.js";

const router = Router();

router.get("/", ProveedoresController.getProveedores);
router.use(authenticateToken);

export default router;
