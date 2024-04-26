import { Input } from "@material-tailwind/react";
import { useState } from "react";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../axios";
import divisions from "../assets/divisions.json";
import districtsData from "../assets/districts.json";
import upazilasData from "../assets/upazilas.json";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PostAds = () => {
  const navigate = useNavigate();
  const [publicIds, setPublicIds] = useState([]);

  // Replace with your own cloud name and upload preset
  const cloudName = "dneodtbad";
  const uploadPreset = "postcar";

  const uwConfig = {
    cloudName,
    uploadPreset,
    // You can add more configuration options here
  };

  const handlePublicIdUpdate = (newPublicId) => {
    setPublicIds((prevIds) => [...prevIds, newPublicId]);
  };

  const cld = new Cloudinary({
    cloud: { cloudName },
  });

  const condition = [
    { value: "used", label: "Used" },
    { value: "recondition", label: "Recondition" },
  ];
  const transmition = [
    { value: "automatic", label: "Automatic" },
    { value: "manual", label: "Manual" },
  ];
  const fuelType = [
    { value: "gas", label: "Gas" },
    { value: "octen", label: "Octen" },
    { value: "petrol", label: "Petrol" },
    { value: "dissel", label: "Dissel" },
    { value: "lpg", label: "LPG" },
  ];
  const { user } = useSelector((state) => state.user);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const handleDivisionChange = (selectedOption) => {
    setSelectedDivision(selectedOption);
    const filteredDistricts = districtsData.filter(
      (district) => district.division_id === selectedOption.id
    );
    setDistricts(filteredDistricts);
    // Reset selected district and upazila when division changes
    setUpazilas([]);
  };
  const animatedComponents = makeAnimated();

  const handleDistrictChange = (selectedOption) => {
    // Filter upazilas based on selected district
    const filteredUpazilas = upazilasData.filter(
      (upazila) => upazila.district_id === selectedOption.id
    );
    setUpazilas(filteredUpazilas);
  };

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm(); // Initialize the form

  const onSubmit = async (data) => {
    try {
      const division = data.division.value;
      const district = data.district.value;
      const upazila = data.upazila.value;
      const brand = data.brand.value;
      const condition = data.condition.value;
      const transmition = data.transmition.value;
      const userid = user?._id;
      const gallery = publicIds;

      const formData = {
        ...data,
        division,
        district,
        upazila,
        brand,
        condition,
        transmition,
        userid,
        gallery,
      };

      const response = await axiosInstance.post("/cars", formData);

      if (response.data.success) {
        toast.success("Car Posted successfully");
        reset();
        navigate("/dashboard/listings");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const car_brands = [
    { value: "Toyota", label: "Toyota" },
    { value: "Honda", label: "Honda" },
    { value: "Nissan", label: "Nissan" },
    { value: "Suzuki", label: "Suzuki" },
    { value: "Mitsubishi", label: "Mitsubishi" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Kia", label: "Kia" },
    { value: "Ford", label: "Ford" },
    { value: "Chevrolet", label: "Chevrolet" },
    { value: "Volkswagen", label: "Volkswagen" },
    { value: "Mercedes-Benz", label: "Mercedes-Benz" },
    { value: "BMW", label: "BMW" },
    { value: "Audi", label: "Audi" },
    { value: "Mazda", label: "Mazda" },
    { value: "Lexus", label: "Lexus" },
    { value: "Isuzu", label: "Isuzu" },
    { value: "Proton", label: "Proton" },
    { value: "Tata", label: "Tata" },
    { value: "Mahindra", label: "Mahindra" },
    { value: "Renault", label: "Renault" },
  ];

  return (
    <div className="space-y-3 pb-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="container">
          <CloudinaryUploadWidget
            uwConfig={uwConfig}
            setPublicId={handlePublicIdUpdate}
          />
          <div className="image-grid">
            {publicIds.map((publicId, index) => (
              <div key={index} className="image-item">
                <AdvancedImage
                  style={{
                    maxWidth: "100%",
                    float: "left",
                    margin: "0 5px",
                  }}
                  cldImg={cld.image(publicId)}
                  plugins={[responsive(), placeholder()]}
                />
              </div>
            ))}
          </div>
        </div>
        <Input
          type="text"
          label="Title"
          {...register("title", { required: true })}
        />
        <Controller
          name="brand"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={car_brands}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "grey",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary: "black",
                },
                fontSize: "14px",
              })}
              placeholder="Car Brand"
            />
          )}
        />
        {errors.brand && <span>This field is required</span>}
        <Input
          type="text"
          label="Model"
          {...register("model", { required: true })}
        />
        {errors.model && <span>This field is required</span>}
        <Input
          type="text"
          label="Color"
          {...register("color", { required: true })}
        />
        {errors.color && <span>This field is required</span>}
        <Input
          type="text"
          label="Registration Year"
          {...register("registration_year", { required: true })}
        />
        {errors.registration_year && <span>This field is required</span>}
        <Input
          type="text"
          label="Production Year"
          {...register("production_year", { required: true })}
        />
        {errors.production_year && <span>This field is required</span>}
        <Controller
          name="condition"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={condition}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "grey",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary: "black",
                },
                fontSize: "14px",
              })}
              placeholder="Car Condition"
            />
          )}
        />
        <Controller
          name="transmition"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={transmition}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "grey",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary: "black",
                },
                fontSize: "14px",
              })}
              placeholder="Transmition Type"
            />
          )}
        />
        <Controller
          name="fuelType"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactSelect
              {...field}
              isMulti
              options={fuelType}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "grey",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary: "black",
                },
              })}
              components={animatedComponents}
              placeholder="Fuel Type"
            />
          )}
        />
        <Input label="Engine Capacity" {...register("engine_capacity")}></Input>
        {errors.engine_capacity && <span>This field is required</span>}
        <Input label="Kilometer" {...register("kilometer")}></Input>
        {errors.kilometer && <span>This field is required</span>}
        <Input label="Price" {...register("price")}></Input>
        {errors.price && <span>This field is required</span>}
        <Input label="Phone" {...register("phone")}></Input>
        {errors.phone && <span>This field is required</span>}

        <Controller
          name="division"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={divisions}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "grey",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary: "black",
                },
              })}
              placeholder="Division"
              onChange={(selectedOption) => {
                field.onChange(selectedOption);
                handleDivisionChange(selectedOption);
              }}
              value={field.value}
            />
          )}
        />
        <Controller
          name="district"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={districts}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "grey",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary: "black",
                },
              })}
              placeholder="District"
              onChange={(selectedOption) => {
                field.onChange(selectedOption);
                handleDistrictChange(selectedOption);
              }}
              value={field.value}
            />
          )}
        />
        <Controller
          name="upazila"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={upazilas}
              placeholder="Upazila"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "grey",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary: "black",
                },
              })}
              onChange={(selectedOption) => {
                field.onChange(selectedOption);
              }}
              value={field.value}
            />
          )}
        />
        <Controller
          name="details"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactQuill
              theme="snow"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <input
          type="submit"
          value="Submit Car"
          className="bg-primary w-full text-white py-2 rounded-lg font-semibold cursor-pointer"
        />
      </form>
    </div>
  );
};
