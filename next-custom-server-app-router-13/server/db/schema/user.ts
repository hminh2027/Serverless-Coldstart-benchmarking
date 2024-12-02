import { mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("tbl_user", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  created_at: timestamp().notNull().defaultNow(),
});
