import { Card } from "@tremor/react";
import Image from "next/image";

const RocketCard = () => {
  return (
    <Card className='relative backdrop:rounded-xl ring-transparent overflow-hidden'>
      <div className='flex-none md:flex items-center pb-4'>
        <div className='lg:text-lg mb-10 h-64 md:h-44'>
          <p className='pb-1'>
            👋🏻 Hey Josè, <br></br>
          </p>
          your sales are soaring faster than a rocket, we promise!
          <br></br>
          Have a look at the stats by clicking the dashboard button in the menu.
        </div>
      </div>
      <Image
        className='absolute -bottom-4 -right-6 w-40 lg:w-40 2xl:w-40 overflow-hidden'
        src='/rocket.webp'
        alt='rocket'
        width={150}
        height={50}
        priority={true}
      />
    </Card>
  );
};

export default RocketCard;
