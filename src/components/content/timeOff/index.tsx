import Image from "next/image";
import { fakeData } from "./fakeData";
import Card from "./card";

export default function TimeOff() {
  return (
    <section className="p-6 rounded w-full mb-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-1  text-accent">
          <div className="h-4 w-4">
            <Image width={0} height={0} src={"/main/1.svg"} alt="Time" className="w-full h-full" />
          </div>
          <h2 className="text-xl font-medium">Time Off</h2>
        </div>
        <div className="flex items-center gap-8">
          <p>
            Accrual Level Start Date
            <span className="text-accent">03/09-2020</span>
          </p>
          <button className="p-2 border-solid border-2 rounded-[8px] border-black">
            Add Time Off Policy
          </button>
        </div>
      </div>

      <div className="border-[1px] border-border mt-3 mb-6"></div>

      <div className="flex flex-wrap justify-center items-center gap-12 mt-6">
        {fakeData.map((item) => (
          <Card data={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
