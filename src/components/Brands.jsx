import { Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import toyotalogo from "../assets/toyota-logo.png";
import hondalogo from "../assets/honda-logo.png";
import nissanlogo from "../assets/nissan-logo.png";
import hyundailogo from "../assets/hyundai-logo.png";
import mercedeslogo from "../assets/mercedes-benz-logo.png";
import kialogo from "../assets/kia-logo.png";
import mazdalogo from "../assets/mazda-logo.png";
import mitsubishilogo from "../assets/mitsubishi-logo.png";
const brands = [
  {
    id: "1",
    name: "Toyota",
    slug: "toyota",
    img: toyotalogo,
  },
  {
    id: "2",
    name: "Honda",
    slug: "honda",
    img: hondalogo,
  },
  {
    id: "3",
    name: "Nissan",
    slug: "nissan",
    img: nissanlogo,
  },
  {
    id: "4",
    name: "Hundai",
    slug: "hundai",
    img: hyundailogo,
  },
  {
    id: "5",
    name: "Mercedes Benz",
    slug: "mercedesbenz",
    img: mercedeslogo,
  },
  {
    id: "6",
    name: "Kia",
    slug: "kia",
    img: kialogo,
  },
  {
    id: "7",
    name: "Mazda",
    slug: "mazda",
    img: mazdalogo,
  },
  {
    id: "8",
    name: "Mitsubishi",
    slug: "mitsubishi",
    img: mitsubishilogo,
  },
];

export const Brands = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2>Popular Brands</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-10">
        {brands.map((item, index) => (
          <Link to={`/brand/${item.slug}`} key={index}>
            <Card className="text-center p-4 shadow-sm border border-gray-200">
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
