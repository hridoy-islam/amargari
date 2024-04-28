import { useEffect, useState } from "react";
import { CarGridView } from "../components/CarGridView";
import { ServiceTitle } from "../components/ServiceTitle";
import axiosInstance from "../axios";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import Pagination from "../components/Pagination";
import divisions from "../assets/divisions.json";
import districtsData from "../assets/districts.json";
import upazilasData from "../assets/upazilas.json";

export const Search = () => {
  const animatedComponents = makeAnimated();
  const [listing, setListing] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  //search filter
  const [selectedCarBrand, setSelectedCarBrand] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [selectedTransmition, setSelectedTransmition] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectDistrict, setSelectedDistrict] = useState(null);
  const [selectUpazila, setSelectedUpazila] = useState(null);
  const [selectedFuelType, setSelectedFuelType] = useState(null);

  const fetchData = async (page, entriesPerPage, searchTerm = "") => {
    try {
      let url = `/cars?page=${page}&limit=${entriesPerPage}`;

      if (selectedCarBrand) {
        url += `&brand=${selectedCarBrand}`;
      }
      if (selectedCondition) {
        url += `&condition=${selectedCondition}`;
      }
      if (selectedTransmition) {
        url += `&transmition=${selectedTransmition}`;
      }
      if (selectedDivision) {
        url += `&division=${selectedDivision}`;
      }
      if (selectDistrict) {
        url += `&district=${selectDistrict}`;
      }
      if (selectUpazila) {
        url += `&upazila=${selectUpazila}`;
      }
      if (selectedFuelType) {
        url += `&fuelType=${selectedFuelType}`;
      }
      const response = await axiosInstance.get(url);
      setListing(response.data.data.result);
      setTotalPages(response.data.data.meta.totalPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData(currentPage, entriesPerPage);
  }, [
    currentPage,
    entriesPerPage,
    selectedCarBrand,
    selectedCondition,
    selectedTransmition,
    selectedDivision,
    selectDistrict,
    selectUpazila,
    selectedFuelType,
  ]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const condition = [
    { value: "used", label: "Used" },
    { value: "recondition", label: "Recondition" },
  ];
  const transmition = [
    { value: "automatic", label: "Automatic" },
    { value: "manual", label: "Manual" },
  ];
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
  const fuelType = [
    { value: "gas", label: "Gas" },
    { value: "octen", label: "Octen" },
    { value: "petrol", label: "Petrol" },
    { value: "dissel", label: "Dissel" },
    { value: "lpg", label: "LPG" },
  ];

  const handleDivisionChange = (selectedOption) => {
    setSelectedDivision(selectedOption.value);
    const filteredDistricts = districtsData.filter(
      (district) => district.division_id === selectedOption.id
    );
    setSelectedDistrict(filteredDistricts);
    // Reset selected district and upazila when division changes
    setSelectedUpazila([]);
  };

  const handleDistrictChange = (selectedOption) => {
    // Filter upazilas based on selected district
    const filteredUpazilas = upazilasData.filter(
      (upazila) => upazila.district_id === selectedOption.id
    );
    setSelectedUpazila(filteredUpazilas);
  };
  const handleCarBrandChange = (selectedOption) => {
    setSelectedCarBrand(selectedOption ? selectedOption.value : null);
  };
  return (
    <>
      <ServiceTitle title="Buy Your Dream Car" description="Search your car" />
      <div className="flex gap-4 container mx-auto py-10">
        <div className="w-3/12 border border-gray-200 p-4 rounded-lg shadow-lg space-y-3">
          <h2>Filters</h2>
          <h4>Brands</h4>

          <ReactSelect
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
            onChange={(selectedOption) => {
              handleCarBrandChange(selectedOption);
            }}
          />
          <h4>Condition</h4>

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
            onChange={(selectedOption) => {
              setSelectedCondition(
                selectedOption ? selectedOption.value : null
              );
            }}
          />

          <h4>Transmition</h4>

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
            onChange={(selectedOption) => {
              setSelectedTransmition(
                selectedOption ? selectedOption.value : null
              );
            }}
          />
          {/* <h4>Fuel Type</h4>

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
            onChange={(selectedOption) => setSelectedFuelType(selectedOption)}
          />
          <h4>Division</h4>

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
            placeholder="Division"
            onChange={(selectedOption) => {
              handleDivisionChange(selectedOption);
            }}
          />
          <h4>District</h4>

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
            onChange={(selectedOption) => {
              handleDistrictChange(selectedOption);
            }}
          />
          <h4>Upazila</h4>

          <ReactSelect
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
              setSelectedUpazila(selectedOption ? selectedOption.value : null);
            }}
          /> */}
        </div>

        <div className="w-9/12 border border-gray-200 p-4 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-4">
            {listing?.length === 0 && (
              <p className="text-xl">No Listings Found...</p>
            )}
            {listing?.map((item, index) => (
              <CarGridView key={index} data={item} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
