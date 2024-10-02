import History from "./history";
import TimeOff from "./timeOff";

import Upcoming from "./upcoming";

export default function Content() {
  return (
    <section className="w-full ">
      <TimeOff />
      <Upcoming />
      <History />
    </section>
  );
}
