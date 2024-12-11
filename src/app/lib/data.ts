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

export async function fetchBoardById(boardId: string) {
  try {
    const { rows } = await sql`SELECT * FROM boards WHERE id = ${boardId}`;
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch board");
  }
}

export async function fetchLists(boardId: string) {
  try {
    const { rows } = await sql`SELECT * FROM lists WHERE board_id = ${boardId}`;
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch lists");
  }
}

export async function fetchCards(listId: string) {
  try {
    const { rows } = await sql`SELECT * FROM cards WHERE list_id = ${listId}`;
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch cards");
  }
}
