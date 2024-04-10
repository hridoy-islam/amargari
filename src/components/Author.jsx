import { MdCall } from "react-icons/md";
export const Author = () => {
  return (
    <div className="p-4 bg-secondary text-white my-4 space-y-2">
      <p className="text-lg">For sale by Syed Khaled Bin Mostafa</p>

      <p className="flex items-center text-xl">
        <MdCall />
        <p>01617XXXXXX</p>
      </p>
      <p className="text-lg">Call For Final Price</p>
    </div>
  );
};
