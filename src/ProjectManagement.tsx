import ProjectManagementImg from "./assets/project-management.webp";
import ContentImgSection from "./components/ContentImgSection";

const ProjectManagement = () => {
  return (
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
  );
};

export default ProjectManagement;