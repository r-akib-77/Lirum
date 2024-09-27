import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Products from "./pages/Products";
import Subscribe from "./pages/Subscribe";
import Testimonials from "./pages/Testimonials";
import TopProducts from "./pages/TopProducts";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-sine",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="max-w-screen">
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
