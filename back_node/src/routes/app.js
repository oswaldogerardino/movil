import routerx from 'express-promise-router';
import Articulo from './articulo';

const router = routerx();

router.use('/articulo', Articulo);

export default router;
