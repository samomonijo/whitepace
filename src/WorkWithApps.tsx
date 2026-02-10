import ContentImgSection from "./components/ContentImgSection";
import WorkWithAppsImg from "./assets/work-with-apps.png";

const WorkWithApps = () => {
  return (
    <ContentImgSection
      bg={{ bgImg: "curly.png", bgColor: "blue" }}

      headingProps={{
        heading: "Get More Done with whitepace", 
        headingSpanContent: "",
        underline: ""
      }}

      contentProps={{ 
        content: "Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.",
        textColor: "white",
        tryBtnContent: "Read more"
      }}

      imgIcon={{ imgSide: "left", img: `${WorkWithAppsImg}`, imgAlt: "Work with your favourite apps." }}
    />
  )
}

export default WorkWithApps