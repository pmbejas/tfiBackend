import { Router } from "express";
import { VentasController } from "../controllers/controllers.index.js"; 
import { authenticateToken } from "../security/middlewares.js";

const router = Router();

router.get("/", VentasController.getVentas);
router.get("/:idVenta", VentasController.getVentaById);
router.get("/totales/vendedores", VentasController.getVentastotalesVendedores);
router.use(authenticateToken);

export default router;
