import { CarGridView } from "./CarGridView";

export const Featured = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-primary my-2">
        Featured New Cars For Sale
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <CarGridView />
        <CarGridView />
        <CarGridView />
        <CarGridView />
      </div>
    </div>
  );
};
