import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import config from './config.js';

const app = express();
app.use(cors());
app.set("port", config.port || 8000);
app.use(express.json());

app.use('/api', routes);

export default app;
