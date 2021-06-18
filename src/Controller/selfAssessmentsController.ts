import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { SelfAssessment } from '../entity/SelfAssessments';

export class selfAssessmentsController {

  static getAllSelfAssessments = async (req: Request, res: Response) => {
    const selfAssessmentRepository = getRepository(SelfAssessment);
    let selfAssessment;

    try {
      selfAssessment = await selfAssessmentRepository.find({ select: ['id', 'name', 'nota'] });
    } catch (e) {
      res.status(404).json({ message: 'Somenthing goes wrong!' });
    }

    if (selfAssessment.length > 0) {
      res.send(selfAssessment);
    } else {
      res.status(404).json({ message: 'Not result.' });
    }
  };

  static getSubcjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const selfAssessmentRepository = getRepository(SelfAssessment);
    try {
      const selfAssessment = await selfAssessmentRepository.findOneOrFail(id);
      res.send(selfAssessment);
    } catch (e) {
      res.status(404).json({ message: 'Not result.' });
    }
  };


  // static createNewSubjet = async (req: Request, res: Response) => {
  //   const { id, name, credits, semester } = req.body;
  //   const selfAssessment = new SelfAssessment();
  //   selfAssessment.id = id;
  //   selfAssessment.name = name;
  //   selfAssessment.credits = credits;
  //   selfAssessment.semester = semester;


  //   const validationOpt = { validationError: { target: false, value: false } };
  //   const errors = await validate(selfAssessment, validationOpt);
  //   if (errors.length > 0) {
  //     return res.status(400).json(errors);
  //   }

  //   const selfAssessmentRepository = getRepository(SelfAssessment);

  //   try {
  //     await selfAssessmentRepository.save(selfAssessment);
  //   } catch (e) {
  //     return res.status(409).json({ message: 'SelfAssessment already exist.' });
  //   }


  //   res.send('SelfAssessment created.');
  // };

  // static editSelfAssessment = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   const selfAssessmentRepository = getRepository(SelfAssessment);
  //   let selfAssessment;


  //   try {
  //     selfAssessment = await selfAssessmentRepository.findOneOrFail(id);
  //   } catch (e) {
  //     return res.status(404).json({ message: 'SelfAssessment not found.' });
  //   }

  //   const validationOpt = { validationError: { target: false, value: false } };
  //   const errors = await validate(selfAssessment, validationOpt);
  //   console.log('ERR ->', errors);
  //   if (errors.length > 0) {
  //     return res.status(400).json(errors);
  //   }

  //   try {
  //     await selfAssessmentRepository.save(selfAssessment);
  //   } catch (e) {
  //     return res.status(409).json({ message: 'SelfAssessment already in use.' });
  //   }

  //   res.status(201).json({ message: 'SelfAssessment update.' });
  // };

  // static deleteSelfAssessment = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   const selfAssessmentRepository = getRepository(SelfAssessment);
  //   let selfAssessment: SelfAssessment;

  //   try {
  //     selfAssessment = await selfAssessmentRepository.findOneOrFail(id);
  //   } catch (e) {
  //     return res.status(404).json({ message: 'SelfAssessment not found.' });
  //   }


  //   selfAssessmentRepository.delete(id);
  //   res.status(201).json({ message: ' SelfAssessment deleted.' });
  // };
}

export default selfAssessmentsController;