'use client'

import { UserCard } from "@/components/Usercard"
import axios from "axios"
import { useEffect, useState } from "react"

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=> setUsers(res.data))
        .catch(err=> console.error("Error fetching users:", err))   
    },[])


    return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Users</h1>
      <div className="grid gap-4">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}