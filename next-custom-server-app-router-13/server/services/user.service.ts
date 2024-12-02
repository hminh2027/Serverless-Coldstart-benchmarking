import { userRepository } from "../repositories";

class UserService {
  async getUserById(id: number) {
    return userRepository.findById(id);
  }

  async createUser(user: any) {
    return userRepository.createOne(user);
  }

  async getUsers() {
    return userRepository.findAll();
  }
}

export const userService = new UserService();
