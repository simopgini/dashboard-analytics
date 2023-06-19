import { Card } from "@tremor/react";
import Image from "next/image";

const RocketCard = () => {
  return (
    <Card className="relative backdrop:rounded-xl bg-[#32363E] ring-transparent">
      <div className="flex-none md:flex items-center pb-4">
        <div className="lg:text-lg mb-10 h-64 md:h-44">
          <p className="pb-1">
            👋🏻 Hey Simona, <br></br>
          </p>
          we promise, your sales are soaring faster than a rocket!
          <br></br>
          Have a look at the stats by clicking the dashboard button in the menu.
        </div>
      </div>
      {/* <div className="h-20 overflow-hidden bg-"> */}
        <Image
          className="absolute -bottom-4 -right-6 w-40 lg:w-40 2xl:w-40"
          src="/rocket.webp"
          alt="rocket"
          width={150}
          height={50}
          priority={true}
        />
        {/* <div class="bg-transparent z-10 ">dfg</div>
        <div class="absolute -z-10 bg-[#ff5d8f] w-48 h-64">as</div>
      </div> */}
    </Card>
  );
};

export default RocketCard;