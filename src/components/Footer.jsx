import { Typography } from "@material-tailwind/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaRegEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";
const links = [
  { name: "About Us", slug: "about" },
  { name: "Terms & Condition", slug: "terms-condition" },
  { name: "Privacy Policy", slug: "privacy-policy" },
  { name: "Contact", slug: "contact" },
];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gray-200 mt-10">
      <div className="container mx-auto flex pt-10">
        <div className="w-6/12">
          <Link to="/">
            <img src={logo} alt="garir mela" />
          </Link>
          <p>
            Welcome to Garirmela.com, where we're reinventing automotive
            experiences in Bangladesh. We're your reliable partner in navigating
            the world of cars with ease and confidence, trusted by car owners
            nationwide.
          </p>
          <ul className="flex items-center gap-4 text-2xl text-secondary mt-4">
            <li>
              <Link
                to={"https://www.facebook.com/garirmelaa"}
                className="text-secondary hover:text-primary cursor-pointer"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.instagram.com/garirmela/"}
                className="text-secondary hover:text-primary cursor-pointer"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                to={"https://api.whatsapp.com/send?phone=01707070330"}
                className="text-secondary hover:text-primary cursor-pointer"
              >
                <FaWhatsapp />
              </Link>
            </li>
            <li>
              <Link
                to={"mailto:garirmela54@gmail.com"}
                className="text-secondary hover:text-primary cursor-pointer"
              >
                <FaRegEnvelope />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.linkedin.com/in/garirmela"}
                className="text-secondary hover:text-primary cursor-pointer"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-2/12 justify-center gap-2 pb-8">
          <h4>Our Services</h4>

          <ul className="space-y-2">
            <li>
              <Link className="font-medium text-secondary hover:text-primary">
                Sell Your Car
              </Link>
            </li>
            <li>
              {" "}
              <Link className="font-medium text-secondary hover:text-primary">
                Buy A Car
              </Link>
            </li>
            <li>
              <Link className="font-medium text-secondary hover:text-primary">
                Home Service
              </Link>
            </li>
            <li>
              <Link className="font-medium text-secondary hover:text-primary">
                Rent A Car
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-2/12 justify-center gap-2 pb-8">
          <h4>Top Car Brands</h4>

          <ul className="space-y-2">
            <li>
              <Link className="font-medium text-secondary hover:text-primary">
                Toyota
              </Link>
            </li>
            <li>
              {" "}
              <Link className="font-medium text-secondary hover:text-primary">
                Honda
              </Link>
            </li>
            <li>
              <Link className="font-medium text-secondary hover:text-primary">
                Nissan
              </Link>
            </li>
            <li>
              <Link className="font-medium text-secondary hover:text-primary">
                Hyundai
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-2/12 justify-center gap-2 pb-8">
          <h4>Quick Links</h4>
          {links.map((link, index) => (
            <ul key={index} className="space-y-2">
              <li>
                <Typography
                  as="a"
                  href={link.slug}
                  color="white"
                  className="font-medium text-secondary hover:text-primary"
                >
                  {link.name}
                </Typography>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className=" py-2">
        <p className="mt-6  text-center">
          Copyright &copy; {currentYear} Garir Mela.com
        </p>
      </div>
    </footer>
  );
}
export default Footer;
