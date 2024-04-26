import { Card, Chip } from "@material-tailwind/react";
import {Link} from 'react-router-dom'

export const CarGridView = ({data}) => {
  return (
    <Card className="rounded-none border border-secondary">
      <img
        src={`https://res.cloudinary.com/dneodtbad/image/upload/${data?.gallery[0]}`}
        alt={data?.title}
      />
      <div className="p-4 space-y-1">
        <Chip
          value={data?.brand}
          className="rounded-full w-20 text-center bg-primary"
        />
        <h2 className="text-xl font-bold text-black">{data?.title}</h2>
        <p className="text-black text-lg font-semibold">BDT {data?.price}</p>
        <p className="text-black">Model: {data?.model}</p>
        <p className="text-black">Registration: {data?.registration_year}</p>
      </div>
      <Link to={`/car/${data?._id}`} className="p-2 w-full bg-primary text-white">See Details</Link>
    </Card>
  );
};
