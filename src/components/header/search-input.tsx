import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function SearchInput() {
  return (
    <div className="w-[28%] relative hidden xl:block">
      <Input type="text" placeholder="Search" className="w-full pl-14 h-9 rounded-xl" />
      <Image
        src={"/icons/search.svg"}
        width={16}
        height={16}
        className="absolute top-1/2 left-[3%] -translate-y-1/2"
        alt="Search"
      />
    </div>
  );
}
