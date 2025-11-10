import { Router } from "express";
import { ProvinciasController } from "../controllers/controllers.index.js";
import { authenticateToken } from "../security/middlewares.js";

const router = Router();

router.get("/", ProvinciasController.getProvincias);

export default router;
