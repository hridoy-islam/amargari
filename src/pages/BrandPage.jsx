import { useParams } from "react-router-dom";
import { CarGridView } from "../components/CarGridView";
export const BrandPage = () => {
  let { name } = useParams();
  return (
    <div>
      <h2 className="text-center my-6">Latest Cars by {name.toUpperCase()}</h2>
      <div className="grid grid-cols-3 gap-3 container mx-auto">
        <CarGridView />
        <CarGridView />
        <CarGridView />
      </div>
    </div>
  );
};
