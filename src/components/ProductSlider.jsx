import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export function ProductSlider({ gallery }) {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  if (!gallery || gallery?.length === 0) {
    return null; 
  }

  if (gallery?.length === 1) {
    // If only one image, display it without slider
    return (
      <div className="relative">
        <img
          src={`https://res.cloudinary.com/dneodtbad/image/upload/${gallery[0]}`}
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[500px]"
          alt="gallery-image"
        />
      </div>
    );
  }


  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {gallery?.map((item, index) => (
          <div key={index}>
            {/* <img
              src={`https://res.cloudinary.com/dneodtbad/image/upload/${item}`}
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[500px]"
              alt="gallery-image"
            /> */}
            <img src={item} alt={`Car ${index}`} />
          </div>
        ))}
      </Slider>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToPrev}
      >
        <FaChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        <FaChevronRight className="h-6 w-6" />
      </button>
      <div className="grid grid-cols-5 gap-4">
        {gallery?.map((item, index) => (
          <div key={index}>
            {/* <img
              onClick={() => sliderRef.current.slickGoTo(index)}
              src={`https://res.cloudinary.com/dneodtbad/image/upload/${item}`}
              className="h-24 w-24 cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            /> */}
            <img src={item} alt={`Car ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
