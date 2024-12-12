"use client";

import { useActionState } from "react";
import { createList } from "../lib/actions";

export function CreateListForm({ boardId }: { boardId: string }) {
  const createListWithId = createList.bind(null, boardId);
  const [, formAction, isPending] = useActionState(createListWithId, "");

  return (
    <form
      action={formAction}
      className="bg-gray-100 rounded-lg p-4 w-72 flex-shrink-0 text-black"
    >
      <input
        id="title"
        name="title"
        type="text"
        placeholder="List name"
        className="w-full border border-gray-300 rounded p-2"
        required
      />
      <button
        className="mt-2 w-full bg-blue-500 text-white rounded p-2"
        disabled={isPending}
      >
        {isPending ? "Creating..." : "Create List"}
      </button>
    </form>
  );
}
