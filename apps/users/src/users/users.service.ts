import { Injectable } from '@nestjs/common';
const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    password: 'password',
    email: 'example@gmail.com',
    company: 'USER MICROSERVICE',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    password: 'password',
    email: 'example1@gmail.com',
  },
];

@Injectable()
export class UsersService {
  findAll() {
    return users;
  }
}
