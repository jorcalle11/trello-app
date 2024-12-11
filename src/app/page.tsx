import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4 text-5xl font-bold">Trello App</h1>
      <p className="mb-4">Welcome to Trello App</p>
      {/* Creates a CTA button to redirect the user to the login page */}
      <Link
        href="/login"
        className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Login
      </Link>
    </main>
  );
}
