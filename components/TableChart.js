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
  <>
    {mainCharacters.length > 0 ? (
      <Card className='ring-transparent'>
        <Title>Main Characters</Title>
        <Table className='mt-5'>
          <TableHead>
            <TableRow className='uppercase'>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Origin</TableHeaderCell>
              <TableHeaderCell>Gender</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {mainCharacters !== undefined &&
              mainCharacters.map((character) => (
                <TableRow key={character.id}>
                  <TableCell>
                    <Flex className='justify-start items-center'>
                      <Image
                        className='rounded-full mr-3 hover:scale-105'
                        src={character.image}
                        alt='img'
                        width={30}
                        height={30}
                      />
                      <Text className='hover:text-slate-300'>
                        {character.name}
                      </Text>
                    </Flex>
                  </TableCell>
                  <TableCell>
                    <Text className='hover:text-slate-300'>
                      {character.origin.name}
                    </Text>
                  </TableCell>
                  <TableCell>
                    {character.gender === "Male" ? (
                      <Badge className='bg-cyan-500' color='white'>
                        {character.gender}
                      </Badge>
                    ) : character.gender === "Female" ? (
                      <Badge className='bg-red-500' color='white'>
                        {character.gender}
                      </Badge>
                    ) : (
                      <Badge className='bg-amber-500' color='white'>
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
    ) : (
      <div className='text-white h-screen'>
        No characters found!Try to refresh the page
      </div>
    )}
  </>
);

export default TableChart;
