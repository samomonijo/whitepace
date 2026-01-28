import ContentImgSection from "./components/ContentImgSection";
import YourDataImg from "./assets/your-data.png";

const YourData = () => {
  return (
    <section className="py-20">
      <ContentImgSection
        bgColor="white"
        textColor="black"
        imgSide="right"
        header="100% your data"
        content="
          The app is open source and your notes are saved to an open format, 
          so you'll always have access to them. 
          Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
        "
        img={YourDataImg}
        tryBtnContent="Get Started"
      />
    </section>
  );
};

export default YourData;