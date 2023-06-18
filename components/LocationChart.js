import { Card, Title, BarChart } from "@tremor/react";

// import "../utils.module.css"

const chartdata = [
  {
    name: "Terra di Mezzo",
    Residents: 3,
  },
  {
    name: "Contea",
    Residents: 64,
  },
  {
    name: "Gondor",
    Residents: 43,
  },
  {
    name: "Lago",
    Residents: 24,
  },
  {
    name: "Mare",
    Residents: 64,
  },
  {
    name: "Bali",
    Residents: 43,
  },
  {
    name: "Bari",
    Residents: 4,
  },
  {
    name: "Monte Bromo",
    Residents: 64,
  },
];

const dataFormatter = (number) => {
  return Intl.NumberFormat("us").format(number).toString();
};

const LocationChart = () => {
  return (
    <Card className="rounded-xl bg-[#32363E] ring-transparent text-white">
      <Title className="text-white">Location Overview</Title>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={["Residents"]}
        colors={["cyan"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
};

export default LocationChart;
