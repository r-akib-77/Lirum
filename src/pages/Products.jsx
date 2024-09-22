import { FaStar } from "react-icons/fa";
import card3 from "../assets/cardImage/3.jpg";
import card4 from "../assets/cardImage/4.jpg";
import card5 from "../assets/cardImage/5.jpg";
import card1 from "../assets/cardImage/card1.jpg";
import card2 from "../assets/cardImage/card2.jpg";

import { FaStarHalfAlt } from "react-icons/fa";
const ProductsData = [
  {
    id: 1,
    img: card1,
    title: "Women Ethnic",
    rating: "5.0",
    color: "red",
    aosDelay: "0",
  },
  {
    id: 2,
    img: card2,
    title: "Women western",
    rating: 4.5,
    color: "yellow",
    aosDelay: "200",
  },
  {
    id: 3,
    img: card3,
    title: "Men's Formal",
    rating: 4.7,
    color: "grayish",
    aosDelay: "400",
  },
  {
    id: 4,
    img: card4,
    title: "pakistan's wear",
    rating: 4.4,
    color: "seablue",
    aosDelay: "600",
  },
  {
    id: 5,
    img: card5,
    title: "Women Mordens",
    rating: 4.5,
    color: "grayish",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className="dark">
      <div className=" pt-5">
        {/* header Section  */}
        <div className=" capitalize text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-lg sm:text-2xl sm:tracking-widest  tracking-wider font-semibold text-primary"
          >
            top selling products for you
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-5xl sm:my-7 sm:tracking-widest  my-2 font-bold tracking-wider"
          >
            {" "}
            Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-400 text-sm sm:tracking-[.5rem]  tracking-widest sm:text-xl"
          >
            grab it right now{" "}
          </p>
        </div>
        {/* body section  */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {/* card section   */}
            {ProductsData.map((item) => (
              <div
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                className="mx-auto space-y-3 cursor-pointer "
                key={item.id}
              >
                <img
                  className="h-[220px]  rounded-lg w-[150px] object-cover"
                  src={item.img}
                  alt=""
                />
                <div className="capitalize ">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500 font-bold"> {item.color}</p>
                  <div className="flex gap-2 items-center">
                    <span className="text-secondery">
                      {item.rating > 4.5 ? <FaStar /> : <FaStarHalfAlt />}
                    </span>
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-6 flex justify-center ">
          <button
            data-aos="fade-up"
            className="text-white font-semibold hover:scale-[1.1] transition-all duration-300 active:scale-[.85] bg-gradient-to-tl from-primary to-secondery  px-5 py-2 rounded-lg  "
            onClick={() => {
              alert("coming soon");
            }}
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
