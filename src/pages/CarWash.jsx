import { useContext } from "react";
import { ServiceTitle } from "../components/ServiceTitle";
import { Button } from "@material-tailwind/react";
import { userContext } from "../contexts/MainContext";
import { CarWashFaq } from "../components/CarWashFaq";

export const CarWash = () => {
  const { setCarWash } = useContext(userContext);

  const handleCarWash = () => setCarWash((cur) => !cur);
  return (
    <>
      <ServiceTitle
        title="Car Interior Deep Cleaning"
        description="Best Service at an Affordable Price"
      />
      <div className="container mx-auto">
        <div className="py-10 text-center space-y-4">
          <h2>Service Details</h2>
          <p>
            Our Car Interior Deep Cleaning service is a thorough and
            professional treatment to revitalize and refresh the interior of
            your vehicle. Our skilled technicians will meticulously clean and
            disinfect all surfaces, including seats, carpets, dashboard, and
            upholstery, leaving your cars interior looking and feeling like new.
          </p>
        </div>
        <div className="py-10 grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2>Included in the Service</h2>
            <ul>
              <li>Full Car Inside Cleaning</li>
              <li>Car Dashboard, Seat, Ceiling Deep Cleaning</li>
              <li>Storage Compartment Cleaning</li>
              <li>Inside Full Car Antibacterial Deep Steam Wash</li>
            </ul>
            <Button onClick={handleCarWash}>Book Service</Button>
          </div>
          <div>
            <img
              src={"https://themeearth.com/tf/html/carwash/img/service.jpg"}
              alt=""
            />
          </div>
        </div>
        <CarWashFaq />
      </div>
    </>
  );
};
