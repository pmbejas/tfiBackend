import { Router } from "express";
import { ClientesController } from "../controllers/controllers.index.js"; 
import { authenticateToken } from "../security/middlewares.js";

const router = Router();

router.get("/", ClientesController.getClientes);
router.get("/:idCliente", ClientesController.getClienteById);
router.use(authenticateToken);

export default router;
