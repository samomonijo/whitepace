import ContentImgSection from "./components/ContentImgSection";

const Customise = () => {
  return (
    <section className="pt-[8%] pb-20">
      <ContentImgSection
        bgColor="white"
        textColor="black"
        imgSide="left"
        header="Customise it to your needs"
        content="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        img="/src/assets/customise.jpg"
        tryBtnContent="Let's Go"
      />
    </section>
  );
};

export default Customise;