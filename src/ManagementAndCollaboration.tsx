import ContentImgSection from "./components/ContentImgSection";
import ProjectManagementImg from "./assets/project-management.webp";
import WorkTogetherImg from "./assets/work-together.png";

const ManagementAndCollaboration = () => {
  return (
    <>
      {/* Project Management Section */}
      <ContentImgSection
        bgImg=""
        bgColor="white"
        textColor="black"
        imgSide="right"
        header="Project Management"
        content="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
        img={ProjectManagementImg}
        tryBtnContent="Get Started"
      />

      {/* Work Together Section */}
      <ContentImgSection
        bgImg=""
        bgColor="white"
        textColor="black"
        imgSide="left"
        header="Work together"
        content="With Whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
        img={WorkTogetherImg}
        tryBtnContent="Try it now"
      />
    </>
  );
};

export default ManagementAndCollaboration;