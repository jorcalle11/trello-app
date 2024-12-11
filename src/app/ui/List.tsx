import { fetchCards } from "../lib/data";
import { Card } from "./Card";

export async function List({ id, title }: { id: string; title: string }) {
  const cards = await fetchCards(id);

  return (
    <div className="bg-gray-100 text-gray-800 rounded-lg p-4 w-72 flex-shrink-0">
      <h2 className="font-bold mb-4">{title}</h2>
      <div className="space-y-2">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>
      {/* <AddCard listId={list.id} /> */}
    </div>
  );
}
