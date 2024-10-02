"use client";
import Container from "@/components/container/container";
import Loading from "@/components/loading";
import { useProfile } from "@/hooks/useProfile";
import { useLoginStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { profile, loading } = useProfile();
  const { accessToken } = useLoginStore.getState();

  if (loading) return <Loading />;

  if (profile && accessToken) {
    router.push("/my-info/time-off");
  } else {
    return (
      <Container className="flex-col h-dvh">
        <header className="flex w-full items-center justify-between px-2 pt-4">
          <div className="w-28 h-6 pb-[30px]">
            <Image
              src={"/logo.png"}
              width={0}
              height={0}
              alt="Logo"
              sizes="100vh"
              priority
              className="h-auto w-full"
            />
          </div>
          <div>
            <Link href="/auth/sign-in" className="px-4 py-2 bg-accent rounded-lg text-white">
              Sign in
            </Link>
          </div>
        </header>
        <main className="flex flex-grow justify-between items-center ">
          <div className="max-w-xl">
            <h1 className="text-5xl leading-relaxed font-bold">
              Welcome to <span className="text-6xl text-accent">HarmonyHR!</span>
            </h1>
          </div>
          <div className="w-[650px]">
            <Image
              src={"/home-HarmonyHR.png"}
              width={0}
              height={0}
              alt="welcome photo"
              sizes="100vh"
              priority
              className="h-auto w-full"
            />
          </div>
        </main>
      </Container>
    );
  }
}
