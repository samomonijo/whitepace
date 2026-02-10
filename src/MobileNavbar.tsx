import { X } from 'lucide-react';
import HamburgerMenu from "./assets/harmburger-menu.png";

type MobileNavbarProps = {
  mobileDrawerOpen: boolean, 
  setMobileDrawerOpen: (mobileDrawerOpen: boolean) => void
}

const MobileNavbar = ({ mobileDrawerOpen, setMobileDrawerOpen }: MobileNavbarProps) => {
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <div className="lg:hidden md:hidden flex flex-col justify-end">
        <button className="cursor-pointer text-white" onClick={toggleNavbar}>
          {mobileDrawerOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            ) : <img src={HamburgerMenu} alt="Menu" />
          }
        </button>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed shadow-xl left-0 right-0 top-15 px-6 sm:px-8 md:px-12 py-6 sm:py-4 md:py-6 bg-[#043873] lg:hidden">
          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 text-white text-sm w-full max-w-xs mx-auto">
            <a href="#" className="hover:text-blue-300 transition">Products</a>
            <a href="#" className="hover:text-blue-300 transition">Solutions</a>
            <a href="#" className="hover:text-blue-300 transition">Resources</a>
            <a href="#" className="hover:text-blue-300 transition">Pricing</a>

            <a href="#" className="bg-[#FFE492] text-[#114174] px-10 py-2 md:px-6 md:py-3 font-semibold rounded hover:bg-yellow-500 inline-flex items-center justify-center w-42 h-10 transition">
              Login
            </a>

            <a href="#" className="bg-[#4F9CF9] hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded whitespace-nowrap inline-flex items-center justify-center w-42 h-10 transition">
              Try Whitepace free <span className="ml-1">&#x2192;</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;