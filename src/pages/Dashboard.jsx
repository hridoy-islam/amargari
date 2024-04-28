import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div>
        Welcome {user.name}
        <div>
          <h2>You can list your car for sale</h2>
          <Button size="sm" className="bg-primary">
            <Link to={"/dashboard/postads"}> Post Your Car</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
