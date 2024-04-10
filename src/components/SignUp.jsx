import { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Dialog,
} from "@material-tailwind/react";
import { userContext } from "../contexts/MainContext";

export function SignUp() {
  const { signUp, setSignUp } = useContext(userContext);
  const handleSignUp = () => setSignUp((cur) => !cur);

  return (
    <>
      <Dialog
        size="md"
        open={signUp}
        handler={handleSignUp}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>

            <Typography className="-mb-2" variant="h6">
              Your Name
            </Typography>
            <Input label="Name" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Phone
            </Typography>
            <Input label="Phone" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
