"use client";

import Loading from "@/components/loading";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { isAuth, loading } = useAuth();

  if (loading) return <Loading />;

  if (isAuth) {
    router.replace("/my-info/time-off");
  } else {
    return <>{children}</>;
  }
}
