import { ServiceTitle } from "../components/ServiceTitle";
import { CarWashFaq } from "../components/CarWashFaq";
import CarWashBooking from "../components/CarWashBooking";
// import { Testimonial } from "../components/Testimonial";
import { useSelector } from "react-redux";
import { LoginCTA } from "../components/LoginCTA";
import { Helmet } from "react-helmet";

export const CarWash = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <>
    <Helmet>
        <title>Car Home Service at Dhaka - Garir Mela</title>
        <meta name="description" content="Car Home services include interior and exterior car washing, waxing, vacuuming, and detailing." />
        <meta name="keywords" content="garir mela, Dhaka, Car Wash, Car, Car Home Service" />
        <meta name="author" content="GarirMela" />
        <meta property="og:title" content="Car Home Service at Dhaka - Garir Mela" />
        <meta property="og:description" content="Car Home services include interior and exterior car washing, waxing, vacuuming, and detailing." />
        <meta property="og:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta property="og:url" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:title" content="Car Home services include interior and exterior car washing, waxing, vacuuming, and detailing." />
        <meta name="twitter:description" content="Car Home services include interior and exterior car washing, waxing, vacuuming, and detailing." />
        <meta name="twitter:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
        <div className="py-10 grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-6">
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
        {/* <Testimonial /> */}
        {!isAuthenticated ? <LoginCTA /> : <CarWashBooking />}

        <CarWashFaq />
      </div>
    </>
  );
};
