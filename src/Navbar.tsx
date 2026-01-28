import MobileNavbar from "./MobileNavbar";
import DropdownGroup from "./components/DropdownGroup";

const Navbar = () => {
  return (
    <header className="bg-[#043873] px-[9%] sm:px-[4%] md:px-[6%] lg:px-[10%] py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/src/assets/logo.png" alt="Whitepace Logo" className="flex w-7/10 lg:w-3/5" />
        <div className="hidden font-[Inter] min-[1250px]:flex text-white m-0 p-0 text-xl ml-0.5 font-semibold">
          whitepace
        </div>
      </div>

      <div className="flex">
        {/* Dropdowns */}
        <div className="hidden md:flex lg:flex space-x-2 md:space-x-4 lg:space-x-6 text-[70%] text-white mr-15">
          <DropdownGroup />
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex lg:flex items-center space-x-4 text-[70%]">
          <a href="#" className="bg-[#FFE492] text-[#114174] px-3 py-2 md:px-6 md:py-3 font-semibold rounded hover:bg-yellow-500">
            Login
          </a>

          <a href="#" className="hidden lg:flex bg-[#4F9CF9] hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded whitespace-nowrap">
            Try Whitepace free <span className="ml-1">&#x2192;</span>
          </a>

          <a href="#" className="flex lg:hidden bg-[#4F9CF9] text-white font-semibold px-4 py-3 rounded hover:bg-blue-700 whitespace-nowrap">
            Try &#x2192;
          </a>
        </div>
      </div>

      {/* Hamburger Menu */}
      <MobileNavbar />
    </header>
  );
};

export default Navbar;