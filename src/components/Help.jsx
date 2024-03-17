import { Card } from "@material-tailwind/react";

export const Help = () => {
  return (
    <Card className="p-4 text-center bg-red-400 text-white space-y-2">
      <h2>Need Help ?</h2>
      <p>Every day form 10.00 AM to 6.00 PM</p>
      <div className="flex gap-2 justify-around">
        <p>Call : 01818181818</p>
        <p>Email: info@amargari.com</p>
      </div>
    </Card>
  );
};
