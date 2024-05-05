import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user/UserSlice";

function NavList() {
  return (
    <List  className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 items-end">
      <Link
        to="/"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-secondary font-semibold">
          Home
        </ListItem>
      </Link>

      <Link className="font-medium" to="/search">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-secondary font-semibold">
          Find Your Car
        </ListItem>
      </Link>
      <Link to="/carwash" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-secondary font-semibold">
          Home Service
        </ListItem>
      </Link>

      <Link to="/contact" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-secondary font-semibold">
          Contact
        </ListItem>
      </Link>
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
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    // Clear the persisted state from local storage
    localStorage.removeItem("persist:garirmela");
  };

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Navbar className="mx-auto px-4 shadow-sm">
      <div className="flex items-center justify-between text-blue-gray-900">
        
          <Link to="/" className="mr-4 cursor-pointer lg:ml-2">
            <img src={logo} alt="garir mela" />
          </Link>
        
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {isAuthenticated && (
            <>
              <Link to={"/dashboard"}>
                <Button className="bg-primary">Dashboard</Button>
              </Link>

              <Button
                onClick={handleLogout}
                size="sm"
                className="bg-primary flex items-center"
              >
                Log Out <RiLogoutCircleLine className="text-lg ml-1" />
              </Button>
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
          {isAuthenticated && (
            <>
              <Button size="sm" className="bg-primary" fullWidth>
                <Link to={"/dashboard"}>Dashboard</Link>
              </Button>

              <Button
                size="sm"
                className="bg-primary flex items-center justify-center"
                fullWidth
                onClick={handleLogout}
              >
                Log Out <RiLogoutCircleLine className="text-lg ml-2" />
              </Button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button variant="gradient" size="sm" fullWidth>
                <Link to={"/signup"}> Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
}
