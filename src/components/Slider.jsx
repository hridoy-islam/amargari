import { Carousel } from "@material-tailwind/react";

export function Slider() {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      className="rounded-none"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1625773049545-fb23fc4f4538"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1469285994282-454ceb49e63c"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
