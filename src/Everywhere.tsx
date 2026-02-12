import ImageSrc from "./assets/taskey.png";
import Heading from "./components/Heading";
import CTABtn from "./components/CTABtn";

const Everywhere = () => {
  return (
    <section className="bg-[#043873] py-15 relative bg-[url('/arch.png')] bg-no-repeat bg-size-[15%]">
      {/* Text Content */}
      <div>
        <Heading 
          headingProps={{
            heading: "Your work, everywhere ",
            headingSpanContent: "you are",
            underline: "blue"
          }}
          
          contentProps={{
            textColor: "white",
            fontSize: "small",
            content: `
              Access your notes from your computer, phone or tablet by synchronizing with various services, 
              including Whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. 
              A terminal app is also available!
            `
          }}
        />

        <div className="justify-self-center">
          <CTABtn bgColor="blue" content="Try Taskey" />
        </div>
      </div>

      {/* Image Illustration */}
      <div className="absolute right-0 -top-20 max-[1300px]:hidden">
        <img src={ImageSrc} alt="Taskey promo illustration" className="w-full max-w-md object-contain" />
      </div>
    </section>
  );
};

export default Everywhere;