import { Input } from "@material-tailwind/react";
import { useSelector } from "react-redux";
export const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div>
        <h2 className="text-xl font-bold my-3">Update Your Profile</h2>
        <form action="" className="space-y-5 mt-2">
          <Input type="text" label="name" value={user.name} />
          <Input type="email" label="email" value={user.email} />
          <Input type="text" label="phone" value={user.phone} />
          <Input type="password" label="password" value={user.password} />
          <input
            type="submit"
            value="Update Profile"
            className="bg-primary w-full text-white py-2 rounded-lg font-semibold cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};
