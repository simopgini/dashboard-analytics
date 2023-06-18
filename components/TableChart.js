// "use client";

import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Flex,
} from "@tremor/react";
import Image from "next/image";

const data = [
  {
    name: "Viola Amherd",
    Role: "Federal Councillor",
    departement: "Male",
    status: "active",
  },
  {
    name: "Simonetta Sommaruga",
    Role: "Federal Councillor",
    departement: "Female",
    status: "active",
  },
  {
    name: "Alain Berset",
    Role: "Federal Councillor",
    departement: "Male",
    status: "active",
  },
  {
    name: "Ignazio Cassis",
    Role: "Federal Councillor",
    departement: "Female",
    status: "active",
  },
  {
    name: "Ueli Maurer",
    Role: "Federal Councillor",
    departement: "Unknown",
    status: "active",
  },
  {
    name: "Guy Parmelin",
    Role: "Federal Councillor",
    departement: "Unknown",
    status: "active",
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Federal Councillor",
    departement: "Female",
    status: "active",
  },
];

const TableChart = () => (
  <Card className="bg-[#32363E] ring-transparent text-white">
    <Title>Characters</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow className="uppercase">
          <TableHeaderCell className="uppercase text-[#e6e5e8]">
            Name
          </TableHeaderCell>
          <TableHeaderCell className="uppercase text-[#e6e5e8]">
            Origin
          </TableHeaderCell>
          <TableHeaderCell className="uppercase text-[#e6e5e8]">
            Gender
          </TableHeaderCell>
        </TableRow>
      </TableHead>


      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name} className="">
            <TableCell>
              <Flex className="justify-start items-center">
                  <Image
                    className="rounded-full mr-3"
                    src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
                    alt="img"
                    width={20}
                    height={20}
                  />
                <Text>{item.name}</Text>
              </Flex>
            </TableCell>
            <TableCell>
              <Text>{item.Role}</Text>
            </TableCell>
            <TableCell>
            <Badge color="stone">{item.departement}</Badge>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default TableChart;
