import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { RolController } from './../Controller/RolController';
import { Router } from 'express';

const router = Router();

// Get all users and rol
router.get('/adminrol',[checkJwt, checkRole(['admin'])], RolController.getUsersrol);
// Get users and roll for id

router.get('/:id', [checkJwt, checkRole(['admin'])], RolController.getByIdrol);


// edit rol
router.patch('/:id',[checkJwt, checkRole(['admin'])],  RolController.editrol);

export default router;
