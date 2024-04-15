import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 items-end">
      <Typography
        as="a"
        href="/"
        variant="h6"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-secondary font-semibold">
          Home
        </ListItem>
      </Typography>

      {/* <Typography
        as="a"
        href="/"
        variant="h6"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-secondary font-semibold">
          Brands
        </ListItem>
      </Typography> */}

      <Typography
        as="a"
        href="#"
        variant="h6"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-secondary font-semibold">
          <Link to="/carwash">Car Wash</Link>
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="h6"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-secondary font-semibold">
          <Link to="/contact">Contact</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Navbar className="mx-auto px-4 shadow-sm">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer lg:ml-2"
        >
          <Link to="/">
            <img src={logo} alt="garir mela" />
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {isAuthenticated && (
            <>
              <Link to={"/dashboard"}>
                <Button className="bg-primary">Dashboard</Button>
              </Link>
              <Link to={"/dashboard/postads"}>
                <Button className="bg-primary">Post Your Car</Button>
              </Link>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to={"/login"}>
                <Button className="bg-secondary">Log In</Button>
              </Link>
              <Link to={"/signup"}>
                <Button className="bg-primary">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            <Link to={"/login"}>Log In</Link>
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            <Link to={"/signup"}> Sign Up</Link>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
