import Header from "./Navbar";
import GetMoreDone from "./GetMoreDone";
import ManagementAndCollaboration from "./ManagementAndCollaboration";
import Extension from "./Extension";
import Customise from "./Customise";
import Pricing from "./Pricing";
import Everywhere from "./Everywhere";
import YourData from "./YourData";

function App() {
  return (
    <>
      <title>Whitepace</title>
      <link rel="icon" type="image/svg+html" href="/tab-icon-logo.png" />
      
      <div className="font-[Inter]">
        <Header />
        <GetMoreDone />
        <ManagementAndCollaboration />
        <Extension />
        <Customise />
        <Pricing />
        <Everywhere />
        <YourData />
      </div>
    </>
  );
}

export default App;