import { fetchBoardById } from "@/app/lib/data";
import { Board } from "@/app/ui/Board";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

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
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{board.title}</h1>
          <Link href="/boards" className="text-white flex">
            <ArrowLeftIcon className="h-6 w-6" />
            <span className="ml-2">Back to boards</span>
          </Link>
        </div>
      </div>
      <Board boardId={boardId} />
    </main>
  );
}
