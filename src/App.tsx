import TabIcon from "/src/assets/logo.png";
                                                                          
import Header from "./Navbar";
import Hero from "./Hero";
import PromoSection from "./Promo";
import Extension from "./Extension";
import Customise from "./Customise";
import Pricing from "./Pricing";

function App() {
  return (
    <>
      <title>Whitepace</title>
      <link rel="icon" type="image/svg+html" href={TabIcon} />
      
      <div className="font-[Inter]">
        <Header />
        <Hero />
        <PromoSection />
        <Extension />
        <Customise />
        <Pricing />
      </div>
    </>
  );
}

export default App;