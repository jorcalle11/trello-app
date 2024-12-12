import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteBoard } from "../lib/actions";

export default function DeleteBoardIcon({ id }: { id: string }) {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="p2 absolute top-2 right-2 ">
      <button className="text-red-500 hover:text-red-600">
        <TrashIcon className="h-5 w-5" />
      </button>
    </form>
  );
}
