import { db } from "@vercel/postgres";

const client = await db.connect();

async function getAllUsers() {
  const users = await client.sql`SELECT * FROM users`;
  return users.rows;
}

async function getAllBoards() {
  const boards = await client.sql`SELECT * FROM boards`;
  return boards.rows;
}

async function getAllLists() {
  const lists = await client.sql`SELECT * FROM lists`;
  return lists.rows;
}

async function getAllCards() {
  const cards = await client.sql`SELECT * FROM cards`;
  return cards.rows;
}

export async function GET() {
  const [users, boards, lists, cards] = await Promise.all([
    getAllUsers(),
    getAllBoards(),
    getAllLists(),
    getAllCards(),
  ]);
  return Response.json({ users, boards, lists, cards });
}
