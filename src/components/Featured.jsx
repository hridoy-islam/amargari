import { useEffect, useState } from "react";
import { CarGridView } from "./CarGridView";
import axiosInstance from "../axios";

export const Featured = () => {
  const [listing, setListing] = useState();
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/cars?limit=4&status=approve`);
      setListing(response.data.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mx-auto">
      <h2>Featured New Cars For Sale</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {listing?.map((item, index) => (
          <CarGridView key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
