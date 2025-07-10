import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
   <button className="border p-5 rounded bg-black text-white">
   <Link href="/countries"> Country</Link>
   </button>
   <button className="border p-5 rounded bg-black text-white">
    <Link href="/users">Users</Link>
   </button>
   </>
  );
}
