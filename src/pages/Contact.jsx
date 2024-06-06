import { Helmet } from "react-helmet";
import { GetInTouch } from "../components/GetInTouch";
import { ServiceTitle } from "../components/ServiceTitle";
import bread from "../assets/breadcumb.jpeg";

export const Contact = () => {
  return (
    <>
    <Helmet>
        <title>Contact Garir Mela</title>
        <meta name="description" content="Are you ready to take the next step in your automotive journey? We are reinventing the automotive experience - one car, one service, one satisfied customer at a time." />
        <meta name="keywords" content="garir mela, Dhaka, Car Wash, Car, Car Home Service" />
        <meta name="author" content="GarirMela" />
        <meta property="og:title" content="Contact Garir Mela" />
        <meta property="og:description" content="Are you ready to take the next step in your automotive journey? We are reinventing the automotive experience - one car, one service, one satisfied customer at a time." />
        <meta property="og:image" content={bread} /> 
        <meta property="og:url" content={bread} /> 
        <meta name="twitter:title" content="Are you ready to take the next step in your automotive journey? We are reinventing the automotive experience - one car, one service, one satisfied customer at a time." />
        <meta name="twitter:description" content="Are you ready to take the next step in your automotive journey? We are reinventing the automotive experience - one car, one service, one satisfied customer at a time." />
        <meta name="twitter:image" content={bread} /> 
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ServiceTitle
        title="Contact"
        description="We Would love to hear from you"
      />
      <GetInTouch />
    </>
  );
};
