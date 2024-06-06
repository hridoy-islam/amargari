import { Helmet } from "react-helmet";
import { Brands } from "../components/Brands";
import { Featured } from "../components/Featured";
import { OurServices } from "../components/OurServices";
import { Slider } from "../components/Slider";
import bread from "../assets/banner1.png";
/* eslint-disable no-undef */
export const Home = () => {
  return (
    <>
    <Helmet>
        <title>Garir Mela - Car Buy Sell Marketplace Bangladesh</title>
        <meta name="description" content="Garirmela.com is an online automotive marketplace designed to revolutionize the car buying, selling, and maintenance experience in Bangladesh." />
        <meta name="keywords" content="garir mela, Dhaka, Car Wash, Car, Car Home Service" />
        <meta name="author" content="GarirMela" />
        <meta property="og:title" content="Garir Mela - Car Buy Sell Marketplace Bangladesh" />
        <meta property="og:description" content="Garirmela.com is an online automotive marketplace designed to revolutionize the car buying, selling, and maintenance experience in Bangladesh." />
        <meta property="og:image" content={bread} /> 
        <meta property="og:url" content={bread} /> 
        <meta name="twitter:title" content="Garir Mela - Car Buy Sell Marketplace Bangladesh" />
        <meta name="twitter:description" content="Garirmela.com is an online automotive marketplace designed to revolutionize the car buying, selling, and maintenance experience in Bangladesh." />
        <meta name="twitter:image" content={bread} /> 
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Slider />
      <OurServices />
      <Brands />
      <Featured />
    </>
  );
};
