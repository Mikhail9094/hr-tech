"use client";
import Header from "@/components/header/header";
import Loading from "@/components/loading";
import { useProfile } from "@/hooks/useProfile";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { profile, loading } = useProfile();

  if (loading) return <Loading />;

  if (!profile) {
    router.push("/");
  } else {
    return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
    );
  }
}
