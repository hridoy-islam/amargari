import { useParams } from "react-router-dom";
import { CarGridView } from "../components/CarGridView";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import { Helmet } from "react-helmet";
import bread from "../assets/breadcumb.jpeg";
export const BrandPage = () => {
  let { name } = useParams();

  const [listing, setListing] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/cars?searchTerm=${name}&status=approve`);
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
      <Helmet>
        <title>{name.toUpperCase()} Cars For Sale Bangladesh - Garir Mela</title>
        <meta name="description" content={`${name.toUpperCase()} Cars For Sale Bangladesh. We make the road to your next car as smooth as the ride at Garirmela.com.`} />
        <meta name="keywords" content={`${name.toUpperCase()}`} />
        <meta name="author" content={`${name.toUpperCase()}`} />
        <meta property="og:title" content={`${name.toUpperCase()} Cars For Sale Bangladesh - Garir Mela`} />
        <meta property="og:description" content={`${name.toUpperCase()} Cars For Sale Bangladesh. We make the road to your next car as smooth as the ride at Garirmela.com.`} />
        <meta property="og:image" content={bread} />
        <meta property="og:url" content={bread} />
        <meta name="twitter:title" content={`${name.toUpperCase()} Cars For Sale Bangladesh. We make the road to your next car as smooth as the ride at Garirmela.com.`} />
        <meta name="twitter:description" content={`${name.toUpperCase()} Cars For Sale Bangladesh. We make the road to your next car as smooth as the ride at Garirmela.com.`} />
        <meta name="twitter:image" content={bread} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
