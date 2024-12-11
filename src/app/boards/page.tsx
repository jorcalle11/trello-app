import { BoardList } from "./BoardList";
import { CreateBoardForm } from "./CreateBoardForm";

export default function BoardsPage() {
  return (
    <main className="min-h-screen bg-blue-100 py-8">
      <div className="max-w-4xl mx-auto p-4">
        <BoardList />
        <CreateBoardForm />
      </div>
    </main>
  );
}
