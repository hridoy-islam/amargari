import { Card, Chip, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axiosInstance from "../axios";
import { Link } from "react-router-dom";

export function Listings() {
  const { user } = useSelector((state) => state.user);
  const [listing, setListing] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/cars?user_id=${user.id}`);
      setListing(response.data.data.result);
      console.log(listing);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [user]);
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Title
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Brand
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Price
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Model
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Status
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {listing?.map(
            ({ _id, title, brand, price, model, status }, index) => {
              const isLast = index === listing.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    {status === "active" && (
                      <Link to={`/car/${_id}`} target="_blank">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {title}
                        </Typography>
                      </Link>
                    )}
                    {status === "pending" && (
                      <Link to={``} target="_blank">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {title}
                        </Typography>
                      </Link>
                    )}
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {brand}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {model}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {status == "pending" && (
                      <Chip
                        color="amber"
                        value={status}
                        className="text-center"
                      />
                    )}
                    {status == "approved" && (
                      <>
                        <Chip
                          color="blue"
                          value={status}
                          className="text-center"
                        />
                        <Chip
                          color="blue"
                          value={"Mark As Sold"}
                          className="text-center"
                        />
                      </>
                    )}
                    {status == "sold" && (
                      <Chip
                        color="green"
                        value={status}
                        className="text-center"
                      />
                    )}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
}
