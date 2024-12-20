import { fetchCards } from "../lib/data";
import { Card } from "./Card";
import CreateCardForm from "./CreateCardForm";
import DeleteListIcon from "./DeleteListIcon";

export async function List({ id, title }: { id: string; title: string }) {
  const cards = await fetchCards(id);

  return (
    <div className="bg-gray-100 text-gray-800 rounded-lg p-4 w-72 flex-shrink-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">{title}</h2>
        <DeleteListIcon id={id} />
      </div>
      <div className="space-y-2">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} />
        ))}
      </div>
      <div className="mt-4">
        <CreateCardForm listId={id} />
      </div>
    </div>
  );
}
