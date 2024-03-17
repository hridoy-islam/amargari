import { Brands } from "../components/Brands";
import { Featured } from "../components/Featured";
import { Location } from "../components/Locations";
import { Slider } from "../components/Slider";

/* eslint-disable no-undef */
export const Home = () => {
  return (
    <>
      <Slider />
      <Location />
      <Brands />
      <Featured />
    </>
  );
};
