"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { IDetailsCard } from "./types";
import { useState } from "react";
import React from "react";

export default function DetailsCard({ title, info }: IDetailsCard) {
  const step = 4;
  const [countItem, setCountItem] = useState(step);

  const changeCountItem = () => {
    info.length > countItem ? setCountItem((prev) => prev + 4) : setCountItem(4);
  };

  return (
    <Card className="w-56 border-none rounded-2xl bg-primary">
      <CardHeader className="pt-6 pr-6 pl-6 gap-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          {title.imgUrl && (
            <div className="w-4 h-4">
              <Image src={title.imgUrl} width={0} height={0} alt="" className="w-full h-full" />
            </div>
          )}
          <span>{title.text}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col pt-3 pr-6 pl-6 pb-6 gap-4">
        {info.slice(0, countItem).map((item) => (
          <div className="flex items-center gap-2" key={item.text}>
            {item.imgUrl && (
              <div className="w-4 h-4">
                <Image src={item.imgUrl} width={0} height={0} alt="" className="w-full h-full" />
              </div>
            )}
            <span>{item.text}</span>
          </div>
        ))}

        {info.length > countItem && (
          <button className="flex items-center gap-2" onClick={changeCountItem}>
            <div className="w-4 h-4">
              <Image
                src={"/aside/people.svg"}
                width={0}
                height={0}
                alt="4 More..."
                className="w-full h-full"
              />
            </div>
            <span>4 More...</span>
          </button>
        )}
        {info.length < countItem && info.length > step && (
          <button onClick={changeCountItem}>
            <span>Hide</span>
          </button>
        )}
      </CardContent>
    </Card>
  );
}
