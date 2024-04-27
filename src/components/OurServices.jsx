import { Link } from "react-router-dom";

export const OurServices = () => {
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-center">What We Do?</h2>
      <p className="text-center font-semibold">
        Garirmela.com is an online automotive marketplace designed to
        revolutionize the car buying, selling, and maintenance experience in
        Bangladesh.
      </p>
      <div className="grid grid-cols-4 gap-4 my-10">
        <div className="relative h-96 overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://drivco-wp.egenslab.com/wp-content/uploads/2023/10/brand-3.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
              <Link to={"/dashboard/postads"}>
                <p className="text-xl font-bold cursor-pointer">
                  Sell Your Car
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-96 overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://drivco-wp.egenslab.com/wp-content/uploads/2023/10/brand-6.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
              <p className="text-xl font-bold">Buy Dream Car</p>
            </div>
          </div>
        </div>
        <div className="relative h-96 overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://drivco-wp.egenslab.com/wp-content/uploads/2023/10/brand-8.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
              <Link to={"/carwash"}>
                <p className="text-xl font-bold cursor-pointer">Home Service</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-96 overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://drivco-wp.egenslab.com/wp-content/uploads/2023/10/brand-10.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
              <Link to={"/rentcar"}>
                <p className="text-xl font-bold">Rent A Car</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
