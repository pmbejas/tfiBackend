import { Router } from "express";
import { ProductosController } from "../controllers/controllers.index.js"; 
import { authenticateToken } from "../security/middlewares.js";

const router = Router();

router.get("/", ProductosController.getProductos);
router.use(authenticateToken);

export default router;
