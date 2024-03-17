import { Card } from "@material-tailwind/react";

export const CarGridView = () => {
  return (
    <Card className="rounded-none">
      <img
        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"
        alt=""
      />
      <div className="p-4">
        <h4>Toyota</h4>
        <h2>Corolla CROSS Hybrid Z</h2>
        <p>৳ 63,00,000</p>
        <p>Model Year: 2021</p>
      </div>
      <button className="p-2 w-full bg-primary">See Details</button>
    </Card>
  );
};
