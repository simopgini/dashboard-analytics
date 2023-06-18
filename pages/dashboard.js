// "use client";

import CharactersCard from "@component/components/CharactersCard";
import EpisodesCard from "@component/components/EpisodesCard";
import GenderChart from "@component/components/GenderChart";
import LocationChart from "@component/components/LocationChart";
import TableChart from "@component/components/TableChart";
import { CHARACTERS_URL } from "@component/components/constants/Constants";
import { useEffect, useState } from "react";


const Dashboard = () => {
  //   const [mainCharacters, setMainCharacters] = useState();

  //   useEffect(() => {
  //     async function fetchMainCharacters() {
  //       const response = await fetch(MAIN_CHARACTERS_URL);
  //       const data = await response.json();
  //       setMainCharacters(data);
  //     }
  //     fetchMainCharacters();
  //   }, []);

const [mainCharacters, setMainCharacters] = useState({});
const [isLoading, setLoading] = useState(false)

// const [episodes, setEpisodes] = useState({});

// const [locationResidents, setLocationResidents] = useState([]);

//   useEffect(() => {
//     async function fetchLocationResidents() {
//       const response = await fetch(LOCATION_URL);
//       const data = await response.json();
//       setLocationResidents(data);
//     }
//     fetchLocationResidents();
//   }, []);

  useEffect(() => {
    setLoading(true)
    async function fetchMainCharacters() {
      const response = await fetch(CHARACTERS_URL);
      const data = await response.json();
      setMainCharacters(data);
      setLoading(false)
    }
    fetchMainCharacters();
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!mainCharacters) return <p>No profile data</p>

//   useEffect(() => {
//     async function fetchEpisodes() {
//       const response = await fetch(EPISODES_URL);
//       const data = await response.json();
//       setEpisodes(data);
//     }
//     fetchEpisodes();
//   }, []);


// console.log("proviamoconLocation", locationResidents)
// console.log("episodiinfo", locationResidents.results)
// console.log("episodicount", locationResidents.info.count)



// console.log("ziobimbo", mainCharacters)
// console.log("ariprova", mainCharacters.info)
// console.log("eddaje", mainCharacters.info.count)
// console.log("proviamoconepisodi", episodes)
// console.log("episodiinfo", episodes.info)
// console.log("episodicount", episodes.info.count)

// console.log("ariprova", mainCharacters.info[0])

// console.log("daje", mainCharacters.info.count)

//   const initialValue = {};

//   const charactersSum = mainCharacters.reduce(
//     (accumulator, currentValue) => accumulator.name + currentValue.name,
//     initialValue
//     );

//   console.log("vaccaboia",charactersSum)

  return (
    <div className="p-4 bg-[#20232a] w-full">
      <div className="cards-container">

      {/* {locationResidents[0].map((residentLocation) => {
          return (
            <>
              <li
                key={residentLocation.id}
                residentLocation={residentLocation}
                className="text-white"
              >
                {residentLocation.name} 
                {residentLocation.residents.length}
              </li>
            </>
          );
        })} */}
        
        <p className="text-white">totalzzzz:
        {/* {mainCharacters}
        <span>CHARACTERS: {mainCharacters.info.count}</span><br></br>
        <span>EPISODES: {episodes.info.count}</span> */}
        {/* <br></br><span>EPISODES: {locationResidents.info.count}</span> */}

        </p>
        
        {/* <p className="text-white">totalzzzz: {mainCharacters.info.count}</p> */}
        {/* <p className="text-white">totalzzzz: {charactersSum}</p> */}

        {/* {mainCharacters.reduce((accumulator, currentValue) => {
          accumulator + currentValue, 0;
          return (
            <p key={character.id} character={character} className="text-white">
              {character.name} {character.gender} {character.episode[0]}
            </p>
          );
        })} */}
        {/* {mainCharacters.map((character) => {
          return (
            <>
              <li
                key={character.id}
                character={character}
                className="text-white"
              >
                {character.name} {character.gender} {character.episode[0]}
              </li>
            </>
          );
        })} */}
        
        {/* {mainCharacters.info.map((count) => {
          return (
            <li key={count.index} count={count}>
              {count.count}
            </li>
          );
        })} */}
        {/* <p>{info.count}</p> */}
      </div>
      <div className="mb-4 grid md:grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <CharactersCard className="" />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <EpisodesCard className="" />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <GenderChart className="" />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <LocationChart className="bg-orange-400" />
        </div>
        <div className="col-span-12 lg:col-span-6 row-span-4 gap-4">
          <TableChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// import { Col, Grid } from "@tremor/react";
// import CharactersCard from "../components/CharactersCard";
// import LocationChart from "../components/LocationChart";
// import GenderChart from "../components/GenderChart";
// import { useEffect, useState } from "react";
// import { CHARACTERS_URL, EPISODES_URL, LOCATION_URL } from "../components/constants/Constants";
// import TableChart from "../components/TableChart";
// import EpisodesCard from "../components/EpisodesCard";