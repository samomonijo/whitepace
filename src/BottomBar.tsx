import { ChevronDown } from "lucide-react";
import GlobeSvg from "./assets/globe.svg"
import mediaHandlesIcons from "./constants/mediaHandles";

const BottomBar = () => {
  return (
    <div className="mx-[5%] py-6 flex flex-col items-center justify-between sm:flex-row gap-5 border-t border-gray-500 text-xs text-gray-300">
      <div className="flex flex-col items-start space-y-7 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-12 mb-4 md:mb-0 whitespace-nowrap">
        <span className="flex items-center justify-between gap-2">
          <img src={GlobeSvg} alt="Globe" />
          English
          <ChevronDown className="cursor-pointer" />
        </span>

        <a href="#" className="hover:text-white">Terms & privacy</a>
        <a href="#" className="hover:text-white">Security</a>
        <a href="#" className="hover:text-white">Status</a>
        <div>©2021 Whitespace LLC.</div>
      </div>

      <div className="flex items-center mx-auto space-x-7 mb-4 md:mb-0 sm:mx-0">
        {mediaHandlesIcons.map((handle, i) => {
          return (
            <a key={i} href="#">
              <img src={handle.imgSrc} alt={handle.imgAlt} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;