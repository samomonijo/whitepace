import ContentImgSection from "./components/ContentImgSection";
import ProjectManagementImg from "./assets/project-management.webp";
import WorkTogetherImg from "./assets/work-together.png";

const ManagementAndCollaboration = () => {
  return (
    <>
      {/* Project Management Section */}
      <ContentImgSection
        bg={{ bgImg: "", bgColor: "white" }}

        headingProps={{
          heading: "Project ",
          headingSpanContent: "Management",
          underline: "long-orange",
        }}

        contentProps={{
          content: "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
          textColor: "black",
          tryBtnContent: "Get Started"
        }}

        imgIcon={{ imgSide: "right", img: `${ProjectManagementImg}`, imgAlt: "Project Management Illustration" }}
      />

      {/* Work Together Section */}
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
    </>
  );
};

export default ManagementAndCollaboration;