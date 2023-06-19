import { Card, Subtitle, Metric, Flex, Icon, Title, ProgressBar } from "@tremor/react";

import { HiBookOpen } from "react-icons/hi2";
const EpisodesCard = ({episodes}) => {
  return (
    <Card className="h-full">
      <Flex className="items-center pb-4">
        <Title className="text-white">Episodes</Title>
        <Flex className="bg-cyan-500 shadow-md w-10 h-10 rounded-full justify-center">
          <Icon className="text-white font-semibold" size="md" icon={HiBookOpen} />
        </Flex>
      </Flex>
      <Metric className="pb-2">{episodes !== undefined ? episodes.info.count : 0}</Metric>
      <ProgressBar value={80} color="amber" className="mt-3" />
    </Card>
  );
};

export default EpisodesCard;