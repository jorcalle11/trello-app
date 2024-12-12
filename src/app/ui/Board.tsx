import { fetchLists } from "../lib/data";
import { CreateListForm } from "./CreateListForm";
import { List } from "./List";

export async function Board({ boardId }: { boardId: string }) {
  const lists = await fetchLists(boardId);

  return (
    <div className="flex overflow-x-auto space-x-4">
      {lists.map((list) => (
        <List key={list.id} id={list.id} title={list.title} />
      ))}
      <CreateListForm boardId={boardId} />
    </div>
  );
}
