import { Card, Input, Textarea } from "@material-tailwind/react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
export const GetInTouch = () => {
  return (
    <div className="container mx-auto px-8 py-10 bg-gradient-to-r from-gray-300 to-red-200 my-10 rounded-lg">
      <h1 className="text-center">Get in touch</h1>
      <p className="text-center">
        Are you curious about our offerings or have questions? Get in touch with
        us and our responsive team will be happy to assist you.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 py-4">
        <Card className="px-4 py-10 shadow-sm bg-gray-100">
          <div className="flex gap-2 items-center">
            <IoLocationOutline className="text-2xl text-primary" />
            <p>
              48 Green Corner, Green Road, Dhanmondi, Dhaka, Bangladesh 1205{" "}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaPhoneVolume className="text-2xl text-primary" />
            <p>01707070330</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineMarkEmailUnread className="text-2xl text-primary" />
            <p>garirmela@gmail.com</p>
          </div>
        </Card>
        <Card className="px-4 py-10 space-y-5 shadow-sm bg-gray-100">
          <Input type="text" label="Your Name" />
          <Input type="text" label="Your Phone" />
          <Input type="email" label="Your Email" />
          <Textarea rows={8} label="Message" />
          <button className="bg-primary text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </Card>
      </div>
    </div>
  );
};
