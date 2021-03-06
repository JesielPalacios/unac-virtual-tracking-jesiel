import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { UserController } from './../Controller/UserControlles';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/all-user', [checkJwt, checkRole(['admin'])], UserController.getAll);

// Get one user
router.get('/:id', [checkJwt, checkRole(['admin'])], UserController.getById);

// Create a new user
router.post('/new-user', UserController.new);

// Edit user
router.patch('/:id', [checkJwt, checkRole(['admin'])], UserController.edit);

// Delete
router.delete('/:id', [checkJwt, checkRole(['admin'])], UserController.delete);

export default router;