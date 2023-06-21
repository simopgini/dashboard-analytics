import { Inter } from "next/font/google";
import RocketCard from "@component/components/RocketCard";
import Head from "next/head";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const router = useRouter();
  <Head>
    <title>Dashboard analytics</title>
    <meta name="description" content="Use this dashboard and increase your sales" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>;

  return (
      <div className="p-4 bg-gray-dark h-screen text-white">
        <RocketCard />
      </div>
  );
}

export default Home