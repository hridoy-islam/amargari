import { Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { RiGasStationLine } from "react-icons/ri";
import { PiRoadHorizonLight } from "react-icons/pi";
export const CarGridView = ({ data }) => {
  return (
    <div className="border border-gray-300 p-2 rounded-lg relative shadow-md">
      {/* Image */}
      <img
        src={`https://res.cloudinary.com/dneodtbad/image/upload/${data?.gallery[0]}`}
        alt={data?.title}
        className="w-full h-60 rounded-lg"
      />

      {/* Ribbon or Chip */}
      <div className="absolute top-4 left-4 z-10">
        <Chip
          value={data?.condition}
          className="rounded-full w-20 text-center bg-primary"
        />
      </div>

      {/* Content */}
      <div className="">
        <Link to={`/car/${data?._id}`}>
          <p className="text-xl font-bold text-black hover:text-primary">
            {data?.title}
          </p>
        </Link>
      </div>
      <div className="flex justify-between">
        <p className="">BDT {data?.price}</p>
        <p className="text-black flex items-center gap-1">
          <IoLocationOutline /> <span>{data?.district}</span>
        </p>
      </div>
      <div className="flex">
        <div className="flex items-center">
          <RiGasStationLine className="text-primary text-xl" />
          {data?.fuelType.map((item, index) => (
            <span className="text-md mx-1" key={index}>
              {item.label}
            </span>
          ))}
        </div>
        <div className="flex items-center">
          <PiRoadHorizonLight className="text-primary text-xl mr-1" />
          <span>{data?.kilometer} K.M</span>
        </div>
      </div>

      <div className="flex items-center">
        <PiRoadHorizonLight className="text-primary text-xl mr-1" />
        <span>{data?.engine_capacity} CC</span>
      </div>

      {/* Action Button */}
      <Link to={`/car/${data?._id}`} className=" text-primary font-bold">
        View Details
      </Link>
    </div>
  );
};
