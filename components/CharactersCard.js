import { Card, Subtitle, Metric, Flex, Title } from "@tremor/react";
import { HiUsers } from "react-icons/hi2";

const CharactersCard = () => {
  return (
    <Card className="rounded-xl bg-[#32363E] text-white ring-transparent">
      <Flex className="items-center pb-4">
        <Title className="text-white">Characters</Title>
        <Flex className="bg-cyan-500 shadow-md w-10 h-10 rounded-full justify-center">
        <HiUsers/>
        </Flex>
      </Flex>
      <Metric className="pb-2">160</Metric>
      <Subtitle className="text-[#e6e5e8]">In the first page</Subtitle>
    </Card>
  );
};

export default CharactersCard;