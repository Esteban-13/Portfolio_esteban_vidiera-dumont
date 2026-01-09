"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        inline-flex items-center gap-2
        mb-12
        px-5 py-2
        text-sm font-medium
        rounded-full
        border
        bg-white
        hover:bg-gray-100
        transition
      "
    >
      <ArrowLeft className="w-4 h-4" />
      Retour
    </button>
  );
}
