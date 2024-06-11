import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Admin/Sidebar";
import { Card } from "@material-tailwind/react";
const DashboardLayout = () => {
  return (
    <div className="font-cabin font-normal">
      <Header />
      <div className=" container mx-auto mt-5 gap-6 lg:flex">
        <div className="lg:w-2/12">
          <Sidebar />
        </div>
        <div className="lg:w-10/12">
          <Card className="p-4  shadow-md">
            <Outlet />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
