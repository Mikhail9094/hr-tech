"use client";
import Container from "@/components/container/container";
import HeaderContent from "@/components/content/header-content";
import UserData from "@/components/userData/userData";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="bg-secondary w-full h-[200px] absolute z-[-1]"></div>
      <Container className="z-10">
        <div className="pr-6 pt-[34px]">
          <UserData />
        </div>
        <div className="w-[80%]">
          <HeaderContent />
          {children}
        </div>
      </Container>
    </div>
  );
}
