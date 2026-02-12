import dropdowns from "../constants/dropdowns";

import { ChevronDown } from "lucide-react";

type AnchorsProps = { 
  styles: string, 
  downArrow: boolean, 
  setMobileDrawerOpen: (mobileDrawerOpen: boolean) => void 
};

const Anchors = ({ styles, downArrow, setMobileDrawerOpen }: AnchorsProps) => {
  return (
    <>
      {
        dropdowns.map(label => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className={styles}
            onClick={() => setMobileDrawerOpen(false)}
          >
            <span>{label}</span>
            {downArrow && <ChevronDown className="w-4 h-4 text-white" />}
          </a>
        ))
      }
    </>
  );
};

export default Anchors;