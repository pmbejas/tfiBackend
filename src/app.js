import express from "express";
import cors from "cors";
import config from "./config.js";
import { models } from "./database/models/Relaciones.js";
import { registerRoutes } from "./routes/routes.index.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.set("port", config.port || 8000);
app.use(express.json());

registerRoutes(app);

export default app;
