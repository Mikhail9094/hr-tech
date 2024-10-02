import Image from "next/image";
import { ICardProps } from "./types";
export default function Card({ data }: ICardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="bg-background rounded-xl w-[264px] flex flex-col gap-1 items-center justify-center py-4">
        <h3 className="font-semibold text-xl">{data.title}</h3>
        <div className="flex gap-1 items-center">
          <div className="w-8 h-8">
            <Image
              width={0}
              height={0}
              src={data.imgUrl}
              alt={data.title}
              className="w-full h-full"
            />
          </div>
          <span className="font-semibold text-3xl">{data.number}</span>
        </div>
        <h4 className="font-semibold">{data.subtitle}</h4>
        <p className="font-semibold text-border">{data.description}</p>
      </div>
      <p className="font-semibold text-border">{data.comment}</p>
    </div>
  );
}
