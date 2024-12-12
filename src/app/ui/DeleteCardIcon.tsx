import { XMarkIcon } from "@heroicons/react/24/solid";
import { deleteCard } from "../lib/actions";

export default function DeleteCardIcon({ id }: { id: string }) {
  const deleteCardWithId = deleteCard.bind(null, id);

  return (
    <form action={deleteCardWithId}>
      <button className="text-red-500 hover:text-red-600">
        <XMarkIcon className="h-5 w-5" />
      </button>
    </form>
  );
}
