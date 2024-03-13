import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../components/NotFound";
import Main from "../layouts/main";
import { Contact } from "../pages/Contact";
import { CarWash } from "../pages/CarWash";
import { Consultancy } from "../pages/Consultancy";
import { Search } from "../pages/Search";
import { Single } from "../pages/Single";
import { Dashboard } from "../pages/Dashboard";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { Profile } from "../pages/Profile";
import { Service } from "../pages/Service";
import { Posts } from "../pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carwash",
        element: <CarWash />,
      },
      {
        path: "/consultancy",
        element: < Consultancy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/single",
        element: <Single />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/Service",
        element: <Service />,
      },
      {
        path: "/Posts",
        element: <Posts />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <NotFound />
      </div>
    ),
  },
]);

export default router;
