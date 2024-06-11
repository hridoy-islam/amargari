import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/user/UserSlice";
import { useEffect } from "react";
import login from "../assets/login.jpeg";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    dispatch(loginUser(data))
      .then((result) => {
        if (result.payload !== undefined && result.payload !== null) {
          navigate("/dashboard");
        } else {
          toast.error("Invalid login details");
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the login process
        console.error("Error during login:", error);
        // You can also navigate to an error page or show an error message to the user
      });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Helmet>
        <title>Login - Garir Mela</title>
        <meta
          name="description"
          content="We're your reliable partner in navigating the world of cars with ease and confidence, trusted by car owners nationwide."
        />
        <meta
          name="keywords"
          content="garir mela, Dhaka, Car Wash, Car, Car Home Service"
        />
        <meta name="author" content="GarirMela" />
        <meta property="og:title" content="Login - Garir Mela" />
        <meta
          property="og:description"
          content="We're your reliable partner in navigating the world of cars with ease and confidence, trusted by car owners nationwide."
        />
        <meta
          property="og:image"
          content={"https://themeearth.com/tf/html/carwash/img/service.jpg"}
        />
        <meta
          property="og:url"
          content={"https://themeearth.com/tf/html/carwash/img/service.jpg"}
        />
        <meta name="twitter:title" content="Login - Garir Mela." />
        <meta
          name="twitter:description"
          content="We're your reliable partner in navigating the world of cars with ease and confidence, trusted by car owners nationwide."
        />
        <meta
          name="twitter:image"
          content={"https://themeearth.com/tf/html/carwash/img/service.jpg"}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="container mx-auto py-20 align-middle">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={login} alt={"login"} className="hidden lg:block " />
          </div>
          <div className="mx-auto">
            <Card shadow={false}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-20 mb-2 w-80 max-w-screen-lg sm:w-96"
              >
                <Typography variant="h4" color="blue-gray">
                  Login
                </Typography>
                <div className="mb-1 flex flex-col gap-6">
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
                    label="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span>Password is required</span>}
                </div>

                <Button
                  type="submit"
                  className="mt-6 bg-primary text-white"
                  fullWidth
                >
                  Login
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Don't have an account?{" "}
                  <Link to="/signup" className="font-medium text-secondary">
                    Signup
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
