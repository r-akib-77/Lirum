import Slider from "react-slick";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";

const ImageList = [
  {
    id: 1,
    imgSrc: hero1,
    title: "Get upto 70% off on your first purchase",
    desc: "Enjoy a special discount of up to 70% off on your first purchase with us. Don't miss out on this exclusive offer!",
  },
  {
    id: 2,
    imgSrc: hero2,
    title: "Flat 50% off on Women's Wear",
    desc: "Explore the latest fashion in women's wear with a flat 50% discount. Refresh your wardrobe today and save big!",
  },

  {
    id: 3,
    imgSrc: hero3,
    title: "Buy 1 Get 1 Free on all clothing",
    desc: "Shop the latest fashion trends with our Buy 1 Get 1 Free offer on all clothing items. Available for a short time only!",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]
    flex items-center justify-center duration-200 dark"
    >
      {/* background pattert  */}

      <div className=" absolute h-[500px] w-[500px]  sm:h-[700px] sm:w-[700px] bg-primary/40 -top-[20rem] -right-[10rem] rounded-full rotate-45 -z-20 dark:bg-primary/60"></div>
      {/* hero section  */}
      <div className="container pb-8 sm:pb-0  ">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center  gap-4 pt-12 sm:pt-0 text-center sm:text-left sm:order-1 order-2 relative z-10 ">
                  <h1 className="text-5xl sm:text-6xl  lg:text-7xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-sm">{item.desc}</p>
                  <div>
                    <button className="capitalize bg-gradient-to-tl from-primary to-secondery  px-3 p-2 rounded-xl font-semibold text-black ">
                      order now
                    </button>
                  </div>
                </div>
                {/* imagesection section */}
                <div className="sm:order-2 order-1 ">
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                  sm:scale-105 lg:scale-125 object-contain mx-auto "
                      src={item.imgSrc}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
