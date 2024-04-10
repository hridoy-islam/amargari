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
        "http://localhost:4000/api/auth/signup",
        data
      );
      // Check if response indicates success
      if (response.data.success) {
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
    <div className="container mx-auto">
      <div className="w-1/3 mx-auto my-4">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name && <span>Name is Required </span>}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && <span>Please Check Email </span>}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Phone
              </Typography>
              <Input
                size="lg"
                placeholder="016xxxxxxxx"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("phone", {
                  required: true,
                  maxLength: 11,
                  minLength: 11,
                })}
              />
              {errors.phone && <span>Please Check Phone Number</span>}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
            <Button type="submit" className="mt-6" fullWidth>
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-gray-900">
                Login
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
}
