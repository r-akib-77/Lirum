import { FaHeart, FaStar, FaTag, FaTruck } from "react-icons/fa";
import banner from "../assets/cardImage/card1.jpg";

const Banner = () => {
  return (
    <div className="  relative ">
      <div className=" dark:bg-gray-500/30 min-h-[550px] flex items-center justify-center py-12 sm:py-8 bg-white">
        {/* Layered background removed for simplicity */}
        <div className="  container z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="transform transition duration-500 hover:scale-105">
              <img
                data-aos="zoom-in"
                src={banner}
                alt="Winter Sale Banner"
                className="max-w-[350px] mx-auto 
                drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                w-full h-[300px] object-cover object-top rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105"
              />
            </div>

            {/* Text Section */}
            <div
              data-aos="fade-left"
              className="text-gray-800 text-center sm:text-left space-y-4 sm:space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Winter Sale <span className="text-primary">Up to 50%</span> Off
              </h1>
              <p className="text-base sm:text-lg tracking-wide">
                Discover exclusive deals on your winter essentials, valid until
                the end of the season.
              </p>

              {/* Review Section */}
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <FaStar className="text-yellow-500 text-xl sm:text-2xl" />
                <FaStar className="text-yellow-500 text-xl sm:text-2xl" />
                <FaStar className="text-yellow-500 text-xl sm:text-2xl" />
                <FaStar className="text-yellow-500 text-xl sm:text-2xl" />
                <FaStar className="text-gray-400 text-xl sm:text-2xl" />
                <span className="text-gray-600 text-sm sm:text-base">
                  (245 reviews)
                </span>
              </div>

              {/* Offer Icons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-4 space-y-4 sm:space-y-0 mt-4 sm:mt-6">
                <div className="flex items-center space-x-2">
                  <FaTruck className="text-green-500 text-lg sm:text-xl" />
                  <span className="text-gray-700">Free Delivery</span>
                </div>
                <div className="flex  items-center space-x-2">
                  <FaTag className="text-blue-500 text-lg sm:text-xl" />
                  <span className="text-gray-700">Special Offers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaHeart className="text-red-500 text-lg sm:text-xl" />
                  <span className="text-gray-700">Add to Wishlist</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-8">
                <button className="px-6 py-3 active:scale-90  bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
