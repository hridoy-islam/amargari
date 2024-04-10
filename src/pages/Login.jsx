import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/user/UserSlice";
import { useEffect } from "react";

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
    dispatch(loginUser(data)).then((result) => {
      if (result.payload !== undefined && result.payload !== null) {
        navigate("/dashboard");
      }
    });

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
            Login
          </Typography>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Phone
              </Typography>
              <Input
                size="lg"
                placeholder="016xxxxxxxx"
                {...register("phone", {
                  required: true,
                  maxLength: 11,
                  minLength: 11,
                })}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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

            <Button type="submit" className="mt-6" fullWidth>
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium text-gray-900">
                Signup
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
}
