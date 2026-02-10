import ContentImgSection from "./components/ContentImgSection";
import YourDataImg from "./assets/your-data.png";

const YourData = () => {
  return (
    <ContentImgSection
      bg={{ bgImg: "", bgColor: "white" }}

      headingProps={{
        heading: "100% ", 
        headingSpanContent: "your data",
        underline: "long-orange",
      }}

      contentProps={{ 
        content: `The app is open source and your notes are saved to an open format, 
          so you'll always have access to them. 
          Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
        `,
        textColor: "black",
        tryBtnContent: "Get Started"
      }}

      imgIcon={{ imgSide: "right", img: `${YourDataImg}`, imgAlt: "100% your data Illustration" }}
    />
  );
};

export default YourData;