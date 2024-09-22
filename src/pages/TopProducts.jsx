import { FaStar } from "react-icons/fa";
import img1 from "../assets/shirtImg/shirt.png";
import img2 from "../assets/shirtImg/shirt2.png";
import img3 from "../assets/shirtImg/shirt3.png";
const TopProducts = () => {
  const ProductsData = [
    {
      id: 1,
      img: img1,
      title: "Casual Wear",
      description:
        "Discover comfort and style with our versatile casual wear collection. Perfect for any occasion, these garments are crafted for all-day comfort and effortless elegance.",
    },
    {
      id: 2,
      img: img2,
      title: "Printed Shirt",
      description:
        "Make a statement with our printed shirt collection. Featuring vibrant patterns and premium fabrics, these shirts blend contemporary fashion with timeless appeal.",
    },
    {
      id: 3,
      img: img3,
      title: "Women's Shirt",
      description:
        "Elevate your wardrobe with our women's shirt collection. From classic designs to modern cuts, each piece is tailored to enhance your style and comfort.",
    },
  ];

  return (
    <div className="dark:bg-gray-500/30">
      <div className="container">
        {/* header section */}
        <div className=" capitalize text-left mb-24">
          <p
            data-aos="fade-up"
            className="text-lg sm:text-2xl sm:tracking-widest  tracking-wider font-semibold text-primary"
          >
            top rated products for you
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-5xl sm:my-7 sm:tracking-widest  my-2 font-bold tracking-wider"
          >
            {" "}
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-400 text-sm sm:tracking-[.5rem]  tracking-widest sm:text-xl"
          >
            all products available{" "}
          </p>
        </div>
        {/* body section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  place-items-center md:gap-5 gap-20">
          {ProductsData.map((item) => (
            <div
              data-aos="zoom-in"
              key={item.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] "
            >
              {/* image contaner  */}
              <div className="h-[100px] my-5">
                <img
                  className="
                  transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-xl
                  rounded-2xl max-w-[150px] block mx-auto "
                  src={item.img}
                  alt={item.title}
                />
              </div>
              {/* details section  */}

              <div className="py-4 text-center">
                {/* star rating  */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p
                  className="text-gray-400 group-hover:text-white
                duration-300 line-clamp-3 text-xs"
                >
                  {item.description}
                </p>

                <button className="bg-primary hover:scale-110 ease-in-out duration-300 text-white px-4 mt-4 py-1 rounded-full group-hover:bg-white group-hover:text-primary font-medium">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
