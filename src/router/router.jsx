import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../components/NotFound";
import Main from "../layouts/main";
import { Contact } from "../pages/Contact";
import { CarWash } from "../pages/CarWash";

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
        path: "/contact",
        element: <Contact />,
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
