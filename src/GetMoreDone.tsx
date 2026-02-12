import ContentImgSection from "./components/ContentImgSection";
import GetMoreDoneImg from "./assets/hero.png";

const GetMoreDone = () => {
  return (
    <section id="overview">
      <ContentImgSection
        bg={{ bgImg: "curly.png", bgColor: "blue" }}
  
        headingProps={{
          heading: "Get More Done with whitepace", 
          headingSpanContent: "",
          underline: ""
        }}
  
        contentProps={{ 
          content: "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.",
          textColor: "white",
          tryBtnContent: "Try Whitepace free"
        }}
  
        imgIcon={{ imgSide: "right", img: `${GetMoreDoneImg}`, imgAlt: "Get More Done Illustration" }}
      />
    </section>
  );
};

export default GetMoreDone;