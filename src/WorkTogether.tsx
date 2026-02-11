import ContentImgSection from "./components/ContentImgSection";
import WorkTogetherImg from "./assets/work-together.png";

const WorkTogether = () => {
  return (
    <section className="max-[768px]:-mt-10 sm:-mt-15">
      <ContentImgSection
        bg={{ bgImg: "", bgColor: "white" }}

        headingProps={{
          heading: "Work ",
          headingSpanContent: "together",
          underline: "short-orange",
        }}

        contentProps={{
          content: "With Whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
          textColor: "black",
          tryBtnContent: "Try it now"
        }}

        imgIcon={{ imgSide: "left", img: `${WorkTogetherImg}`, imgAlt: "Work Together Illustration" }}
      />
    </section>
  );
};

export default WorkTogether;