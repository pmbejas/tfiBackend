import userRoutes from './user.routes.js';
import roleRoutes from './roles.routes.js';
import menuRoutes from './menus.routes.js';
import provincesRoutes from './provincias.routes.js'
import productosRoutes from './productos.routes.js';
import proveedoresRoutes from './proveedores.routes.js';
import clientesRoutes from './clientes.routes.js';
import ventasRoutes from './ventas.routes.js';

import config from '../config.js';

export function registerRoutes(app) {

    app.get(config.defaultRoute +'/health', (req, res) => {
        res.status(200).json({ ok: true, service: 'api', timestamp: new Date().toISOString() });
    });

    app.use(config.defaultRoute +'/users', userRoutes);
    app.use(config.defaultRoute +'/roles', roleRoutes);   
    app.use(config.defaultRoute +'/menus', menuRoutes);
    app.use(config.defaultRoute +'/provincias', provincesRoutes);
    app.use(config.defaultRoute +'/productos', productosRoutes);
    app.use(config.defaultRoute + '/proveedores', proveedoresRoutes);
    app.use(config.defaultRoute + '/clientes', clientesRoutes);
    app.use(config.defaultRoute + '/ventas', ventasRoutes);
    

}
