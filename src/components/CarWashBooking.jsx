import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, TextField, Textarea } from "@material-tailwind/react";

const CarWashBooking = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
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
          <Input type="date" label="Date"></Input>
        </div>
        <div className="space-y-2">
          <Input label="Your Name"></Input>
        </div>
        <div className="space-y-2">
          <Input label="Phone Number"></Input>
        </div>
        <div className="space-y-2">
          <Input label="Car Model"></Input>
        </div>

        <div className="space-y-2">
          <Textarea label="Any Special Request?"></Textarea>
        </div>

        <button
          type="submit"
          className="btn bg-primary px-5 py-3 text-white rounded-lg "
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default CarWashBooking;
