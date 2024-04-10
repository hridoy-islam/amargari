import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

const DashboardGuard = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  if (isAuthenticated) {
    // If user is authenticated, render the DashboardLayout
    return <DashboardLayout />;
  } else {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }
};

export default DashboardGuard;
