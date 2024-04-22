import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Testimonial() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur turpis sit amet ex porta, at varius velit rhoncus.",
      author: "John Doe",
      position: "CEO, Company A",
    },
    {
      id: 2,
      quote:
        "Nulla rutrum libero ut magna tincidunt, eget placerat enim venenatis. Nullam euismod justo in lectus sollicitudin consectetur.",
      author: "Jane Smith",
      position: "Marketing Director, Company B",
    },
    {
      id: 3,
      quote:
        "Integer placerat turpis eget libero rhoncus aliquam. Nullam a felis non ipsum pharetra mollis ut a est.",
      author: "David Johnson",
      position: "CTO, Company C",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="my-16">
      <h2 className="text-center my-6">Our Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4 py-8">
            <p className="text-lg font-semibold mb-4">{testimonial.quote}</p>
            <p className="text-gray-600">{testimonial.author}</p>
            <p className="text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
