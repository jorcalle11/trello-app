import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteList } from "../lib/actions";

export default function DeleteListIcon({ id }: { id: string }) {
  const deleteListWithId = deleteList.bind(null, id);

  return (
    <form action={deleteListWithId}>
      <button className="text-red-500 hover:text-red-600">
        <TrashIcon className="h-5 w-5" />
      </button>
    </form>
  );
}
