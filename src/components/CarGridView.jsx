import { Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { RiGasStationLine } from "react-icons/ri";
import { PiRoadHorizonLight } from "react-icons/pi";
import { MdOutlineSpeed } from "react-icons/md";
export const CarGridView = ({ data }) => {
  const galleryArray = JSON.parse(data?.gallery);

  const fuel = data?.fuelType ? JSON.parse(data?.fuelType) : [];

  return (
    <div className="border border-gray-300 p-2 rounded-lg relative shadow-md">
      {/* Image */}
      <img
        src={`https://res.cloudinary.com/dneodtbad/image/upload/${galleryArray[0]}`}
        alt={data?.title}
        className="w-full h-60 rounded-lg"
      />

      {/* <img
        src={galleryArray[0]}
        alt={data?.title}
        className="w-full h-60 rounded-lg"
      /> */}

      {/* Ribbon or Chip */}
      <div className="absolute top-4 left-4 z-10">
        <Chip
          value={data?.condition}
          className="rounded-full text-center bg-primary"
        />
      </div>

      {/* Content */}
      <div className="">
        <Link to={`/car/${data?.id}`}>
          <p className="text-xl font-bold text-black hover:text-primary">
            {data?.title}
          </p>
        </Link>
        <p className="font-semibold">BDT {data?.price}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-black flex items-center gap-1">
          <IoLocationOutline /> <span>{data?.district}</span>
        </p>
        <div className="flex items-center">
          <PiRoadHorizonLight className="text-primary text-xl mr-1" />
          <span>{data?.kilometer} K.M</span>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <RiGasStationLine className="text-primary text-xl" />
          {fuel.map((item, index) => (
            <span className="text-md mx-1" key={index}>
              {item.label}
            </span>
          ))}
        </div>
        <div className="flex items-center">
          <MdOutlineSpeed className="text-primary text-xl mr-1" />
          <span>{data?.engine_capacity} CC</span>
        </div>
      </div>

      {/* Action Button */}
      <Link to={`/car/${data?.id}`} className=" text-primary font-bold">
        View Details
      </Link>
    </div>
  );
};
