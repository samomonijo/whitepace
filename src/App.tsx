import TabIcon from "/src/assets/logo.png";
                                                                          
import Header from "./Navbar";
import GetMoreDone from "./GetMoreDone";
import PromoSection from "./Promo";
import Extension from "./Extension";
import Customise from "./Customise";
import Pricing from "./Pricing";
import Everywhere from "./Everywhere";
import YourData from "./YourData";

function App() {
  return (
    <>
      <title>Whitepace</title>
      <link rel="icon" type="image/svg+html" href={TabIcon} />
      
      <div className="font-[Inter]">
        <Header />
        <GetMoreDone />
        <PromoSection />
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