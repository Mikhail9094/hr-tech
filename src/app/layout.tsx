import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ApolloWrapper from "@/components/apolloWrapper";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "HR Tech",
  description: "Приложение в тематике HR-tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.className}`}>
        <ApolloWrapper>
          {children} <Toaster />
        </ApolloWrapper>
      </body>
    </html>
  );
}
