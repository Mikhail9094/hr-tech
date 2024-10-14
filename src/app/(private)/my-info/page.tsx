"use client";

import { useRouter } from "next/navigation";

export default function MyInfo() {
  const router = useRouter();

  router.push("/my-info/personal");

  return <div className="relative"></div>;
}
