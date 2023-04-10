import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex items-center justify-center gap-6">
      <p>
        Reader{" "}
        <span className="text-red-500 font-bold animate-pulse">declined</span>{" "}
        added to the log
      </p>
    </div>
  );
}
