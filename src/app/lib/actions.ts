"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function createBoard(formData: FormData) {
  const title = formData.get("title") as string;
  const color = formData.get("color") as string;
  const userId = "450004d0-8139-43f4-9d91-3b5b74df02d9";

  console.log({ title, color, userId });

  try {
    await sql`INSERT INTO boards (title, color, user_id) VALUES (${title}, ${color}, ${userId})`;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create board");
  }

  revalidatePath("/boards");
}

export async function createList(
  boardId: string,
  prevState: string,
  formData: FormData
) {
  const title = formData.get("title") as string;

  try {
    await sql`INSERT INTO lists (title, board_id) VALUES (${title}, ${boardId})`;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create list");
  }

  revalidatePath(`/boards/${boardId}`);
  return "board created";
}

export async function deleteList(id: string) {
  // delete all cards in the list
  // delete the list itself
  try {
    await sql`BEGIN`;
    await sql`DELETE FROM cards WHERE list_id = ${id}`;
    await sql`DELETE FROM lists WHERE id = ${id}`;
    await sql`COMMIT`;
  } catch (error) {
    console.error(error);
    await sql`ROLLBACK`;
    throw new Error("Failed to delete list");
  }

  revalidatePath("/boards");
}
