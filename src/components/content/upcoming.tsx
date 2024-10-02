import Image from "next/image";

export default function Upcoming() {
  return (
    <section className="px-6 w-full mb-6">
      <div className="flex items-center gap-1  text-accent">
        <div className="h-4 w-4">
          <Image
            width={0}
            height={0}
            src={"/aside/time.svg"}
            alt="Time"
            className="w-full h-full"
          />
        </div>
        <h2 className="font-medium">Time Off</h2>
      </div>

      <div className="border-[1px] border-border mt-3 mb-6"></div>

      <div className="flex items-center gap-2">
        <div className="h-8 w-8">
          <Image width={0} height={0} src={"/main/2.svg"} alt="Time" className="w-full h-full" />
        </div>
        <div className="font-medium">
          <span>Jan 27</span>
          <p>&#8226; 1 dey of Sick</p>
        </div>
      </div>

      <div className="border-[1px] border-border mt-3 mb-6"></div>

      <div className="flex items-center gap-2">
        <div className="h-8 w-8">
          <Image width={0} height={0} src={"/main/4.svg"} alt="Time" className="w-full h-full" />
        </div>
        <div className="font-medium">
          <span>Jul 4</span>
          <p>Independence Day</p>
        </div>
      </div>

      <div className="border-[1px] border-border mt-3"></div>
    </section>
  );
}
