import { useState, useEffect } from "react";


import Logo from "./components/Logo";
import MobileNavbar from "./MobileNavbar";
import Anchors from "./components/Anchors";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(() => {
    const stored = localStorage.getItem("mobileDrawerOpen");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.classList.add("no-scroll");
    }
    else {
      document.body.classList.remove("no-scroll");
    }

    localStorage.setItem('mobileDrawerOpen', JSON.stringify(mobileDrawerOpen));
  }, [mobileDrawerOpen]);

  return (
    <header 
      className={`
        ${mobileDrawerOpen && "fixed left-0 right-0 top-0"}
        bg-[#043873] px-[9%] sm:px-[4%] md:px-[6%] lg:px-[10%] py-4 flex items-center justify-between
      `}>
      {/* Logo */}
      <Logo />

      <div className="flex">
        {/* Dropdowns */}
        <div className="hidden md:flex lg:flex space-x-2 md:space-x-4 lg:space-x-6 text-[70%] text-white mr-15">
          <Anchors 
            downArrow={true} 
            styles="
              flex items-center justify-between cursor-pointer hover:border-b hover:border-b-white 
              transition duration-500 gap-1
            " 
            setMobileDrawerOpen={setMobileDrawerOpen}
          />
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex lg:flex items-center space-x-4 text-[70%]">
          <a href="#" className="bg-[#FFE492] text-[#114174] px-3 py-2 md:px-6 md:py-3 font-semibold rounded hover:bg-yellow-500">
            Login
          </a>

          <a href="#" className="hidden lg:flex bg-[#4F9CF9] hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded whitespace-nowrap">
            Try Whitepace free <span className="ml-1">&#x2192;</span>
          </a>

          <a href="#" className="flex lg:hidden bg-[#4F9CF9] hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded whitespace-nowrap">
            Try <span className="ml-1">&#x2192;</span>
          </a>
        </div>
      </div>

      {/* Hamburger Menu */}
      <MobileNavbar mobileDrawerOpen={mobileDrawerOpen} setMobileDrawerOpen={setMobileDrawerOpen} />
    </header>
  );
};

export default Navbar;