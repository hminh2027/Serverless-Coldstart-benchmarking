const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: '',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: '',
  },
];

export class UserRepository {
  findAll() {
    return mockUsers;
  }

  findById(id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  createOne(user) {
    mockUsers.push(user);
    return user;
  }
}
