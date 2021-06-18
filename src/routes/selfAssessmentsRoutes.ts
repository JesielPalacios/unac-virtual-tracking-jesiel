import { checkRole } from '../middlewares/role';
import { checkJwt } from '../middlewares/jwt';
import { selfAssessmentsController } from '../Controller/selfAssessmentsController';
import { Router } from 'express';

const router = Router();

// Get all subjects
// router.get('/subjects', SubjectController.getAllSubjects);
router.get('/selfAssessments', [checkJwt, checkRole(['teacher', 'student'])], selfAssessmentsController.getAllSelfAssessments);

// Get one subject
// router.get('/subject/:id', SubjectController.getSubcjectById);
// router.get('/selfAppraisal/:id', [checkRole(['teacher', 'student'])], SubjectController.getSubcjectById);

// Create a new subject
// router.post('/subjects', SubjectController.createNewSubjet);
// router.post('/subjects', [checkJwt, checkRole(['teacher'])], SubjectController.createNewSubjet);

// Edit subject
// router.put('/subject/:id', SubjectController.editSubject);
// router.patch('/:id', [checkJwt, checkRole(['teacher'])], SubjectController.editSubject);

// Delete a subject
// router.delete('/subjects/:id', SubjectController.deleteSubject);
// router.delete('/subjects/:id', [checkJwt, checkRole(['teacher'])], SubjectController.deleteSubject);

export default router;