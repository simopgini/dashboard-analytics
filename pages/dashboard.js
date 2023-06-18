import CharactersCard from "@component/components/CharactersCard";
import EpisodesCard from "@component/components/EpisodesCard";
import GenderChart from "@component/components/GenderChart";
import LocationChart from "@component/components/LocationChart";
import RocketCard from "@component/components/RocketCard";
import TableChart from "@component/components/TableChart";
import {
  CHARACTERS_URL,
  EPISODES_URL,
  LOCATION_URL,
} from "@component/components/constants/Constants";
import { useEffect, useState } from "react";

const Dashboard = () => {

  const [mainCharacters, setMainCharacters] = useState(undefined);
  const [episodes, setEpisodes] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  async function fetchMainCharacters() {
    const response = await fetch(CHARACTERS_URL);
    const data = await response.json();
    setMainCharacters(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchMainCharacters();
  }, []);

  async function fetchEpisodes() {
    const response = await fetch(EPISODES_URL);
    const data = await response.json();
    setEpisodes(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchEpisodes();
  }, []);

  // const [locationResidents, setLocationResidents] = useState([]);

  //   useEffect(() => {
  //     async function fetchLocationResidents() {
  //       const response = await fetch(LOCATION_URL);
  //       const data = await response.json();
  //       setLocationResidents(data);
  //     }
  //     fetchLocationResidents();
  //   }, []);


  // console.log("ziobimbo", mainCharacters);
  // console.log("ariprova", mainCharacters.info);
  // console.log("eddaje", mainCharacters.info.count)
  // console.log("proviamoconepisodi", episodes);
  // console.log("episodiinfo", episodes.info);
  // console.log("episodicount", episodes.info.count)


  // console.log("proviamoconLocation", locationResidents)
  // console.log("episodiinfo", locationResidents.results)
  // console.log("episodicount", locationResidents.info.count)

  if (mainCharacters === undefined || episodes === undefined) {
    return (
      <div className="h-screen text-white text-lg pl-6 pt-6">
        <p className="pr-4">Loading...</p>
        <div className="spinner"></div>
      </div>
    );
  }

  // if (!mainCharacters)
  //   return (
  //     <div className="">
  //       <p>No profile data, try to refresh the page</p>
  //     </div>
  //   );

  //   const initialValue = {};

  //   const charactersSum = mainCharacters.reduce(
  //     (accumulator, currentValue) => accumulator.name + currentValue.name,
  //     initialValue
  //     );

  //   console.log("vaccaboia",charactersSum)

  return (
    <div className="p-4 bg-[#20232a] w-full">
      <div className="cards-container">

      </div>

      {/* <p className="text-white">
          totalzzzz: {mainCharacters.info.count}
      </p> */}

      <div className="mb-4 grid md:grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <CharactersCard mainCharacters={mainCharacters} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <EpisodesCard episodes={episodes} />
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
