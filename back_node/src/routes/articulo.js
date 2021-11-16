import routerx from 'express-promise-router';
import ArticuloRoutes from '../controllers/ArticuloController';

const app = routerx();

//get all
app.get('/list',ArticuloRoutes.list);

//get one
app.get('/getUserById/:id',ArticuloRoutes.getUserById);

//post
app.post('/add',ArticuloRoutes.add);

//put
app.put('/update/:id',ArticuloRoutes.update);
app.put('/activate',ArticuloRoutes.activate);
app.put('/deactivate',ArticuloRoutes.deactivate);

//delete
app.delete('/remove/:id',ArticuloRoutes.remove);

export default app;