import { Help } from "../components/Help";
import { ProductSlider } from "../components/ProductSlider";

export const Single = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-8/12 p-4">
          <ProductSlider />
        </div>
        <div className="w-4/12 p-4">
          <Help />
        </div>
      </div>
    </div>
  );
};
