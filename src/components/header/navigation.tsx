"use client";
import { mainNavList } from "@/constants/main-nav-list";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex w-[523px] hidden xl:block">
      <NavigationMenu>
        <NavigationMenuList className="flex text-lg">
          {mainNavList.map((item) => {
            return (
              <NavigationMenuItem key={item.title} className="flex">
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "p-4",
                      pathname.startsWith(item.href)
                        ? "bg-secondary rounded-t-[8px]"
                        : "bg-transparent"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
