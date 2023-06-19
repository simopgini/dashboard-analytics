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

const TableChart = ({ mainCharacters }) => (
  <Card className="bg-[#32363E] ring-transparent text-white">
    <Title>Main Characters</Title>
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
        {mainCharacters !== "undefined" &&
          mainCharacters.map((character) => (
            <TableRow key={character.id} className="">
              <TableCell>
                <Flex className="justify-start items-center">
                  <Image
                    className="rounded-full mr-3 hover:scale-105"
                    src={character.image}
                    alt="img"
                    width={30}
                    height={30}
                  />
                  <Text className="hover:text-slate-300">{character.name}</Text>
                </Flex>
              </TableCell>
              <TableCell>
                <Text className="hover:text-slate-300">
                  {character.origin.name}
                </Text>
              </TableCell>
              <TableCell>
                {character.gender === "Male" ? (
                  <Badge className="bg-cyan-500" color="white">
                    {character.gender}
                  </Badge>
                ) : character.gender === "Female" ? (
                  <Badge className="bg-red-500" color="white">
                    {character.gender}
                  </Badge>
                ) : (
                  <Badge className="bg-amber-500" color="white">
                    {character.gender}
                  </Badge>
                )}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </Card>
);

export default TableChart;
