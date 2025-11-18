import userRoutes from './user.routes.js';
import roleRoutes from './roles.routes.js';
import menuRoutes from './menus.routes.js';
import provincesRoutes from './provincias.routes.js'
<<<<<<< HEAD
import productosRoutes from './productos.routes.js';
import proveedoresRoutes from './proveedores.routes.js';
import clientesRoutes from './clientes.routes.js';
import ventasRoutes from './ventas.routes.js';
=======
import domiciliosRoutes from './domicilios.routes.js'
import noticiasRoutes from './noticias.routes.js'
>>>>>>> f4024380cc880ff67c37703b80ef4d61df897581

import config from '../config.js';

export function registerRoutes(app) {

    app.get(config.defaultRoute +'/health', (req, res) => {
        res.status(200).json({ ok: true, service: 'api', timestamp: new Date().toISOString() });
    });

    app.use(config.defaultRoute +'/users', userRoutes);
    app.use(config.defaultRoute +'/roles', roleRoutes);   
    app.use(config.defaultRoute +'/menus', menuRoutes);
    app.use(config.defaultRoute +'/provincias', provincesRoutes);
<<<<<<< HEAD
    app.use(config.defaultRoute +'/productos', productosRoutes);
    app.use(config.defaultRoute + '/proveedores', proveedoresRoutes);
    app.use(config.defaultRoute + '/clientes', clientesRoutes);
    app.use(config.defaultRoute + '/ventas', ventasRoutes);
    

}
=======
    app.use(config.defaultRoute + '/domicilios', domiciliosRoutes);
    app.use(config.defaultRoute + '/noticias', noticiasRoutes);
}
>>>>>>> f4024380cc880ff67c37703b80ef4d61df897581
