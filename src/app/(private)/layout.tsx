"use client";
import Header from "@/components/header/header";
import AuthLayout from "@/layouts/AuthLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AuthLayout>
        <Header />
        <main>{children}</main>
      </AuthLayout>
    </div>
  );
}
