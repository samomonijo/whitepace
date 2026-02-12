import LogoImg from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center mr-20">
      <img src={LogoImg} alt="Whitepace Logo" className="flex w-7" />
      
      <div className="hidden font-[Inter] max-[768px]:flex min-[800px]:flex text-white text-xl ml-2 font-semibold">
        whitepace
      </div>
    </div>
  );
};

export default Logo;