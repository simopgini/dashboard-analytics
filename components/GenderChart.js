import { Card, Title, DonutChart, Legend } from "@tremor/react";

const characters = [
  {
    gender: "Male",
    number: 9800,
  },
  {
    gender: "Female",
    number: 4567,
  },
  {
    gender: "Unknown",
    number: 3908,
  },
];

const valueFormatter = (number) => `${number.toString()}`;

const GenderChart = () => (
  <Card className="text-white h-full">
    <Title>Gender</Title>
      <Legend
        className="mt-3"
        categories={["Male", "Female", "Unknown"]}
        colors={["cyan", "red", "amber"]}
      />
    <DonutChart
      className="mt-6"
      data={characters}
      category="number"
      index="gender"
      valueFormatter={valueFormatter}
      colors={["cyan", "rose", "amber"]}
    />
  </Card>
);

export default GenderChart;

{/* <Card className="bg-[#32363E] ring-transparent text-white h-full"> */}