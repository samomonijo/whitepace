import ContentImgSection from "./components/ContentImgSection";
import GetMoreDoneImg from "./assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-[#043873] pt-[8%] pb-20">
      <ContentImgSection
        bgColor="blue"
        textColor="white"
        imgSide="right"
        header="Get More Done with whitepace"
        content="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
        img={GetMoreDoneImg}
        tryBtnContent="Try Whitepace free"
      />
    </section>
  );
};

export default Hero;