import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/user/UserSlice";
import { useEffect } from "react";
import login from "../assets/login.jpeg";

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
    <div className="container mx-auto py-20 align-middle">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img src={login} alt={"login"} />
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
              <Typography color="gray" className="mt-4 text-center font-normal">
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
  );
}
