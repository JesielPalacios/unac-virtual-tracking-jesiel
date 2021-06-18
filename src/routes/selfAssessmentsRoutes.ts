import { Router } from 'express';
import { selfAssessmentsController } from '../Controller/selfAssessmentsController';

const router = Router();

// Get all subjects
// router.get('/subjects', SubjectController.getAllSubjects);
// router.get('/selfAssessments', [checkJwt, checkRole(['teacher', 'student'])], selfAssessmentsController.getAllSelfAssessments);
router.get('/selfAssessments', selfAssessmentsController.getAllSelfAssessments);

// Get one subject
// router.get('/subject/:id', SubjectController.getSubcjectById);
router.get('/selfAssessment/:id', selfAssessmentsController.getAssessmentById);

// Create a new subject
// router.post('/subjects', SubjectController.createNewSubjet);
router.post('/selfAssessments', selfAssessmentsController.createNewSelfAssessment);

// Edit subject
// router.put('/subject/:id', SubjectController.editSubject);
// router.patch('/:id', [checkJwt, checkRole(['teacher'])], SubjectController.editSubject);

// Delete a subject
// router.delete('/subjects/:id', SubjectController.deleteSubject);
// router.delete('/subjects/:id', [checkJwt, checkRole(['teacher'])], SubjectController.deleteSubject);

export default router;