import { Card } from "@material-tailwind/react";

const divisions = [
  {
    id: "1",
    name: "Barishal",
    bn_name: "বরিশাল",
    lat: "22.701002",
    long: "90.353451",
  },
  {
    id: "2",
    name: "Chattogram",
    bn_name: "চট্টগ্রাম",
    lat: "22.356851",
    long: "91.783182",
  },
  {
    id: "3",
    name: "Dhaka",
    bn_name: "ঢাকা",
    lat: "23.810332",
    long: "90.412518",
  },
  {
    id: "4",
    name: "Khulna",
    bn_name: "খুলনা",
    lat: "22.845641",
    long: "89.540328",
  },
  {
    id: "5",
    name: "Rajshahi",
    bn_name: "রাজশাহী",
    lat: "24.363589",
    long: "88.624135",
  },
  {
    id: "6",
    name: "Rangpur",
    bn_name: "রংপুর",
    lat: "25.743892",
    long: "89.275227",
  },
  {
    id: "7",
    name: "Sylhet",
    bn_name: "সিলেট",
    lat: "24.894929",
    long: "91.868706",
  },
  {
    id: "8",
    name: "Mymensingh",
    bn_name: "ময়মনসিংহ",
    lat: "24.747149",
    long: "90.420273",
  },
];

export const Location = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-2xl font-bold my-6">Search by Location</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-10">
          {divisions.map((item, index) => (
            <Card
              key={index}
              className="text-center p-4 shadow-sm border border-gray-200"
            >
              <h3>{item.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
