import { Router } from 'express';
import { getUsers, addUser } from '../services/users';
import { validateUser } from '../middleware/validateUser';

const router = Router();

//here getting all user
router.get('/', (req, res) => {
  const users = getUsers();
  res.json(users);
});

//here add new user (with validation)
router.post('/', validateUser, (req, res) => {
  const newUser = addUser(req.body);
  res.status(201).json(newUser);
});

export default router;