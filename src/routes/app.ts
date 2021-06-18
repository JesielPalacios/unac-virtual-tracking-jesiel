import { Router } from 'express';
import auth from './auth';
import user from './user';
import subjectRoutes from './subjectRoutes';

import rolRoutes from './rolRoutes';


const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/', subjectRoutes);
routes.use('/rolcontrol', rolRoutes);

export default routes;