import Link from "next/link";
export function UserCard({ user }: any) {
  return (
    <Link href={`/users/${user.id}`}>
      <div className="p-4 border rounded shadow hover:bg-gray-50">
        <h2 className="font-semibold">{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </Link>
  );
}
