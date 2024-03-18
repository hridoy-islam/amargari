import { useContext } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { userContext } from "../contexts/MainContext";

export function CarWashModal() {
  const { carWash, setCarWash } = useContext(userContext);
  const handleOpen = () => setCarWash((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen}>Sign In</Button>
      <Dialog
        size="xs"
        open={carWash}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Book Your Service
            </Typography>

            <Input label="Name" size="lg" />
            <Input label="Phone" size="lg" />

            <Select label="Select Car Type">
              <Option>Sedan</Option>
              <Option>Sub-Compact SUV</Option>
              <Option>SUV/MUV</Option>
              <Option>Noah/Hiace</Option>
            </Select>

            <Input label="Address" size="lg" />
            <Input type="date" label="Date" size="lg" />
            <Input type="time" min="09:00" max="18:00" label="Time" size="lg" />
            <Button>Confirm</Button>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
