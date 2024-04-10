import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";
import { Toaster } from "react-hot-toast";
const Main = () => {
  return (
    <div className="font-cabin font-normal">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <SignIn />
      <SignUp />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Main;
