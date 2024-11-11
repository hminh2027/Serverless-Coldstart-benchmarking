import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  getUsers() {
    return this.userRepository.findAll();
  }

  getUserById(id: number) {
    return this.userRepository.findById(id);
  }

  createUser(user) {
    return this.userRepository.createOne(user);
  }
}
