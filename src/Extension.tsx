import ContentImgSection from "./components/ContentImgSection";
import ExtensionImg from "./assets/extension.png";

const Extension = () => {
  return (
    <ContentImgSection
      bgImg=""
      bgColor="blue"
      textColor="white"
      imgSide="right"
      header="Use as Extension"
      content="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
      img={ExtensionImg}
      imgAlt="Use as an extension illustration"
      tryBtnContent="Let's Go"
    />
  );
};

export default Extension;