import ContentImgSection from "./components/ContentImgSection";
import CustomiseImg from "./assets/customise.jpg";

const Customise = () => {
  return (
    <ContentImgSection
      bgImg=""
      bgColor="white"
      textColor="black"
      imgSide="left"
      header="Customise it to your needs"
      content="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
      img={CustomiseImg}
      tryBtnContent="Let's Go"
    />
  );
};

export default Customise;