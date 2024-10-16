"use client";
import Image from "next/image";
import { useLoginStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { headerIconsList } from "@/constants/header-icons-list";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { TOKEN_AUTH } from "@/constants/auth";
import { useApolloClient } from "@apollo/client";

export default function IconsGroup() {
  const router = useRouter();
  const { user, loading, clearUser } = useLoginStore.getState();
  const client = useApolloClient();

  const logOut = () => {
    localStorage.removeItem(TOKEN_AUTH);
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
    client.cache.reset();
    clearUser();
    router.replace("/");
  };

  return (
    <div className="flex items-center gap-6 z-10">
      <div className="xl:flex items-center gap-6 hidden">
        {headerIconsList.map((icon) => (
          <button className="w-6 h-6" key={icon.id}>
            <Image src={icon.src} width={0} height={0} alt={icon.alt} className="w-full h-full" />
          </button>
        ))}
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[38px] rounded-full cursor-pointer outline-none transition duration-300 ease-in-out transform hover:scale-110 ">
            <Avatar>
              <AvatarImage
                src={loading ? "/default.svg" : user?.avatar}
                alt="Avatar"
                className="rounded-full"
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=" p-2 mt-2 rounded-[6px] bg-primary ">
            <DropdownMenuItem className="px-3 py-1 outline-none">
              <Button
                className="flex gap-2 px-3 py-1 border-secondary border-2 hover:bg-secondary transform active:scale-95 transition duration-200"
                onClick={logOut}
              >
                <Image
                  src={"/icons/logout.svg"}
                  width={0}
                  height={0}
                  alt="logout"
                  className="w-full h-full"
                />
                Log out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
