import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import signup from "../assets/signup.jpg";
import { Helmet } from "react-helmet";
export function Signup() {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        data
      );
      // Check if response indicates success
      if (response.data.token) {
        toast.success("Sign up successful!");
        navigate("/login");
      } else {
        toast.error("Sign up failed");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  return (
    <>
    <Helmet>
        <title>Signup - Garir Mela</title>
        <meta name="description" content="Garir Mela is a leading car buying and selling website in Bangladesh. Here you can find the best Recondition and used car." />
        <meta name="keywords" content="garir mela, Dhaka, Car Wash, Car, Car Home Service" />
        <meta name="author" content="GarirMela" />
        <meta property="og:title" content="Signup - Garir Mela" />
        <meta property="og:description" content="Garir Mela is a leading car buying and selling website in Bangladesh. Here you can find the best Recondition and used car." />
        <meta property="og:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta property="og:url" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:title" content="Signup - Garir Mela" />
        <meta name="twitter:description" content="Garir Mela is a leading car buying and selling website in Bangladesh. Here you can find the best Recondition and used car." />
        <meta name="twitter:image" content={'https://themeearth.com/tf/html/carwash/img/service.jpg'} /> 
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    
    <div className="container mx-auto py-20 align-middle">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img src={signup} alt={"signup"} className="hidden lg:block "/>
        </div>
        <div className="mx-auto">
          <Card color="transparent" shadow={false}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h4" color="blue-gray">
                  Sign Up
                </Typography>
                <Input
                  size="lg"
                  label="Name"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name && <span>Name is Required </span>}

                <Input
                  size="lg"
                  label="email"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && <span>Please Check Email </span>}

                <Input
                  size="lg"
                  label="Phone"
                  {...register("phone", {
                    required: true,
                    maxLength: 11,
                    minLength: 11,
                  })}
                />
                {errors.phone && <span>Please Check Phone Number</span>}

                <Input
                  type="password"
                  size="lg"
                  label="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>Password is required</span>}
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button
                type="submit"
                className="mt-6 bg-primary text-white"
                fullWidth
              >
                sign up
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-secondary">
                  Login
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
