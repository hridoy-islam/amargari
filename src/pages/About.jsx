import { ServiceTitle } from "../components/ServiceTitle";

export const About = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};
