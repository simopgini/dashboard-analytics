import { Card, Title, DonutChart, Legend } from "@tremor/react";

const dataFormatter = (input) => {
  let countMales = 0;
  let countFemales = 0;
  let countUnknow = 0;

  input.forEach((element) => {
    if (element.gender === "Male") {
      countMales += 1;
    } else if (element.gender === "Female") {
      countFemales += 1;
    } else if (element.gender === "unknown") {
      countUnknow += 1;
    }
  });

  return [
    {
      gender: "Male",
      number: countMales,
    },
    {
      gender: "Female",
      number: countFemales,
    },
    {
      gender: "unknown",
      number: countUnknow,
    },
  ];
};

const GenderChart = ({ genderChart }) => (
  <Card className="text-white h-full">
    <Title>Gender</Title>
    <Legend
      className="mt-3"
      categories={["Male", "Female", "unknown"]}
      colors={["cyan", "red", "amber"]}
    />
    <DonutChart
      className="mt-6"
      data={dataFormatter(genderChart)}
      category="number"
      index="gender"
      colors={["cyan", "rose", "amber"]}
    />
  </Card>
);

export default GenderChart;
