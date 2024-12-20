import MainInfo from "./mainInfo.tsx";
import { fakeDataDetailsCard } from "./detailsCard/fakeDataDetailsCard";
import DetailsCard from "./detailsCard/detailsCard";

export default function UserData() {
  return (
    <aside className="flex flex-col items-center ">
      <MainInfo />
      <div className="flex flex-col gap-4 font-medium bg-transparent">
        {/* <Card className="w-56 border-none rounded-2xl bg-primary">
          <CardContent className="flex flex-col p-6">
            <p className="mb-4">Hire Date</p>
            <p className="mb-2">Sep. 3,2020</p>
            <p>3y - 9m - 20d</p>
          </CardContent>
        </Card>
        <Card className="w-56 border-none rounded-2xl bg-primary">
          <CardContent className="flex flex-col p-6 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/grid.svg"}
                  width={0}
                  height={0}
                  alt="Grid"
                  className="w-full h-full"
                />
              </div>
              <span>5</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/time.svg"}
                  width={0}
                  height={0}
                  alt="time"
                  className="w-full h-full"
                />
              </div>
              <span>Full-Time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/people.svg"}
                  width={0}
                  height={0}
                  alt="people"
                  className="w-full h-full"
                />
              </div>
              <span>Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/round.svg"}
                  width={0}
                  height={0}
                  alt="round"
                  className="w-full h-full"
                />
              </div>
              <span>Europe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/tag.svg"}
                  width={0}
                  height={0}
                  alt="tag"
                  className="w-full h-full"
                />
              </div>
              <span>London, UK</span>
            </div>
          </CardContent>
        </Card>
        <Card className="w-56 border-none rounded-2xl bg-primary">
          <CardContent className="flex flex-col p-6 gap-4">
            <span>Direct Reports</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/avatar.svg"}
                  width={0}
                  height={0}
                  alt="avatar"
                  className="w-full h-full"
                />
              </div>
              <span>Shane</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/avatar.svg"}
                  width={0}
                  height={0}
                  alt="avatar"
                  className="w-full h-full"
                />
              </div>
              <span>Nathan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/avatar.svg"}
                  width={0}
                  height={0}
                  alt="avatar"
                  className="w-full h-full"
                />
              </div>
              <span>Mitchel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/avatar.svg"}
                  width={0}
                  height={0}
                  alt="avatar"
                  className="w-full h-full"
                />
              </div>
              <span>Philip</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">
                <Image
                  src={"/aside/people.svg"}
                  width={0}
                  height={0}
                  alt="people"
                  className="w-full h-full"
                />
              </div>
              <span>4 More...</span>
            </div>
          </CardContent>
        </Card> */}
        {fakeDataDetailsCard.map((item) => (
          <DetailsCard title={item.title} info={item.info} key={item.title.text} />
        ))}
      </div>
    </aside>
  );
}
