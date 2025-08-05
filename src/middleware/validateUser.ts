import { Request, Response, NextFunction } from 'express';
import { User } from '../types/users';

export function validateUser(req: Request, res: Response, next: NextFunction) {
 
  if (!req.body) {
    return res.status(400).json({ error: 'No data provided' });
  }

  const user: User = req.body;

  if (user.name === undefined || user.email === undefined) {
    return res.status(400).json({ error: 'Both name and email are required' });
  }

  if (typeof user.name !== 'string' || typeof user.email !== 'string') {
    return res.status(400).json({ error: 'Name and email must be text' });
  }

  const trimmedName = user.name.trim();
  const trimmedEmail = user.email.trim();
  
  if (trimmedName.length === 0) {
    return res.status(400).json({ error: 'Name cannot be empty' });
  }

  if (trimmedEmail.length === 0) {
    return res.status(400).json({ error: 'Email cannot be empty' });
  }
  next();
}