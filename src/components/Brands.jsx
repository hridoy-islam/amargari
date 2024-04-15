import { Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const brands = [
  {
    id: "1",
    name: "Toyota",
    slug: "toyota",
  },
  {
    id: "2",
    name: "Honda",
    slug: "honda",
  },
  {
    id: "3",
    name: "Nissan",
    slug: "nissan",
  },
  {
    id: "4",
    name: "Hundai",
    slug: "hundai",
  },
  {
    id: "5",
    name: "Mercedes Benz",
    slug: "mercedesbenz",
  },
  {
    id: "6",
    name: "Kia",
    slug: "kia",
  },
  {
    id: "7",
    name: "Haval",
    slug: "haval",
  },
  {
    id: "8",
    name: "Mitsubishi",
    slug: "mitsubishi",
  },
];

export const Brands = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-2xl font-bold my-6">Popular Brands</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-10">
        {brands.map((item, index) => (
          <Link to={`/brand/${item.slug}`} key={index}>
            <Card className="text-center p-4 shadow-sm border border-gray-200">
              <h3>{item.name}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
