import { Card, Title, BarChart } from "@tremor/react";

const LocationChart = ({ locationResidents }) => {
  const dataMapper = (input) => {
    let result = [];

    input.forEach((element) => {
      result.push({
        name: element.name,
        residents: element.residents.length,
      });
    });

    return result;
  };

  return (
    <Card className=" text-white">
      <Title className="text-white">Location Overview</Title>
      {locationResidents && locationResidents !== undefined && (
        <BarChart
          className="mt-6"
          data={dataMapper(locationResidents)}
          index={"name"}
          categories={["residents"]}
          colors={["cyan"]}
          yAxisWidth={48}
        />
      )}
    </Card>
  );
};

export default LocationChart;
