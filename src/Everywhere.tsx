import ImageSrc from "./assets/taskey.png";
import Heading from "./components/Heading";
import TryBtn from "./components/TryBtn";

const Everywhere = () => {
  return (
    <section className="bg-[#043873] py-15 relative z-0">
      {/* Text Content */}
      <div>
        <Heading 
          textColor="white"
          heading="Your work, everywhere you are"
          content="
            Access your notes from your computer, phone or tablet by synchronizing with various services, 
            including Whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. 
            A terminal app is also available!
          "
        />

        <div className="justify-self-center">
          <TryBtn bgColor="blue" content="Try Taskey" />
        </div>
      </div>

      {/* Image Illustration */}
      <div className="absolute right-0 -top-20 max-[1300px]:hidden z-0">
        <img src={ImageSrc} alt="Taskey promo illustration" className="w-full max-w-md object-contain" />
      </div>
    </section>
  );
};

export default Everywhere;