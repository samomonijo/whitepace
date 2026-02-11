import Header from "./Navbar";
import GetMoreDone from "./GetMoreDone";
import ProjectManagement from "./ProjectManagement";
import WorkTogether from "./WorkTogether";
import Extension from "./Extension";
import Customise from "./Customise";
import Pricing from "./Pricing";
import Everywhere from "./Everywhere";
import YourData from "./YourData";
import Sponsors from "./Sponsors";
import WorkWithApps from "./WorkWithApps";
import Testimonials from "./Testimonials";

function App() {
  return (
    <>
      <title>Whitepace</title>
      <link rel="icon" type="image/svg+html" href="/tab-icon-logo.png" />
      
      <div className="font-[Inter]">
        <Header />
        <GetMoreDone />
        <ProjectManagement />
        <WorkTogether />
        <Extension />
        <Customise />
        <Pricing />
        <Everywhere />
        <YourData />
        <Sponsors />
        <WorkWithApps />
        <Testimonials />
      </div>
    </>
  );
}

export default App;