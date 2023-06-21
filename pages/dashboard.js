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
import Error from "next/error";

const Dashboard = () => {
  const [characters, setCharacters] = useState(undefined);
  const [episodes, setEpisodes] = useState(undefined);

  async function fetchCharacters() {
    const res = await fetch(CHARACTERS_URL);
    if (!res.ok)
      throw new Error(
        "Something went wrong: could not retrieve the characters...please refresh the page"
      );
    const data = await res.json();
    setCharacters(data);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchEpisodes() {
    const res = await fetch(EPISODES_URL);

    if (!res.ok)
      throw new Error(
        "Something went wrong: could not retrieve the episodes...please refresh the page"
      );
    const data = await res.json();
    setEpisodes(data);
  }

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const [mainCharacters, setMainCharacters] = useState([]);

  async function fetchMainCharactersTable() {
    const res = await fetch(MAIN_CHARACTERS_URL);
    if (!res.ok)
      throw new Error(
        "Something went wrong: could not retrieve the characters...please refresh the page"
      );
    const data = await res.json();
    setMainCharacters(data);
  }
  useEffect(() => {
    fetchMainCharactersTable();
  }, []);

  const [locationResidents, setLocationResidents] = useState([]);
  async function fetchLocationResidents() {
    const res = await fetch(LOCATION_URL);
    if (!res.ok)
      throw new Error(
        "Something went wrong: could not retrieve the info...please refresh the page"
      );
    const data = await res.json();
    setLocationResidents(data);
  }
  useEffect(() => {
    fetchLocationResidents();
  }, []);

  const [genderChart, setGenderChart] = useState(undefined);
  async function fetchGenderChart() {
    const res = await fetch(CHARACTERS_URL);
    if (!res.ok)
      throw new Error(
        "Something went wrong: could not retrieve the info...please refresh the page"
      );
    const data = await res.json();
    setGenderChart(data);
  }

  useEffect(() => {
    fetchGenderChart();
  }, []);

  if (
    !characters ||
    !episodes ||
    !genderChart ||
    !locationResidents ||
    !mainCharacters
  )
    return (
      <div className='h-screen text-white text-lg pl-6 pt-6'>
        <p>
          Oops! Something went wrong: no data retrieved, try to refresh the page
        </p>
      </div>
    );

  if (
    characters === undefined ||
    episodes === undefined ||
    mainCharacters === undefined ||
    genderChart === undefined ||
    locationResidents === undefined
  ) {
    return (
      <div className='h-screen text-white text-lg pl-6 pt-6'>
        <p className='pr-4 pb-4'>Loading...</p>
        <div className='spinner'></div>
      </div>
    );
  }

  return (
    <div className='p-4 bg-gray-dark w-full'>
      <div className='mb-4 grid md:grid-rows-1 grid-cols-1 md:grid-cols-12 lg:grid-cols-6 gap-4'>
        <div className='col-span-12 md:col-span-6 lg:col-span-3 row-span-2'>
          <CharactersCard characters={characters} />
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-3 row-span-2'>
          <EpisodesCard episodes={episodes} />
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-3 row-span-2'>
          <GenderChart genderChart={genderChart.results} />
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-3 row-span-2'>
          <LocationChart locationResidents={locationResidents} />
        </div>
        <div className='col-span-12 lg:col-span-6 row-span-4 gap-4'>
          <TableChart mainCharacters={mainCharacters} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
