import { Dialog } from "@material-tailwind/react";
import { useContext } from "react";
import { userContext } from "../contexts/MainContext";
import { LeaveYourCV } from "./LeaveYourCV";
import { AddYourJob } from "./AddYourJob";
import { AddArticle } from "./AddArticle";

export const Modal = () => {
  const {
    dialog,
    setDialog,
    setLeaveCV,
    leaveCV,
    job,
    setJob,
    article,
    setArticle,
  } = useContext(userContext);
  const handleOpen = () => {
    setDialog(!dialog);
    setJob(false);
    setLeaveCV(false);
    setArticle(false);
  };
  return (
    <Dialog
      open={dialog}
      handler={handleOpen}
      size="xxl"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="bg-white bg-opacity-95"
    >
      {leaveCV && <LeaveYourCV />}
      {job && <AddYourJob />}
      {article && <AddArticle />}
    </Dialog>
  );
};
