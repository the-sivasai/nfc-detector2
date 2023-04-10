import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex items-center justify-center gap-6">
      <p>ESV_1235 wants to connect</p>
      <button
        className="bg-green-500 text-white px-2 py-1 rounded"
        onClick={() => router.push("/accept")}
      >
        Accept
      </button>
      <button
        onClick={() => router.push("/decline")}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Decline
      </button>
    </div>
  );
}
