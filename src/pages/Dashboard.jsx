import { useSelector } from "react-redux";
export const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div>
        Dashboard Page {user.name} - {user.email}
      </div>
    </>
  );
};
