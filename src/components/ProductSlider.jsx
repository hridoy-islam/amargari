import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export function ProductSlider() {
  const data = [
    {
      imgelink: "https://images.unsplash.com/photo-1596157783429-027a9773431a",
    },
    {
      imgelink: "https://images.unsplash.com/photo-1596157785295-e10afbaac5e8",
    },
    {
      imgelink: "https://images.unsplash.com/photo-1596157783297-79ab8da02f54",
    },
    {
      imgelink: "https://images.unsplash.com/photo-1596157783315-26f9d83e08a8",
    },
    {
      imgelink: "https://images.unsplash.com/photo-1607500421646-be05ba1e0341",
    },
  ];

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

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              src={imgelink}
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[500px]"
              alt="gallery-image"
            />
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
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => sliderRef.current.slickGoTo(index)}
              src={imgelink}
              className="h-24 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
