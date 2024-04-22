import { ServiceTitle } from "../components/ServiceTitle";
import { CarWashFaq } from "../components/CarWashFaq";
import CarWashBooking from "../components/CarWashBooking";
import { Testimonial } from "../components/Testimonial";

export const CarWash = () => {
  return (
    <>
      <ServiceTitle
        title="Car Interior Deep Cleaning"
        description="Best Service at an Affordable Price"
      />
      <div className="container mx-auto">
        <div className="py-10  space-y-4">
          <h2>Service Details</h2>
          <p>
            We bring convenience with eco-friendliness to car detailing services
            in Dhaka, Bangladesh—tailored just for discerning car owners. No
            matter if you're an eco-conscious driver or a car enthusiast
            striving to maintain your car in pristine condition, we share your
            values and understand your needs.
          </p>
        </div>
        <div className="py-10 grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2>Included in the Service</h2>
            <p>
              Our services include interior and exterior car washing, waxing,
              vacuuming, and detailing. Our proprietary car wash system ensures
              that your car is washed to the highest standards using the latest
              technology. Our services cover all types of vehicles, including
              passenger cars, SUVs, and trucks. In addition to full interior and
              exterior detailing, ceramic coating, and scratch and dent repair
              are some of the services we offer. Our car wash and detailing
              services are competitively priced and guaranteed to meet your
              expectations. Contact us today to get started.{" "}
            </p>
          </div>
          <div>
            <img
              src={"https://themeearth.com/tf/html/carwash/img/service.jpg"}
              alt=""
            />
          </div>
        </div>
        <Testimonial />
        <CarWashBooking />
        <CarWashFaq />
      </div>
    </>
  );
};
