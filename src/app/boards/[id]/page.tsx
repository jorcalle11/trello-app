import { fetchBoardById } from "@/app/lib/data";
import { Board } from "@/app/ui/Board";
import Link from "next/link";

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
        {/* wrap the h1 in a div to show a back button in the right to redirect the user to the /boards page */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{board.title}</h1>
          <Link href="/boards" className="text-white underline">
            Back
          </Link>
        </div>
      </div>
      <Board boardId={boardId} />
    </main>
  );
}
