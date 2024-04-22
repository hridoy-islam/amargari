import React from "react";
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

export function Single() {
  return (
    <section className="py-16 px-8">
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductSlider />
        <div>
          <Typography className="mb-2" variant="h3">
            Toyota starlet soleil
          </Typography>
          <Typography variant="h4">Model : Axio</Typography>
          <Typography variant="h2" className="text-primary">
            BDT 1,490
          </Typography>

          <Card className="p-4 mb-2">
            <div className="flex gap-3 items-center">
              <IoLocationOutline className="text-primary text-4xl" />
              <p>
                {" "}
                <span className="font-bold">Location</span> : Dohar, Dhaka,
                Bangladesh
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 ">
            <Card className="p-4">
              <div className="flex gap-3 ">
                <CiShoppingTag className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Brand</span> <br />
                  <span className="text-md">Toyota</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <IoColorPaletteOutline className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Color</span> <br />
                  <span className="text-md">Red</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex gap-3 ">
                <SlCalender className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Production</span> <br />
                  <span className="text-md">2020</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <SlCalender className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Registration</span> <br />
                  <span className="text-md">2020</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <FaCar className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Condition</span> <br />
                  <span className="text-md">used</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <GiGearStickPattern className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Transmition</span> <br />
                  <span className="text-md">Automatic</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <RiGasStationLine className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Fuel Type</span> <br />
                  <span className="text-md">Gas, LPG</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <MdOutlineSpeed className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Engine</span> <br />
                  <span className="text-md">1500 CC</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex gap-3 ">
                <PiRoadHorizonLight className="text-primary text-4xl" />
                <div>
                  <span className="font-bold text-lg">Kilometer</span> <br />
                  <span className="text-md">4789122114</span>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Button className="bg-primary text-white my-2 w-full mx-auto flex items-center gap-3 ">
              <FaPhoneVolume className="text-4xl" />
              <p>Call Now</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto container my-8 shadow-xl p-4 rounded-lg">
        <Typography variant="h4">Details</Typography>
        <p>
          Condition : Excellent Car Name : Toyota Hilux Double Cabin Carry Boy
          Model : 2009 Registration : 2009 Serial : 11 Engine Capacity : 2500 cc
          Transmission : Manual Color : Pearl White Fuel System : Diesel
          Options: Excellent AC, Android DVD Player, Key Start, 4WD, HID
          Headlight & Fork Light, Leather Interior, Power Steering, Disk Brake,
          Power Windows, Airbag, Front & Back Bumper, Power Windows, Central
          Lock, Tempered Glass, All Power, All Papers R UP to Date. Note: If you
          want to check anything you can take this car to any automobile
          analyzing center. Business Center Name: N B CARS 1.Facebook page:
          https://www.facebook.com/nbcarsbd 2.Youtube channel :
          https://www.youtube.com/channel/UCujpQiK43mDMRrDrxan-h7g Email :
          nb.cars007@gmail.com Address: Please Visit Our Showroom, Road - 2,
          House - 10, Block - L, Near South Point School, Banani. We Are Open
          from Saturday to Thursday, All Kinds of Car Sales & Purchases. আমাদের
          সম্পূর্ণ গাড়ীর লিস্ট ও বিস্তারিত জানতে ভিজিট করুনঃ
          https://nbcarsbd.com/
        </p>
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
          <Button className="bg-primary text-white ">Sell Your Car</Button>
        </div>
      </div>
      <div className="mx-auto container my-8 shadow-xl p-6 rounded-lg">
        <Typography variant="h4"> You May Also Like </Typography>
        <div className="grid grid-cols-3 gap-3">
          <CarGridView />
          <CarGridView />
          <CarGridView />
        </div>
      </div>
    </section>
  );
}

export default Single;
