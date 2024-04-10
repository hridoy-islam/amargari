import { Button, Input, Textarea } from "@material-tailwind/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";

import divisions from "../assets/divisions.json";
import districtsData from "../assets/districts.json";
import upazilasData from "../assets/upazilas.json";

export const PostAds = () => {
  const [images, setImages] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Ensure only the first 4 files are added
      // const newImages = acceptedFiles.slice(0, 4 - images.length);
      // // Update state with newly added images
      // setImages((prevImages) => [...prevImages, ...newImages]);

      if (images.length + acceptedFiles.length > 4) {
        setErrorMessage("Exceeded maximum file limit (4 files)");
      } else {
        setImages((prevImages) => [...prevImages, ...acceptedFiles]);
        setErrorMessage("");
      }
    },
    [images]
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpeg", ".png", ".jpg"] },
    maxFiles: 4,
    onDrop,
    multiple: true,
  });

  const removeImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

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
  const animatedComponents = makeAnimated();

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

  const handleDistrictChange = (selectedOption) => {
    // Filter upazilas based on selected district
    const filteredUpazilas = upazilasData.filter(
      (upazila) => upazila.district_id === selectedOption.id
    );
    setUpazilas(filteredUpazilas);
  };

  return (
    <div className="space-y-3 pb-6">
      <p>Please Upload Car Pictures</p>
      <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files (max 4)</p>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
        <div className="image-grid">
          {images.map((file, index) => (
            <div key={index} className="image-item">
              <img
                src={URL.createObjectURL(file)}
                alt={`Image ${index}`}
                style={{
                  width: "100px",
                  height: "auto",
                  marginRight: "10px",
                }}
              />
              <button
                onClick={() => removeImage(index)}
                className="remove-button"
              >
                <AiOutlineCloseCircle />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Input type="text" label="Title" />
      <Input type="text" label="Brand" />
      <Input type="text" label="Model" />
      <Input type="text" label="Registration Year" />
      <Input type="text" label="Production Year" />

      <ReactSelect
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

      <ReactSelect
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
      <ReactSelect
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
      <Input label="Engine Capacity"></Input>

      <Input label="Kilometer"></Input>

      <Input label="Price"></Input>
      <Input label="Phone"></Input>
      <ReactSelect
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
        placeholder="Divison"
        onChange={handleDivisionChange}
        value={selectedDivision}
      />
      <ReactSelect
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
        onChange={handleDistrictChange}
      />
      <ReactSelect
        options={upazilas}
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
        placeholder="Upazila"
      />

      <input
        type="submit"
        value="Submit Car"
        className="bg-primary w-full text-white py-2 rounded-lg font-semibold cursor-pointer"
      />
    </div>
  );
};
