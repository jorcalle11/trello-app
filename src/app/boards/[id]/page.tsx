import { fetchBoardById } from "@/app/lib/data";
import { Board } from "@/app/ui/Board";

export default async function BoardDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const boardId = params.id;
  const board = await fetchBoardById(boardId);

  return (
    <main
      className="min-h-screen p-8 text-white"
      style={{ backgroundColor: board.color }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{board.title}</h1>
        {/* <div
          className={`h-2 w-32 mt-2 rounded`}
          style={{ backgroundColor: board.color }}
        ></div> */}
      </div>
      <Board boardId={boardId} />
    </main>
  );
}
