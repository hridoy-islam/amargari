import { useParams } from "react-router-dom";
import { CarGridView } from "../components/CarGridView";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";
export const BrandPage = () => {
  let { name } = useParams();

  const [listing, setListing] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/cars?brand=${name}`);
      setListing(response.data.data.result);
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
      {listing ? (
        <p> No Car Listed For this Brand</p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-3 container mx-auto">
            <CarGridView />
            <CarGridView />
            <CarGridView />
          </div>
        </>
      )}
    </div>
  );
};
