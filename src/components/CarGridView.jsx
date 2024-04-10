import { Card, Chip } from "@material-tailwind/react";

export const CarGridView = () => {
  return (
    <Card className="rounded-none border border-secondary">
      <img
        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"
        alt=""
      />
      <div className="p-4">
        <Chip
          value="Toyota"
          className="rounded-full w-20 text-center bg-primary"
        />
        <h2 className="text-xl font-bold text-black">Corolla CROSS Hybrid Z</h2>
        <p className="text-black text-lg font-semibold">৳ 63,00,000</p>
        <p className="text-black">Model Year: 2021</p>
      </div>
      <button className="p-2 w-full bg-primary text-white">See Details</button>
    </Card>
  );
};
