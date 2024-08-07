import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../components/NotFound";
import Main from "../layouts/main";
import { Contact } from "../pages/Contact";
import { CarWash } from "../pages/CarWash";
import { Search } from "../pages/Search";
import { Single } from "../pages/Single";
import { Dashboard } from "../pages/Dashboard";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { Profile } from "../pages/Profile";
import { Service } from "../pages/Service";
import DashboardLayout from "../layouts/DashboardLayout";
import { PostAds } from "../pages/PostAds";
import { Login } from "../pages/Login";
import { Listings } from "../pages/Listings";
import { BrandPage } from "../pages/BrandPage";
import { Privacy } from "../pages/Privacy";
import { Terms } from "../pages/Terms";
import DashboardGuard from "../components/Admin/DashboardGuard";
import { About } from "../pages/About";
import { RentCar } from "../pages/RentCar";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/carwash",
        element: <CarWash />,
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
        path: "/car/:id",
        element: <Single />,
      },
      {
        path: "/brand/:name",
        element: <BrandPage />,
      },
      
      {
        path: "/terms-condition",
        element: <Terms />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "/rentcar",
        element: <RentCar />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardGuard />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/service",
        element: <Service />,
      },
      {
        path: "/dashboard/listings",
        element: <Listings />,
      },
      {
        path: "/dashboard/postads",
        element: <PostAds />,
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
