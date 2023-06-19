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
      <div className="p-4 bg-[#20232a] h-screen text-white">
        <RocketCard />
      </div>
  );
}
