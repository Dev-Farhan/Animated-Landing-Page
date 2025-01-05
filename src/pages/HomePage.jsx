import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const HomePage = () => {
  const icons = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 2, icon: <FaTwitter /> },
    { id: 3, icon: <FaYoutube /> },
  ];
  const watches = [
    {
      image: "/watch1.png",
      bgColor: "bg-gradient-one",
    },
    {
      image: "/watch2.png",
      bgColor: "bg-gradient-two",
    },
    {
      image: "/watch3.png",
      bgColor: "bg-gradient-three",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? watches.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === watches.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation Variants
  const leftSectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 50,
    damping: 20,
  };

  return (
    <div
      className={`min-h-screen ${watches[currentIndex].bgColor} transition-all duration-500`}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-3 py-5 text-2xl font-semibold md:px-32">
        <span className="font-bold cursor-pointer">Logo</span>
        <span onClick={toggleMenu} className="md:hidden">
          <MdMenu />
        </span>
        <div className="hidden font-medium md:flex md:items-center md:gap-16 space-x-4 text-lg">
          <Link to="/" className="hover:text-white">
            Shop
          </Link>
          <Link to="/brands" className="hover:text-white">
            Brands
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact us
          </Link>
          <button className="bg-black text-white px-6 py-2 rounded-3xl text-base">
            Sign up
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center z-50`}
        >
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </button>
          <div className="flex flex-col items-center gap-8 text-xl">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link to="/brands" onClick={() => setIsOpen(false)}>
              Brands
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center py-10 md:py-32 px-4 md:px-0 space-y-8 md:space-y-0 text-center md:text-left"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Section */}
        <motion.div
          className="flex flex-col gap-5 text-center md:text-left text-white md:space-y-4 md:mr-16"
          variants={leftSectionVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        >
          <div className="text-4xl md:text-5xl font-bold">
            Exquisite Watches <br />
            <span className="text-2xl md:text-3xl">
              Choose Luxury, <span className="text-black">Choose Us</span>
            </span>
          </div>
          <p className="text-sm md:text-md text-[#1C1415] max-w-full md:max-w-sm">
            Discover the Perfect Watch for Every Occasion and Elevate Your Style
            with Timeless Elegance and Precision Craftsmanship.
          </p>
          <p className="text-3xl md:text-5xl font-bold">$430.00</p>
          <div className="flex justify-center md:justify-start space-x-4">
            {icons.map((item) => (
              <span
                key={item.id}
                className="text-xl md:text-2xl border border-white p-2 rounded-full hover:text-blue-600 cursor-pointer"
              >
                {item.icon}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex items-center justify-center space-x-4"
          variants={rightSectionVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
          key={currentIndex} // Re-trigger animation on index change
        >
          <GoChevronLeft
            onClick={handlePrev}
            className="text-3xl md:text-4xl text-white border border-white p-1 rounded-full hover:text-gray-600 hover:border-gray-600 cursor-pointer"
          />
          <motion.img
            src={watches[currentIndex].image}
            alt="Watch"
            className="w-40 h-60 md:w-64 md:h-96 object-cover"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={transition}
          />
          <GoChevronRight
            onClick={handleNext}
            className="text-3xl md:text-4xl text-white border border-white p-1 rounded-full hover:text-gray-600 hover:border-gray-600 cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
