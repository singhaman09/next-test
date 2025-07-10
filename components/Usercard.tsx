import Link from "next/link";
import { Avatar } from "@heroui/react";

export function UserCard({ user }: any) {
  return (
    <Link href={`/users/${user.id}`}>
      <div className="p-5 bg-white border rounded-xl shadow-md hover:shadow-lg hover:bg-gray-50 transition">
        <div className="flex items-center gap-4">
          <Avatar
            src={`https://i.pravatar.cc/150?u=${user.id}`}
            alt={user.name}
            className="w-14 h-14 border-2 border-gray-300"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
