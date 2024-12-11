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
