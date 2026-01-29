import { useState } from "react";
import { X } from 'lucide-react';
import DropdownGroup from "./components/DropdownGroup";
import HamburgerMenu from "./assets/harmburger-menu.png";

const MobileNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <div className="lg:hidden md:hidden flex flex-col justify-end">
        <button className="cursor-pointer text-white" onClick={toggleNavbar}>
          <img src={HamburgerMenu} alt="Menu" />
        </button>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-20 w-full h-full overflow-y-auto p-6 sm:p-8 md:p-12 flex flex-col bg-black lg:hidden">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 cursor-pointer bg-red-600 rounded p-1 text-white"
            onClick={toggleNavbar}
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>

          {/* Dropdowns */}
          <div className="flex flex-col space-y-4 text-xs text-white mt-8 w-full max-w-sm mx-auto">
            <DropdownGroup />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 mt-8 w-full max-w-sm mx-auto">
            <a
              href="#"
              className="bg-[#FFE492] text-[#114174] font-semibold text-xs flex items-center justify-center px-5 py-2 rounded hover:bg-yellow-500"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-[#4F9CF9] text-xs text-white font-semibold flex items-center justify-center px-4 py-3 rounded hover:bg-blue-700"
            >
              Try Whitepace free &#x2192;
            </a>
          </div>
        </div>
      )}

    </>
  );
};

export default MobileNavbar;