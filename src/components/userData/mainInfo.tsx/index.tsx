import { Card, CardContent } from "@/components/ui/card";
import { useLoginStore } from "@/store/store";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import React from "react";

export default function MainInfo() {
  const { user, loading } = useLoginStore.getState();
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <div className="w-[150px] h-[150px] relative top-4 ">
        <Avatar>
          <AvatarImage
            src={loading ? "/default.svg" : user?.avatar}
            alt={user?.name}
            className="rounded-full"
          />
        </Avatar>
      </div>
      <Card className="w-56 border-none rounded-2xl bg-primary">
        <CardContent className="flex flex-col p-6 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4">
              <Image
                src={"/aside/tel.svg"}
                width={0}
                height={0}
                alt="Telephone"
                className="w-full h-full"
              />
            </div>
            <span>07911 654321</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4">
              <Image
                src={"/aside/mail.svg"}
                width={0}
                height={0}
                alt="Email"
                className="w-full h-full"
              />
            </div>
            <span>avd.yana@videorollnet</span>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="w-4 h-4">
              <Image
                src={"/aside/linked.svg"}
                width={0}
                height={0}
                alt="linkedIn"
                className="w-full h-full"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src={"/aside/facebook.svg"}
                width={0}
                height={0}
                alt="facebook"
                className="w-full h-full"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                src={"/aside/twitter.svg"}
                width={0}
                height={0}
                alt="twitter"
                className="w-full h-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
