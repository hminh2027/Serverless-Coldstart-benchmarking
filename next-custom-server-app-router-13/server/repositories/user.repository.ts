import { eq } from "drizzle-orm";
import { db } from "../db";
import { usersTable } from "../db/schema/user";

class UserRepository {
  async findById(id: number) {
    return db.select().from(usersTable).where(eq(usersTable.id, id)).execute();
  }

  async createOne(user: any) {
    return db.insert(usersTable).values(user).execute();
  }

  async findAll() {
    return db.select().from(usersTable).execute();
  }
}

export const userRepository = new UserRepository();
