import { Card } from "@material-tailwind/react";
export const OurServices = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-secondary text-2xl font-semibold text-center">
        What We Do
      </h2>
      <div className="grid grid-cols-4 gap-4 py-6">
        <Card className="p-8 text-center bg-green-300 text-black">
          <h2 className="text-2xl font-bold text-secondary">Sell Your Car</h2>
        </Card>
        <Card className="p-8 text-center bg-blue-gray-400 text-black">
          <h2 className="text-2xl font-bold text-secondary">Buy Dream Car</h2>
        </Card>
        <Card className="p-8 text-center bg-purple-200 text-black">
          <h2 className="text-2xl font-bold text-secondary">Home Service</h2>
        </Card>
        <Card className="p-8 text-center bg-red-200 text-black">
          <h2 className="text-2xl font-bold text-secondary">Rent A Car</h2>
        </Card>
      </div>
    </div>
  );
};
