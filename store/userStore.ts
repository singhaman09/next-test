import { create } from "zustand";
import { persist } from "zustand/middleware";
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
  loading: boolean;
  fetchUsers: () => Promise<void>;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [],
      loading: false,

      fetchUsers: async () => {
        set({ loading: true });
        try {
          const res = await axios.get("https://jsonplaceholder.typicode.com/users");
          set({ users: res.data });
        } catch (err) {
          console.error("Error fetching users:", err);
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "user-storage", // key in localStorage
    }
  )
);
