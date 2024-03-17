import { useContext, useState } from "react";
import { ServiceTitle } from "../components/ServiceTitle";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import { userContext } from "../contexts/MainContext";

// eslint-disable-next-line react/prop-types
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export const CarWash = () => {
  const [open, setOpen] = useState(0);
  const { setCarWash } = useContext(userContext);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleCarWash = () => setCarWash((cur) => !cur);
  return (
    <>
      <ServiceTitle />
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
        <div>
          <h2>FAQ</h2>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              Is there any minimum payable amount?
            </AccordionHeader>
            <AccordionBody>
              Yes, The home service charge of BDT 300 is applicable if the
              customer decides not to take the service after the service
              provider visited the location. However, if the customer agrees to
              avail this service on scheduled time then the home service charge
              is not applicable
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              What materials do I need to procure for doorstep car cleaning?
            </AccordionHeader>
            <AccordionBody>
              The auto cleaning service mechanics will be equipped with all
              product materials required for auto cleaning. You just have to
              ensure that the electricity and water supply for the car wash
              service.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              How long does a car interior deep cleaning typically take?
            </AccordionHeader>
            <AccordionBody>
              The duration of the cleaning can vary depending on the size and
              condition of the vehicle. It usually takes a few hours to
              complete.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              How often should I have my car interior deep cleaned?
            </AccordionHeader>
            <AccordionBody>
              The frequency of deep cleaning depends on your usage and
              maintenance. For regular maintenance, every 3-6 months is
              recommended.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
};
