/* eslint-disable react/prop-types */
import bread from "../assets/breadcumb.jpeg";
export const ServiceTitle = (props) => {
  const { title, description } = props;
  return (
    <div
      className="relative bg-cover bg-center py-32"
      style={{
        backgroundImage: `url(${bread})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto relative z-10 text-white">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-2xl font-bold">{description}</p>
      </div>
    </div>
  );
};
