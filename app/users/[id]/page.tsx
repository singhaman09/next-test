"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { use } from "react";

export type Props = {
  params: Promise<{ id: string }>;
};
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
  company?: { name: string };
};

export default function UserDetail({ params }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 const { id } = use(params);
  const userId = encodeURIComponent(id); /// Sanitizing the input

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await res.json();
        setUser(data);
      } catch {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <div className="min-h-screen bg-gray-100 p-6 text-center">Loading...</div>;
  }

  if (error || !user) {
    return <div className="min-h-screen bg-gray-100 p-6 text-center text-red-500">{error || "User not found"}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={`https://i.pravatar.cc/150?u=${user.id}`}
            alt={user.name}
            className="rounded-full border-2 border-gray-300"
            width={70}
            height={70}
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </div>
        <div className="text-gray-700 space-y-2">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
        </div>
      </div>
    </div>
  );
}