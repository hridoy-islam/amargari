import { ServiceTitle } from "../components/ServiceTitle";
import {
  Card
} from "@material-tailwind/react";
import { Helmet } from 'react-helmet';
import bread from "../assets/breadcumb.jpeg";

export const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - Garir Mela</title>
        <meta name="description" content="Welcome to Garirmela.com, where we're reinventing automotiveexperiences in Bangladesh." />
        <meta name="keywords" content="garir mela" />
        <meta name="author" content="GarirMela" />
        <meta property="og:title" content="About - Garir Mela" />
        <meta property="og:description" content="Welcome to Garirmela.com, where we're reinventing automotiveexperiences in Bangladesh." />
        <meta property="og:image" content={bread} />
        <meta property="og:url" content={bread} />
        <meta name="twitter:title" content="Welcome to Garirmela.com, where we're reinventing automotiveexperiences in Bangladesh." />
        <meta name="twitter:description" content="Welcome to Garirmela.com, where we're reinventing automotiveexperiences in Bangladesh." />
        <meta name="twitter:image" content={bread} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ServiceTitle
        title="About"
        description="Leading Car Marketplace in Bangladesh"
      />
      <div className="container mx-auto my-8">
        <h2>About GarirMela.com</h2>
        <p>
          Welcome to Garirmela.com, where we're reinventing automotive
          experiences in Bangladesh. We're your reliable partner in navigating
          the world of cars with ease and confidence, trusted by car owners
          nationwide.
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to revolutionize car buying, selling, and maintenance. Because
          we believe every car owner deserves transparent, trustworthy, and
          hassle-free automotive services, we've created a one-stop online
          marketplace that caters to all your vehicle needs.
        </p>
        <h2>Our Vision</h2>
        <p>
          It is our vision to make the process of buying and maintaining a car
          as seamless as the drive itself. Garirmela.com aims to be Bangladesh's
          leading provider of automotive solutions through his innovative
          technology and commitment to customer service.
        </p>
        <h2>Company Culture</h2>
        <p>
          Garirmela.com thrives on a culture of passion and purpose. All of our
          team members are automotive enthusiasts, expert technicians, and
          customer-centric professionals dedicated to delivering excellence in
          everything we do.
        </p>
        <div className="my-6">
          <h2 className="text-center">Why Us?</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4">
              <h4>Selection Car</h4>
              <p>You can choose from a wide selection of vehicles. Find the perfect car that fits your lifestyle and budget, from the newest models to pre-owned gems</p>
            </Card>
            <Card className="p-4">
              <h4>Service</h4>
              <p>Enjoy the convenience of professional car maintenance at home. With our skilled technicians, you won't have to leave your home for top-notch service.</p>
            </Card>
            <Card className="p-4">
              <h4>Satisfaction</h4>
              <p>The transactions we conduct are transparent and reliable, leaving no room for guesswork. We measure our success by your satisfaction.</p>
            </Card>
            <Card className="p-4">
              <h4>Solutions</h4>
              <p>Personalized automotive solutions tailored to your needs. Garirmela.com understands that every driver is unique, and so are their needs.</p>
            </Card>
          </div>
        </div>
 

        <h2>Drive into the Future with Garirmela.com</h2>
        <p>Are you ready to take the next step in your automotive journey? We make the road to your next car as smooth as the ride at Garirmela.com. We are reinventing the automotive experience - one car, one service, one satisfied customer at a time.</p>
      </div>
    </div>
  );
};
