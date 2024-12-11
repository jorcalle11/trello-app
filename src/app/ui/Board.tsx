import { fetchLists } from "../lib/data";
import { CreateListForm } from "./CreateListForm";
import { List } from "./List";

export async function Board({ boardId }: { boardId: string }) {
  const lists = await fetchLists(boardId);
  console.log(lists);

  return (
    <div className="flex overflow-x-auto p-4 space-x-4">
      {lists.map((list) => (
        <List key={list.id} id={list.id} title={list.title} />
      ))}
      <CreateListForm boardId={boardId} />
    </div>
  );
}
