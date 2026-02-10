import AppleLogo from "./assets/apple.png";
import MicrosoftLogo from "./assets/microsoft.svg";
import SlackLogo from "./assets/slack.svg";
import GoogleLogo from "./assets/google.svg";

import H1Heading from "./components/H1Heading";

const Sponsors = () => {
  const sponsorsIcons = [AppleLogo, MicrosoftLogo, SlackLogo, GoogleLogo];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <H1Heading
          headingProps={{
            heading: "Our ",
            headingSpanContent: "sponsors",
            underline: "long-orange"
          }}

          contentProps={{
            textColor: "black"
          }}
        />

        {/* Logos */}
        <div className="flex flex-wrap justify-between items-center mt-[5%]">
          {sponsorsIcons.map((icon, i) => {
            return (
              <img
                key={i}
                src={icon}
                alt="Apple"
                className="h-10 sm:h-12 object-contain"
              />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;