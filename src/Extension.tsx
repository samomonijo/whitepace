import ContentImgSection from "./components/ContentImgSection";

const Extension = () => {
  return (
    <section className="bg-[#043873] pt-[8%] pb-20">
      <ContentImgSection
        bgColor="blue"
        textColor="white"
        imgSide="right"
        header="Use as Extension"
        content="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        img="/src/assets/use-as-extension.png"
        tryBtnContent="Let's Go"
      />
    </section>
  );
};

export default Extension;