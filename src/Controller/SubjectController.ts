import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Subject } from '../entity/Subject';
import { validate } from 'class-validator';

export class SubjectController {

  static getAllSubjects = async (req: Request, res: Response) => {
    const subjectRepository = getRepository(Subject);
    let subject;

    try {
      subject = await subjectRepository.find({ select: ['id', 'name','credits', 'semester'] });
    } catch (e) {
      res.status(404).json({ message: 'Somenthing goes wrong!' });
    }

    if (subject.length > 0) {
      res.send(subject);
    } else {
      res.status(404).json({ message: 'Not result.' });
    }
  };

  static getSubcjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const subjectRepository = getRepository(Subject);
    try {
      const subject = await subjectRepository.findOneOrFail(id);
      res.send(subject);
    } catch (e) {
      res.status(404).json({ message: 'Not result.' });
    }
  };

  // Crear una nueva materia.
  static createNewSubjet = async (req: Request, res: Response) => {
    const { id, name, credits, semester } = req.body;
    const subject = new Subject();
      subject.id = id;
      subject.name= name;
      subject.credits = credits;
      subject.semester = semester;

    // Validate
    const validationOpt = { validationError: { target: false, value: false } };
    const errors = await validate(subject, validationOpt);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const subjectRepository = getRepository(Subject);

    try {
      await subjectRepository.save(subject);
    } catch (e) {
      return res.status(409).json({ message: 'Subject already exist.' });
    }

    // All ok
    res.send('Subject created.');
  };

  static editSubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const subjectRepository = getRepository(Subject);
    let subject;

    // Try get subject
    try {
      subject = await subjectRepository.findOneOrFail(id);
    } catch (e) {
      return res.status(404).json({ message: 'Subject not found.' });
    }

    const validationOpt = { validationError: { target: false, value: false } };
    const errors = await validate(subject, validationOpt);
    console.log('ERR ->', errors);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // Try to save subject
    try {
      await subjectRepository.save(subject);
    } catch (e) {
      return res.status(409).json({ message: 'Subject already in use.' });
    }

    res.status(201).json({ message: 'Subject update.' });
  };

  static deleteSubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const subjectRepository = getRepository(Subject);
    let subject: Subject;

    try {
      subject = await subjectRepository.findOneOrFail(id);
    } catch (e) {
      return res.status(404).json({ message: 'Subject not found.' });
    }

    // Remove subject
    subjectRepository.delete(id);
    res.status(201).json({ message: ' Subject deleted.' });
  };
}

const subjectController = new SubjectController();
export default subjectController;