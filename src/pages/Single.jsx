import { useEffect, useState } from "react";
import { Typography, Card, Button } from "@material-tailwind/react";
import { ProductSlider } from "../components/ProductSlider";
import { SlCalender } from "react-icons/sl";
import { FaCar, FaPhoneVolume } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { RiGasStationLine } from "react-icons/ri";
import { MdOutlineSpeed } from "react-icons/md";
import { PiRoadHorizonLight } from "react-icons/pi";
import { CiShoppingTag } from "react-icons/ci";
import { IoColorPaletteOutline, IoLocationOutline } from "react-icons/io5";
import { CarGridView } from "../components/CarGridView";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../axios";

export function Single() {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [related, setRelated] = useState([]);
  const fetchData = async () => {
    const res = await axiosInstance.get(`/cars/${id}`);
    if (res.data.success) {
      setCar(res.data.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <section className="py-16 px-8">
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductSlider gallery={car?.gallery} />
        <div>
          <Typography className="mb-0" variant="h4">
            {car?.title}
          </Typography>
          <Typography variant="h6">Model : Axio</Typography>
          <Typography variant="h4" className="text-primary">
            BDT {car?.price}
          </Typography>

          <Card className="p-4 mb-2">
            <div className="flex gap-3 items-center">
              <IoLocationOutline className="text-primary text-4xl" />
              <p>
                {" "}
                <span className="font-bold">Location</span> : {car?.division}
                {car?.district}, Bangladesh
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 ">
            <Card className="p-4">
              <div className="flex gap-3 ">
                <CiShoppingTag className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Brand</span> <br />
                  <span className="text-md">{car?.brand}</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <IoColorPaletteOutline className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Color</span> <br />
                  <span className="text-md">{car?.color}</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex gap-3 ">
                <SlCalender className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Production</span> <br />
                  <span className="text-md">{car?.production_year}</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <SlCalender className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Registration</span> <br />
                  <span className="text-md">{car?.registration_year}</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <FaCar className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Condition</span> <br />
                  <span className="text-md">{car?.condition}</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <GiGearStickPattern className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Transmition</span> <br />
                  <span className="text-md">{car?.transmition}</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <RiGasStationLine className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Fuel Type</span> <br />
                  {car?.fuelType.map((item, index) => (
                    <span className="text-md mx-1" key={index}>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <MdOutlineSpeed className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Engine</span> <br />
                  <span className="text-md">{car?.engine_capacity} CC</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <PiRoadHorizonLight className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Kilometer</span> <br />
                  <span className="text-md">{car?.kilometer}</span>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Button className="bg-primary text-white my-2 w-full mx-auto flex items-center gap-3 ">
              <FaPhoneVolume className="text-4xl" />
              <p>Call Now - {car?.phone}</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto container my-8 shadow-xl p-4 rounded-lg">
        <Typography variant="h4">Details</Typography>

        <div dangerouslySetInnerHTML={{ __html: car?.details }} />
      </div>
      <div className="mx-auto container my-8 shadow-xl p-4 rounded-lg">
        <Typography variant="h4"> Safety Notice</Typography>
        <p>
          Do not under any circumstances pay in advance. Check the car carefully
          before you buy it. Ask for inspection certificates. Check ownership
          and registration details as well as a vehicle logbook. Meet at a safe
          and public location and bring someone with you. Pay after you collect
          the car. Always request proof of purchase (transfer receipt, email..)
          Look out for significantly undervalued cars. If it looks too good to
          be true, it probably is.
        </p>
      </div>
      <div className="mx-auto container my-8 shadow-xl px-10 py-4 rounded-lg flex justify-between items-center bg-gradient-to-r from-red-500 to-indigo-600">
        <div className="text-white">
          <p>Need to sell your car too?</p>
          <Typography variant="h4"> We will help you!</Typography>
        </div>
        <div>
          <Button className="bg-primary text-white ">
            <Link to="/dashboard/postads">Sell Your Car</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Single;
