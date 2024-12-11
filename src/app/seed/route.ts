import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import { boards, cards, lists, users } from "../lib/initial-data";

const client = await db.connect();

async function seedUsers() {
  // i want to use uuid to generate unique id
  await client.sql`CREATE extension IF NOT EXISTS "uuid-ossp";`;

  // i want to use bcrypt to hash the password

  await client.sql`
  CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );
  `;

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await client.sql`
    INSERT INTO users (name, email, password)
    VALUES (${user.name}, ${user.email}, ${hashedPassword});
    `;
  }
}

async function seedBoards() {
  await client.sql`
  CREATE TABLE IF NOT EXISTS boards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    color TEXT NOT NULL,
    user_id UUID NOT NULL
  );
  `;

  for (const board of boards) {
    await client.sql`
    INSERT INTO boards (id, title, color, user_id)
    VALUES (${board.id}, ${board.title}, ${board.color}, ${board.userId});
    `;
  }
}

async function seedLists() {
  await client.sql`
  CREATE TABLE IF NOT EXISTS lists (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    board_id UUID NOT NULL
  );
  `;

  for (const list of lists) {
    await client.sql`
    INSERT INTO lists (id, title, board_id)
    VALUES (${list.id}, ${list.title}, ${list.boardId});
    `;
  }
}

async function seedCards() {
  await client.sql`
  CREATE TABLE IF NOT EXISTS cards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    list_id UUID NOT NULL
  );
  `;

  for (const card of cards) {
    await client.sql`
    INSERT INTO cards (id, title, list_id)
    VALUES (${card.id}, ${card.title}, ${card.listId});
    `;
  }
}

export async function GET() {
  return Response.json({ message: "Seed data successfully" });

  // try {
  //   await client.sql`BEGIN`;
  //   // await seedUsers();
  //   await seedBoards();
  //   await seedLists();
  //   await seedCards();
  //   await client.sql`COMMIT`;
  //   return Response.json({ message: "Seed data successfully" });
  // } catch (error) {
  //   console.error(error);
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ message: "Seed data failed" });
  // }
}
