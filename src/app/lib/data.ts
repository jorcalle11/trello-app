import { sql } from "@vercel/postgres";

export async function fetchBoards(userId: string) {
  try {
    const { rows } = await sql`SELECT * FROM boards WHERE user_id = ${userId}`;
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch boards");
  }
}
