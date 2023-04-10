import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isAccepting, setIsAccepting] = useState(false);
  const [isDeclining, setIsDeclining] = useState(false);

  const handleAccept = () => {
    setIsAccepting(true);
    setTimeout(() => {
      router.push("/accept");
    }, 3000);
  };

  const handleDecline = () => {
    setIsDeclining(true);
    setTimeout(() => {
      router.push("/decline");
    }, 3000);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center gap-6">
      <p>ESV_1235 wants to connect</p>

      <button
        className="bg-green-500 text-white px-2 py-1 rounded"
        onClick={handleAccept}
        disabled={isAccepting || isDeclining}
      >
        {isAccepting ? "Accepting..." : "Accept"}
      </button>

      <button
        className="bg-red-500 text-white px-2 py-1 rounded"
        onClick={handleDecline}
        disabled={isDeclining || isAccepting}
      >
        {isDeclining ? "Declining..." : "Decline"}
      </button>
    </div>
  );
}
