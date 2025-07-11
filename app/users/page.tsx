"use client";

import { UserCard } from "@/components/Usercard";
import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";

export default function UsersPage() {
  const { users, fetchUsers, loading } = useUserStore();

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading users...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
