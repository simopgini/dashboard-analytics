import { Card, Subtitle, Metric, Flex, Title } from "@tremor/react";
import { HiUsers } from "react-icons/hi2";

const CharactersCard = ({mainCharacters}) => {
  return (
    <Card className="h-full">
      <Flex className="items-center pb-4">
        <Title className="text-white">Characters</Title>
        <Flex className="bg-cyan-500 shadow-md w-10 h-10 rounded-full justify-center">
        <HiUsers className="text-white"/>
        </Flex>
      </Flex>
      <Metric className="pb-2">{mainCharacters !== undefined ? mainCharacters.info.count : 0}</Metric>
      <Subtitle className="text-[#e6e5e8]">TOT</Subtitle>
    </Card>
  );
};

export default CharactersCard;
// className="rounded-xl bg-[#32363E] text-white ring-transparent"