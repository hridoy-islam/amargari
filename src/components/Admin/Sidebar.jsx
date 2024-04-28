import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/user/UserSlice";
import { IoCarOutline } from "react-icons/io5";
export function Sidebar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    // Clear the persisted state from local storage
    localStorage.removeItem("persist:garirmela");
  };
  return (
    <Card className=" w-full max-w-[20rem] shadow-md">
      <List>
        <Link to="/dashboard">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link to="/dashboard/postads">
          <ListItem>
            <ListItemPrefix>
              <IoCarOutline className="h-5 w-5" />
            </ListItemPrefix>
            Post Your Car
          </ListItem>
        </Link>

        <Link to="/dashboard/listings">
          <ListItem>
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </ListItemPrefix>
            listings
          </ListItem>
        </Link>
        <Link to="/dashboard/service">
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Services
          </ListItem>
        </Link>
        <Link to="/dashboard/profile">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            profile
          </ListItem>
        </Link>

        <ListItem onClick={handleLogout}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
