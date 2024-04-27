import { useParams } from "react-router-dom";
import { CarGridView } from "../components/CarGridView";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";
export const BrandPage = () => {
  let { name } = useParams();

  const [listing, setListing] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/cars?searchTerm=${name}`);
      setListing(response.data.data.result);
      console.log(response.data.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [name]);
  return (
    <div>
      <h2 className="text-center my-6">Latest Cars by {name.toUpperCase()}</h2>
      {listing === null ? (
        <p className="text-xl font-bold text-center">Loading...</p>
      ) : listing.length < 1 ? (
        <p className="text-xl font-bold text-center">
          No Car Listed For this Brand
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-3 container mx-auto">
          {listing.map((item, index) => (
            <CarGridView key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};
