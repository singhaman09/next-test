import { create } from "zustand";
import axios from "@/lib/api";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
  company?: { name: string };
};

type UserStore = {
  users: User[];
  fetchUsers: () => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      set({ users: res.data });
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  },
}));
