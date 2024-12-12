import Link from "next/link";
import { fetchBoards } from "../lib/data";
import DeleteBoardIcon from "../ui/DeleteBoardIcon";

export async function BoardList() {
  const userId = "450004d0-8139-43f4-9d91-3b5b74df02d9";
  const boards = await fetchBoards(userId);
  console.log(boards);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">My Trello Boards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {boards.map((board) => (
          <div className="relative group" key={board.id}>
            <Link href={`/boards/${board.id}`} key={board.id}>
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow h-32 flex flex-col justify-between">
                <h2 className="text-xl font-bold">{board.title}</h2>
                <div
                  className={`h-2 w-full rounded-b-lg`}
                  style={{ backgroundColor: board.color }}
                ></div>
              </div>
            </Link>
            <DeleteBoardIcon id={board.id} />
          </div>
        ))}
      </div>
    </>
  );
}
