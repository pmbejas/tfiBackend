import express from 'express';
import cors from 'cors';
import config from './config.js';
import { models } from './database/models/Relaciones.js';
import { registerRoutes } from './routes/routes.index.js';

const app = express();
app.use(cors());
app.set("port", config.port || 8000);
app.use(express.json());

registerRoutes(app);

export default app;
