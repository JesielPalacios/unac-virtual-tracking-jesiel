import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Users } from '../entity/Users';
import { validate } from 'class-validator';



export class RolController{
    static getUsersrol = async (req: Request, res: Response) => {
        const userRepository = getRepository(Users);
        let users;
    
        try {
          users = await userRepository.find({ select: ['id', 'email', 'role', 'name'] });
          
        } catch (e) {
          res.status(404).json({ message: 'Somenthing goes wrong!' });
        }
    
        if (users.length > 0) {
          res.send(users);
        } else {
          res.status(404).json({ message: 'Not result' });
        }
      };
     // info for id
      static getByIdrol = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(Users);
        try {
          const user = await userRepository.findOneOrFail(id, { select: ['id', 'email', 'role', 'name'] });

          res.send(user);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };
    

      //edit roll
      static editrol = async (req: Request, res: Response) => {
        let user;
        const { id } = req.params;
        const { role } = req.body;
    
        const userRepository = getRepository(Users);
        // Try get user
        try {
          user = await userRepository.findOneOrFail(id);
          user.role = role;
        } catch (e) {
          return res.status(404).json({ message: 'User not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(user, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await userRepository.save(user);
        } catch (e) {
          return res.status(409).json({ message: 'Username already in use' });
        }
    
        res.status(201).json({ message: 'User update' });
      };



}