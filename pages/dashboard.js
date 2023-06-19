import CharactersCard from "@component/components/CharactersCard";
import EpisodesCard from "@component/components/EpisodesCard";
import GenderChart from "@component/components/GenderChart";
import LocationChart from "@component/components/LocationChart";
import TableChart from "@component/components/TableChart";
import {
  CHARACTERS_URL,
  EPISODES_URL,
  LOCATION_URL,
  MAIN_CHARACTERS_URL,
} from "@component/components/constants/Constants";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [characters, setCharacters] = useState(undefined);
  const [episodes, setEpisodes] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  async function fetchCharacters() {
    const response = await fetch(CHARACTERS_URL);
    const data = await response.json();
    setCharacters(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchCharacters();
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

  const [mainCharacters, setMainCharacters] = useState([]);

  async function fetchMainCharactersTable() {
    const response = await fetch(MAIN_CHARACTERS_URL);
    const data = await response.json();
    setMainCharacters(data);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    fetchMainCharactersTable();
  }, []);

  const [locationResidents, setLocationResidents] = useState([]);
  async function fetchLocationResidents() {
    const response = await fetch(LOCATION_URL);
    const data = await response.json();
    setLocationResidents(data);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    fetchLocationResidents();
  }, []);

  const [genderChart, setGenderChart] = useState(undefined);
  async function fetchGenderChart() {
    const response = await fetch(CHARACTERS_URL);
    const data = await response.json();
    setGenderChart(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchGenderChart();
  }, []);

  if (
    characters === undefined ||
    episodes === undefined ||
    mainCharacters === undefined ||
    genderChart === undefined ||
    locationResidents === undefined
  ) {
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

  return (
    <div className="p-4 bg-[#20232a] w-full">
      <div className="cards-container"></div>
      <div className="mb-4 grid md:grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <CharactersCard characters={characters} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <EpisodesCard episodes={episodes} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <GenderChart genderChart={genderChart.results} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
          <LocationChart
            locationResidents={locationResidents}
            className="bg-orange-400"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 row-span-4 gap-4">
          <TableChart mainCharacters={mainCharacters} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
