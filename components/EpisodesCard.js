import { Card, Subtitle, Metric, Flex, Icon, Title } from "@tremor/react";

import { HiBookOpen } from "react-icons/hi2";
const EpisodesCard = () => {
  return (
    <Card className="rounded-xl bg-[#32363E] text-white ring-transparent">
      <Flex className="items-center pb-4">
        <Title className="text-white">Episodes</Title>
        <Flex className="bg-cyan-500 shadow-md w-10 h-10 rounded-full justify-center">
          <Icon className="text-white font-semibold" size="md" icon={HiBookOpen} />
        </Flex>
      </Flex>
      <Metric className="pb-2">52</Metric>
      <Subtitle className="text-[#e6e5e8]">In the first page</Subtitle>
    </Card>
  );
};

export default EpisodesCard;
