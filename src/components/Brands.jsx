import { Card } from "@material-tailwind/react";

const brands = [
  {
    id: "1",
    name: "Toyota",
  },
  {
    id: "2",
    name: "Honda",
  },
  {
    id: "3",
    name: "Nissan",
  },
  {
    id: "4",
    name: "Hundai",
  },
  {
    id: "5",
    name: "Mercedes Benz",
  },
  {
    id: "6",
    name: "Kia",
  },
  {
    id: "7",
    name: "Haval",
  },
  {
    id: "8",
    name: "Mitsubishi",
  },
];

export const Brands = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-2xl font-bold my-6">Popular Brands</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-10">
        {brands.map((item, index) => (
          <Card
            key={index}
            className="text-center p-4 shadow-sm border border-gray-200"
          >
            <h3>{item.name}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
};
