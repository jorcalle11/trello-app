"use client";

import { useActionState } from "react";
import { createCard } from "../lib/actions";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function CreateCardForm({ listId }: { listId: string }) {
  const [, formAction, isPending] = useActionState(createCard, "");

  return (
    <form action={formAction} className="flex gap-2">
      <input type="hidden" name="listId" value={listId} />
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Add a card"
        className="w-full bg-white rounded-lg p-2"
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 text-white rounded px-4"
      >
        {isPending ? "..." : <PlusIcon className="h-5 w-5" />}
      </button>
    </form>
  );
}
