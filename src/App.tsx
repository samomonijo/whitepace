import { useEffect, useState } from "react";

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

import OfflineUI from "./OfflineUi";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      window.location.reload(); // reload when back online
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {isOnline ? (
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
      ) : (
        <OfflineUI />
      )}
    </>
  );
}

export default App;