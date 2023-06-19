import { Card, Title, DonutChart, Legend } from "@tremor/react";
// import { HiUsers } from "react-icons/hi2";

const characters = [
  {
    gender: "Male",
    number: 450,
  },
  {
    gender: "Female",
    number: 300,
  },
  {
    gender: "Unknown",
    number: 76,
  },
];

const valueFormatter = (number) => `${number.toString()}`;
// const valueFormatter = () => {
//   return <HiUsers className="text-white"/>
// }


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
      showAnimation="true"
      valueFormatter={valueFormatter}
      colors={["cyan", "rose", "amber"]}
    />
  </Card>
);

export default GenderChart;

{/* <Card className="bg-[#32363E] ring-transparent text-white h-full"> */}