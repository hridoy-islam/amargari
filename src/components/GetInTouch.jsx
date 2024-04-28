import { Card, Input, Textarea } from "@material-tailwind/react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useForm } from "react-hook-form";
import axiosInstance from "../axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaRegEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";
export const GetInTouch = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await axiosInstance.post("/contact", data);
    if (!response.data.success) {
      toast.error("Please check your fields");
    }

    setSubmitSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
    reset();
  };
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
          <ul className="flex items-center gap-4 text-2xl  mt-4">
            <li>
              <Link
                to={"https://www.facebook.com/garirmelaa"}
                className="text-primary"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.instagram.com/garirmela/"}
                className="text-primary"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                to={"https://api.whatsapp.com/send?phone=01707070330"}
                className="text-primary"
              >
                <FaWhatsapp />
              </Link>
            </li>
            <li>
              <Link
                to={"mailto:garirmela54@gmail.com"}
                className="text-primary"
              >
                <FaRegEnvelope />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.linkedin.com/in/garirmela"}
                className="text-primary"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </Card>
        <Card className="px-4 py-10 shadow-sm bg-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              type="text"
              label="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>Please Check Name</span>}
            <Input
              type="text"
              label="Your Phone"
              {...register("phone", {
                required: true,
                maxLength: 11,
                minLength: 11,
              })}
            />
            {errors.phone && <span>Please Check Phone Number</span>}
            <Input
              type="email"
              label="Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Please Use Valid Email</span>}
            <Textarea
              rows={8}
              label="Message"
              {...register("message", { required: true })}
            />
            {errors.message && <p>This field is required</p>}
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
            {submitSuccess && (
              <div style={{ color: "green" }}>Form submitted successfully!</div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
};
