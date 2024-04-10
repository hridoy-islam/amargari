import { Author } from "../components/Author";
import { Help } from "../components/Help";
import { ProductSlider } from "../components/ProductSlider";

export const Single = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-8/12 p-4">
          <h1 className="text-primary text-4xl font-bold my-2">
            Toyota Axio 2012 Red
          </h1>
          <ProductSlider />
        </div>
        <div className="w-4/12 p-4">
          <Help />
          <Author />
        </div>
      </div>
    </div>
  );
};
