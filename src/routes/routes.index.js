import userRoutes from './user.routes.js';
import roleRoutes from './roles.routes.js';
import menuRoutes from './menus.routes.js';
import provincesRoutes from './provincias.routes.js'

import config from '../config.js';

export function registerRoutes(app) {

    app.get(config.defaultRoute +'/health', (req, res) => {
        res.status(200).json({ ok: true, service: 'api', timestamp: new Date().toISOString() });
    });

    app.use(config.defaultRoute +'/users', userRoutes);
    app.use(config.defaultRoute +'/roles', roleRoutes);   
    app.use(config.defaultRoute +'/menus', menuRoutes);
    app.use(config.defaultRoute +'/provincias', provincesRoutes);
}