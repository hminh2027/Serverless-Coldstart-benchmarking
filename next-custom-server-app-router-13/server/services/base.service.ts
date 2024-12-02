// import { FindManyOptions, FindOneOptions, In } from "typeorm";
// import { BaseRepository } from "../repositories";
// import { BaseServiceInterface } from "../interfaces";

// export abstract class BaseService<Entity>
//   implements BaseServiceInterface<Entity, number>
// {
//   constructor(private readonly repository: BaseRepository<Entity>) {}
//   findManyByIds(ids: number[]): Promise<Entity[]> {
//     const options: FindManyOptions = {
//       where: { id: In(ids) },
//     };
//     return this.repository.find(options);
//   }

//   async createOne<T extends Entity>(item: T): Promise<Entity> {
//     const newItem = await this.repository.create(item);
//     return this.repository.save(newItem);
//   }

//   async createMany<T extends Entity>(items: T[]): Promise<Entity[]> {
//     const newItems = await this.repository.create(items);
//     return this.repository.save(newItems);
//   }

//   findAll<T>(): Promise<T[] | Entity[]> {
//     return this.repository.find();
//   }

//   findOneById(id: number): Promise<Entity> {
//     const options: FindOneOptions = {
//       where: { id },
//     };
//     return this.repository.findOne(options);
//   }

//   async update(id: number, payload: Partial<Entity> | any): Promise<Entity> {
//     const updateItem = await this.findOneById(id);
//     if (!updateItem) throw new Error("404");

//     const updatedItem = this.repository.merge(updateItem, payload);

//     return this.repository.save(updatedItem);
//   }

//   async deleteOneById(id: number): Promise<boolean> {
//     const deleteItem = await this.findOneById(id);
//     if (!deleteItem) return false;

//     await this.repository.delete(id);

//     return true;
//   }
//   async deleteManyByIds(ids: number[]): Promise<boolean> {
//     const deleteItems = await this.findManyByIds(ids);
//     if (deleteItems.length !== ids.length) return false;

//     await this.repository.delete(ids);

//     return true;
//   }
// }
