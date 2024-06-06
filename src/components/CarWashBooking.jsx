import { useForm } from "react-hook-form";
import { Input, Textarea } from "@material-tailwind/react";
import axiosInstance from "../axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const CarWashBooking = () => {
  const { user } = useSelector((state) => state.user);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const user_id = user.id;
    const bookingDate = moment(data.date).format();
    const formData = { ...data, bookingDate, user_id };

    console.log(formData);
    try {
      const response = await axiosInstance.post("/booking", formData);
      if (!response.data.success) {
        toast.error("Please check your fields");
      }

      setSubmitSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 10000);
      reset();
    } catch (error) {
      toast.error("Please check your fields");
    }
  };

  return (
    <div className="container mx-auto mt-10 bg-gray-100  p-10">
      <h1 className="text-3xl text-center font-semibold mb-4">
        Book a Car Wash
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-1/2 mx-auto"
      >
        <div className="space-y-2">
          <Input
            type="date"
            label="Date"
            {...register("bookingDate", { required: true })}
          ></Input>
          {errors.bookingDate && <span>This field is required</span>}
        </div>
        <div className="space-y-2">
          <Input
            label="Your Name"
            {...register("name", { required: true })}
          ></Input>
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="space-y-2">
          <Input
            label="Phone Number"
            {...register("phone", {
              required: true,
              maxLength: 11,
              minLength: 11,
            })}
          ></Input>
          {errors.phone && <span>Please Check Phone Number</span>}
        </div>
        <div className="space-y-2">
          <Input
            label="Address"
            {...register("address", { required: true })}
          ></Input>
          {errors.address && <span>This field is required</span>}
        </div>
        <div className="space-y-2">
          <Input
            label="Car Model"
            {...register("car", { required: true })}
          ></Input>
          {errors.car && <span>This field is required</span>}
        </div>

        <div className="space-y-2">
          <Textarea
            label="Any Special Request?"
            {...register("message", { required: true })}
          ></Textarea>
          {errors.message && <p>This field is required</p>}
        </div>

        <button
          type="submit"
          className="btn bg-primary px-5 py-3 text-white rounded-lg "
        >
          Book Now
        </button>
        {submitSuccess && (
          <div style={{ color: "green" }}>
            You Booked Our Service successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default CarWashBooking;
