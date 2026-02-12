import BottomBar from "./BottomBar";
import CTA from "./CTA";
import LinksAndResources from "./LinksAndResources";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 bg-[#043873] pt-[6%]">
      <CTA />
      <LinksAndResources />
      <BottomBar />
    </footer>
  );
};

export default Footer;