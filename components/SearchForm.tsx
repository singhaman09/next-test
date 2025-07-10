"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  q: z.string().min(3, "Enter a country name"),
});

export default function SearchForm({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { q: defaultValue },
  });

  const onSubmit = (data: any) => {
    router.push(`/countries?q=${data.q}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <input
        {...register("q")}
        placeholder="Search country..."
        className="border px-3 py-1 rounded w-full"
      />
      {errors.q && <p className="text-red-500 text-sm mt-1">{errors.q.message}</p>}
      <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}
