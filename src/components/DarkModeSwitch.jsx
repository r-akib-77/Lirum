import React, { useEffect, useState } from "react";
import darkBtn from "../assets/website/dark-mode-button.png";
import lightBtn from "../assets/website/light-mode-button.png";

const DarkModeSwitch = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; /// html element
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element]);
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={lightBtn}
        alt="light mode button"
        className={`w-12 transition-all duration-300 cursor-pointer drop-shadow-lg absolute right-0 z-10 ${
          theme === "dark" ? "hidden" : "block"
        }`}
      />

      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={darkBtn}
        alt="light mode button"
        className="w-12 transition-all duration-300 cursor-pointer drop-shadow-lg"
      />
    </div>
  );
};

export default DarkModeSwitch;
