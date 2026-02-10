import ContentImgSection from "./components/ContentImgSection";
import ExtensionImg from "./assets/extension.png";

const Extension = () => {
  return (
    <ContentImgSection
      bg={{ bgImg: "", bgColor: "blue" }}

      headingProps={{
        heading: "Use as ", 
        headingSpanContent: "Extension",
        underline: "long-orange"
      }}

      contentProps={{ 
        content: "Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.",
        textColor: "white",
        tryBtnContent: "Let's Go"
      }}

      imgIcon={{ imgSide: "right", img: `${ExtensionImg}`, imgAlt: "Use as an extension illustration" }}
    />
  );
};

export default Extension;