import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const RentCar = () => {
  return (
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
  );
};
