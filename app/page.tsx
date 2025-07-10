import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Server and CLient side api testing </h1>

      <div className="flex gap-6">
        <Link
          href="/countries"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
        >
          Explore Countries
        </Link>

        <Link
          href="/users"
          className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
        >
          View Users
        </Link>
      </div>
    </main>
  );
}
