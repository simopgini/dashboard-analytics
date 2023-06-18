import Image from "next/image";
import { Inter } from "next/font/google";
import RocketCard from "@component/components/RocketCard";
import { Card, Flex, Metric, Title } from "@tremor/react";
import { HiUser } from "react-icons/hi2";
import Head from "next/head";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  <Head>
    <title>Dashboard analytics</title>
    <meta name="description" content="Use this dashboard and increase your sales" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>;

  return (
    <div>
      <div className="p-4 bg-[#20232a] h-screen text-white lg:w-5/6 xl:w-2/3 2xl:w-2/3">
        <RocketCard />
        {/* <Card className="rounded-xl bg-[#32363E] text-white ring-transparent">
          <Flex className="items-center pb-4">
            <Title className="text-white">Characters</Title>
            <Flex className="bg-cyan-500 shadow-md w-10 h-10 rounded-full justify-center">
              <HiUser />
            </Flex>
          </Flex>
          <Metric className="pb-2">160</Metric>
        </Card> */}
      </div>
    </div>
  );
}
