import { Button, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const RentCar = () => {
  return (
    <>
    <Helmet>
        <title>Rent A Car - Garir Mela</title>
        <meta name="description" content="Best Rent a Car in Dhaka — We Believe In Transparency, With Absolutely No Hidden Charges In Any Form." />
        <meta name="keywords" content="garir mela, Dhaka, Car Wash, Car, Car Home Service" />
        <meta name="author" content="GarirMela" />
        <meta property="og:title" content="Rent A Car - Garir Mela" />
        <meta property="og:description" content="Best Rent a Car in Dhaka — We Believe In Transparency, With Absolutely No Hidden Charges In Any Form." />
        <meta property="og:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta property="og:url" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:title" content="Rent A Car - Garir Mela" />
        <meta name="twitter:description" content="Best Rent a Car in Dhaka — We Believe In Transparency, With Absolutely No Hidden Charges In Any Form." />
        <meta name="twitter:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
   
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl"
        >
          Comming Soon
        </Typography>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          We are working on it.Please try refreshing the page or come back
          later.
        </Typography>
        <Button color="gray" className="w-full px-4 md:w-[8rem]">
          <Link to="/">back home</Link>
        </Button>
      </div>
    </div>
    </>
  );
};
