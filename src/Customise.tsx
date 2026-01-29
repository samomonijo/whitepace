import ContentImgSection from "./components/ContentImgSection";
import CustomiseImg from "./assets/customise.jpg";

const Customise = () => {
  return (
    <section className="py-[15%] sm:py-[5%]">
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
    </section>
  );
};

export default Customise;