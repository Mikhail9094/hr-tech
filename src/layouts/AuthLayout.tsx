"use client";
import Loading from "@/components/loading";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuth, loading } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      router.replace("/");
    }
  }, [isAuth, router]);

  if (loading) return <Loading />;

  return <>{children}</>;
}
