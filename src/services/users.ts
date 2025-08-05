import { User } from '../types/users';
import fs from 'fs';

const userFile = './src/data/users.json';

function getNextId(users: User[]): number {
  return users.length + 1; 
}

export function getUsers(): User[] {
  const fileData = fs.readFileSync(userFile, 'utf-8');
  const users = JSON.parse(fileData);
  return users;
}

export function addUser(newUserData: User): User {
  const currentUsers = getUsers();
  const newId = getNextId(currentUsers); 

  const newUser = {
    ...newUserData, 
    id: newId       
  };
  
  const updatedUsers = [...currentUsers, newUser];
  fs.writeFileSync(userFile, JSON.stringify(updatedUsers));
  return newUser;
}
