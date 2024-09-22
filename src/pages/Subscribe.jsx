import { useState } from "react";
import Banner from "../assets/pattern/pattern.webp";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [sub, setSub] = useState("");
  return (
    <div
      data-aos="zoom-in"
      className="relative mb-20 bg-gray-100 dark:bg-gray-500/30 text-white"
      style={BannerImg}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>{" "}
      {/* Adds a dark overlay with blur */}
      <div className="relative container py-12">
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
            Get Notified About New Products
          </h1>
          <p className="text-lg sm:text-xl text-white/80 whitespace-nowrap">
            Sign up for our newsletter and stay updated on the latest releases.
          </p>

          <div className="relative" data-aos="fade-up">
            <input
              type="email"
              value={sub}
              onChange={(e) => setSub(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-4 pl-6 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
            />
            <button
              onClick={() => {
                return setSub("");
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl active:scale-90"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
