import ContentImgSection from "./components/ContentImgSection";
import GetMoreDoneImg from "./assets/hero.png";

const GetMoreDone = () => {
  return (
    <ContentImgSection
      bgImg="/curly.png"
      bgColor="blue"
      textColor="white"
      imgSide="right"
      header="Get More Done with whitepace"
      content="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
      img={GetMoreDoneImg}
      tryBtnContent="Try Whitepace free"
    />
  );
};

export default GetMoreDone;