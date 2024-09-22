import { FaAngleDown } from "react-icons/fa"; // Import FaAngleDown here
import { IoSearchOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import logo from "../assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "#/",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "New Arrivals",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md backdrop-blur-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* upper nav  */}
      <div className="bg-primary/40 py-3 sm:py-1">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="/"
              className="font-bold text-secondery dark:text-white text-2xl sm:text-3xl flex gap-2"
            >
              <img src={logo} alt="" className="w-10 " />
              Lirum
            </a>
          </div>
          {/* search bar and logo button  */}
          <div className="flex justify-between items-center gap-4">
            <div className=" relative hidden sm:block group">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] dark:text-gray-700 group-hover:w-[300px] rounded-full border border-gray-300 transition-all duration-300 px-2 py-1 focus:outline-none focus:border-1 placeholder:tracking-[.2rem] placeholder:text-center placeholder:font-thin focus:border-secondery "
              />

              <IoSearchOutline className="absolute text-gray-300 group-hover:text-primary text-2xl right-3  -translate-y-1/2 top-1/2  " />
            </div>
            {/* order button  */}
            <button
              className="bg-gradient-to-tl from-secondery to-primary text-white transition-all duration-300  px-4 py-1 rounded-full group  flex items-center gap-1"
              onClick={() => {
                alert("ordering not available yet");
              }}
            >
              <span className="group-hover:block hidden transition-all delay-100 cursor-pointer duration-500">
                order
              </span>
              <TiShoppingCart />
            </button>

            {/* darkmodeSwitch */}
            <div>
              <DarkModeSwitch />
            </div>
          </div>
        </div>
      </div>

      {/* lower nav  */}
      <div className="flex justify-center dark:bg-secondery/40">
        <ul className="sm:flex hidden gap-4  items-center ">
          {Menu.map((i) => {
            return (
              <li key={i.id}>
                <a
                  className="inline-block px-4 py-2 text-secondery font-bold hover:text-primary dark:hover:text-primary dark:text-white "
                  href={i.link}
                >
                  {i.name}
                </a>
              </li>
            );
          })}

          {/* simple dropdown menu  */}
          <li className="group relative cursor-pointer">
            <a
              className="flex items-center py-2 gap-[2px] text-secondery font-bold hover:text-primary dark:hover:text-primary dark:text-white"
              href="# "
            >
              Trending
              <span>
                <FaAngleDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute hidden group-hover:block hover:block bg-white shadow-md backdrop-blur-lg rounded-b-xl w-[150px] dark:bg-secondery/80 dark:text-white duration-200">
              <ul>
                {DropdownLinks.map((i) => {
                  return (
                    <li key={i.id}>
                      <a
                        className="inline-block dark:hover:bg-primary/80 dark:hover:text-orange-100 hover:text-white w-full px-4 py-2 text-secondery rounded-xl font-bold hover:bg-primary dark:text-white "
                        href={i.link}
                      >
                        {i.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
