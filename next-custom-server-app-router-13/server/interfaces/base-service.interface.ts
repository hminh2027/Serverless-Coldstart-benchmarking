export interface BaseServiceInterface<Entity, Id> {
  // CREATE
  createOne<T extends Entity>(item: T): Promise<Entity>;
  createMany<T extends Entity>(items: T[]): Promise<Entity[]>;

  // GET
  findAll(filter?: object, options?: object): Promise<Entity[]>;
  findOneById(id: Id): Promise<Entity>;
  findManyByIds(ids: Id[]): Promise<Entity[]>;

  // UPDATE
  update(id: Id, payload: Partial<Entity>): Promise<Entity>;

  // DELETE
  deleteOneById(id: Id): Promise<boolean>;
  deleteManyByIds(ids: Id[]): Promise<boolean>;

  // UTILS
}
