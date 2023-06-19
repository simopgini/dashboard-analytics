import { Card, Subtitle, Metric, Flex, Title } from "@tremor/react";
import { HiUsers } from "react-icons/hi2";

const CharactersCard = ({characters}) => {
  return (
    <Card className="h-full">
      <Flex className="items-center pb-4">
        <Title className="text-white">Characters</Title>
        <Flex className="bg-cyan-500 shadow-md w-10 h-10 rounded-full justify-center">
        <HiUsers className="text-white"/>
        </Flex>
      </Flex>
      <Metric className="pb-2">{characters !== undefined ? characters.info.count : 0}</Metric>
    </Card>
  );
};

export default CharactersCard;