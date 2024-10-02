"use client";
import Image from "next/image";
import Navigation from "./navigation";
import SearchInput from "./search-input";
import Link from "next/link";
import IconsGroup from "./options";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-6 pt-8 bg-primary">
      <div className="w-[116px] h-[24px] pb-[30px]">
        <Link href={"/home"}>
          <Image src={"/logo.png"} width={116} height={24} alt="Logo" priority className="w-full" />
        </Link>
      </div>
      <Navigation />
      <SearchInput />
      <IconsGroup />
    </header>
  );
}
