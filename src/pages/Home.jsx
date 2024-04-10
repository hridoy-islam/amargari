import { Brands } from "../components/Brands";
import { Featured } from "../components/Featured";
import { OurServices } from "../components/OurServices";
import { Slider } from "../components/Slider";

/* eslint-disable no-undef */
export const Home = () => {
  return (
    <>
      <Slider />
      <OurServices />
      <Brands />
      <Featured />
    </>
  );
};
