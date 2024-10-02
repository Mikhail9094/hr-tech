"use client";

import Loading from "@/components/loading";
import { useProfile } from "@/hooks/useProfile";
import { useLoginStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { profile, loading } = useProfile();
  const { accessToken } = useLoginStore.getState();

  if (loading) return <Loading />;

  if (profile && accessToken) {
    router.push("/my-info/time-off");
  } else {
    return <>{children}</>;
  }
}
