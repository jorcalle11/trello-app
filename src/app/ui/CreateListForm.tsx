import { createList } from "../lib/actions";

export function CreateListForm({ boardId }: { boardId: string }) {
  const createListWithId = createList.bind(null, boardId);

  return (
    <form
      action={createListWithId}
      className="bg-gray-100 rounded-lg p-4 w-72 flex-shrink-0 text-black"
    >
      <input
        id="title"
        name="title"
        type="text"
        placeholder="list name"
        className="p-2 border border-gray-300 rounded flex-grow mb-3"
        required
      />
      <div className="flex space-x-2">
        <button className="p-2 bg-blue-500 text-white rounded">Add List</button>
      </div>
    </form>
  );
}
