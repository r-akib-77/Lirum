import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "The service provided by the team was phenomenal. The quality of the products exceeded our expectations and we couldn’t be more satisfied.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I was thoroughly impressed by the level of customer care and attention to detail. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    text: "Great experience from start to finish. The products are top-notch and the team was incredibly responsive and helpful.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    text: "Amazing service and even better products! I will definitely be a returning customer.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" -translate-y-10 dark:bg-gray-500/30 py-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-12 max-w-[700px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm sm:text-base lg:text-lg text-orange-500 font-medium tracking-wide uppercase mb-2"
          >
            Hear from our satisfied customers
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900  mb-4"
          >
            Customer Reviews
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs sm:text-sm lg:text-base text-gray-500 dark:text-gray-800 leading-relaxed max-w-[600px] mx-auto"
          >
            We value the feedback from our customers and are proud to share
            their experiences with you.
          </p>
        </div>

        {/* Testimonials slider */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((item) => (
              <div
                className="flex flex-col gap-8 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white dark:bg-gray-800"
                key={item.id}
              >
                <div className="flex justify-center ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-300">
                    {item.text}
                  </p>
                  <h1 className="mt-4 font-semibold text-lg text-gray-900 dark:text-white">
                    {item.name}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
