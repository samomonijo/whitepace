import ContentImgSection from "./components/ContentImgSection";
import ExtensionImg from "./assets/extension.png";

const Extension = () => {
  return (
    <section className="bg-[#043873] py-[15%] sm:py-[5%]">
      <ContentImgSection
        bgImg=""
        bgColor="blue"
        textColor="white"
        imgSide="right"
        header="Use as Extension"
        content="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        img={ExtensionImg}
        tryBtnContent="Let's Go"
      />
    </section>
  );
};

export default Extension;