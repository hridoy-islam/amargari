/* eslint-disable react/prop-types */
export const ServiceTitle = (props) => {
  const { title, description } = props;
  return (
    <div className="py-10 bg-gray-700">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
