import ContentImgSection from "./components/ContentImgSection";
import CustomiseImg from "./assets/customise.jpg";

const Customise = () => {
  return (
    <ContentImgSection
      bg={{ bgImg: "", bgColor: "white" }}

      headingProps={{
        heading: "Customise it to ", 
        headingSpanContent: "your needs",
        underline: "long-orange"
      }}

      contentProps={{ 
        content: `Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). 
          Or create your own scripts and plugins using the Extension API.
        `,
        textColor: "black",
        tryBtnContent: "Let's Go"
      }}

      imgIcon={{ imgSide: "left", img: `${CustomiseImg}`, imgAlt: "Customization Illustration" }}
    />
  );
};

export default Customise;