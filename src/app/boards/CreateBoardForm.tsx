import { createBoard } from "../lib/actions";

export function CreateBoardForm() {
  return (
    <form action={createBoard} className="flex items-center space-x-2">
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Board name"
        className="p-2 border border-gray-300 rounded flex-grow"
        required
      />
      <input
        id="color"
        name="color"
        type="color"
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Create
      </button>
    </form>
  );
}
