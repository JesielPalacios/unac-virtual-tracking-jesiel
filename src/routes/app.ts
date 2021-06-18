import { Router } from 'express';
import auth from './auth';
import rolRoutes from './rolRoutes';
import selfAssessmentsRoutes from './selfAssessmentsRoutes';
import subjectRoutes from './subjectRoutes';
import user from './user';



const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/', subjectRoutes);
routes.use('/', selfAssessmentsRoutes);
routes.use('/rolcontrol', rolRoutes);

export default routes;