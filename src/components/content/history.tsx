import { Select, SelectTrigger } from "@radix-ui/react-select";
import Image from "next/image";

export default function History() {
  return (
    <section className="flex flex-col px-6 w-full pb-16">
      <div className="flex items-center gap-1  text-accent mb-4">
        <div className="h-4 w-4">
          <Image width={0} height={0} src={"/main/5.svg"} alt="Time" className="w-full h-full" />
        </div>
        <h2 className="font-medium">History</h2>
      </div>

      <div className="flex flex-wrap justify-between mb-4">
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className=" flex items-center justify-between gap-2 w-[256px] h-8 border-2 border-border rounded-[8px] px-2">
              <p className="text-lg">Sick</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2">
                  <Image
                    src={"/main/x.svg"}
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
              </div>
            </SelectTrigger>
          </Select>

          <Select>
            <SelectTrigger className=" flex items-center justify-between gap-2 w-[96px] h-8 border-2 border-border rounded-[8px] px-2">
              <p className="text-lg">All</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2">
                  <Image
                    src={"/main/x.svg"}
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
              </div>
            </SelectTrigger>
          </Select>
        </div>
        <Select>
          <SelectTrigger className=" flex items-center justify-between gap-2 w-[176px] h-8 border-2 border-border rounded-[8px] px-2">
            <p className="text-base">Balance History</p>
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

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-[#DAE6F2]">
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Description</th>
            <th className="text-left p-2">Used Days (-)</th>
            <th className="text-left p-2">Earned Days (+)</th>
            <th className="text-left p-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b p-2">23/05/2024</td>
            <td className="border-b p-2">Accrual for 23/05/2024 to 20/11/2024</td>
            <td className="border-b p-2"></td>
            <td className="border-b p-2">3.00</td>
            <td className="border-b p-2">3.00</td>
          </tr>
          <tr>
            <td className="border-b p-2">23/05/2024</td>
            <td className="border-b p-2">Accrual for 23/05/2024 to 20/11/2024</td>
            <td className="border-b p-2">-6</td>
            <td className="border-b p-2"></td>
            <td className="border-b p-2">3.00</td>
          </tr>
          <tr>
            <td className="border-b p-2">23/05/2024</td>
            <td className="border-b p-2">Accrual for 23/05/2024 to 20/11/2024</td>
            <td className="border-b p-2"></td>
            <td className="border-b p-2">3.00</td>
            <td className="border-b p-2">3.00</td>
          </tr>
          <tr>
            <td className="border-b p-2">23/05/2024</td>
            <td className="border-b p-2">Accrual for 23/05/2024 to 20/11/2024</td>
            <td className="border-b p-2"></td>
            <td className="border-b p-2">3.00</td>
            <td className="border-b p-2">3.00</td>
          </tr>
          <tr>
            <td className="border-b p-2">23/05/2024</td>
            <td className="border-b p-2">Accrual for 23/05/2024 to 20/11/2024</td>
            <td className="border-b p-2">-6</td>
            <td className="border-b p-2"></td>
            <td className="border-b p-2">3.00</td>
          </tr>
          <tr>
            <td className="border-b p-2">23/05/2024</td>
            <td className="border-b p-2">Accrual for 23/05/2024 to 20/11/2024</td>
            <td className="border-b p-2"></td>
            <td className="border-b p-2">3.00</td>
            <td className="border-b p-2">3.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
