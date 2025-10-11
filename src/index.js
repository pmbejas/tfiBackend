import app from './app.js';
import { testConnection } from './database/config.js';

app.listen(app.get('port'), () => {
    console.log(`API ejecutandose en http://localhost:${app.get('port')}`);
    testConnection();
});
