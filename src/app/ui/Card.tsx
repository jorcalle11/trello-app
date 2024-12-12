import DeleteCardIcon from "./DeleteCardIcon";

export function Card({ id, title }: { id: string; title: string }) {
  return (
    <div className="bg-white rounded shadow p-2">
      <div className="flex justify-between items-center">
        <p>{title}</p>
        <DeleteCardIcon id={id} />
      </div>
    </div>
  );
}
