import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Admin/Sidebar";
import { Card } from "@material-tailwind/react";

const DashboardLayout = () => {
  return (
    <div className="font-cabin font-normal">
      <Header />
      <div className="flex container mx-auto mt-5 gap-6">
        <Sidebar></Sidebar>
        <Card className="p-4 w-full shadow-md">
          <Outlet></Outlet>
        </Card>
      </div>
    </div>
  );
};

export default DashboardLayout;
