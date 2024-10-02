"use client";
import { myInfoNavList } from "@/constants/my-info-nav-list";
import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { Select, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderContent() {
  const pathname = usePathname();
  const { profile, error } = useProfile();

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col h-[200px] justify-end">
      <div className="flex justify-between mb-9">
        <h1 className="text-3xl font-semibold">{profile?.myProfile.name}</h1>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="flex items-center justify-center w-40 h-8 gap-2 border-2 border-border rounded-[8px]">
              <SelectValue placeholder="Request a Change" />
              <div className="w-4 h-4">
                <Image
                  src={"/icons/arrow.svg"}
                  width={0}
                  height={0}
                  alt="Arrow"
                  className="w-full h-full"
                />
              </div>
            </SelectTrigger>
          </Select>

          <Select>
            <SelectTrigger className=" flex items-center justify-center gap-2 w-14 h-8 border-2 border-border rounded-[8px]">
              <div className="w-4 h-4">
                <Image
                  src={"/icons/settings.svg"}
                  width={0}
                  height={0}
                  alt="Arrow"
                  className="w-full h-full"
                />
              </div>
              <div className="w-4 h-4">
                <Image
                  src={"/icons/arrow.svg"}
                  width={0}
                  height={0}
                  alt="Arrow"
                  className="w-full h-full"
                />
              </div>
            </SelectTrigger>
          </Select>
        </div>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-2 font-medium justify-between">
          {myInfoNavList.map((item) => {
            return (
              <NavigationMenuItem key={item.title} className="flex w-[90px] justify-center">
                <Link href={`/my-info${item.href}`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "p-4",
                      `/my-info${item.href}` === pathname
                        ? "bg-primary rounded-t-[8px]"
                        : "bg-transparent"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem className="flex w-[90px] justify-center">
            <NavigationMenuTrigger className={"bg-transparent p-4"}>
              More <span>&#9660;</span>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
