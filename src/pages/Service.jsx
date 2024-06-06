import { Card, Chip, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../axios";
import moment from "moment";

const TABLE_HEAD = [
  "Name",
  "Booking Date",
  "Phone",
  "Car",
  "Address",
  "Status",
];

export function Service() {
  const { user } = useSelector((state) => state.user);
  const [booking, setBooking] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/booking?user_id=${user.id}`);
      if (response.data.success) {
        setBooking(response.data.data.result);
      }
    } catch (error) {
      console.log(error.message);
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
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {booking.map(
            ({ name, bookingDate, phone, car, address, status }, index) => {
              const isLast = index === booking.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {moment(bookingDate).format("MMM Do YY")}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {phone}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {car}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {address}
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
                      <Chip
                        color="blue"
                        value={status}
                        className="text-center"
                      />
                    )}
                    {status == "completed" && (
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
