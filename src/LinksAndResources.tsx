import footerLinks from "./constants/footerLinks";

import CTABtn from "./components/CTABtn";
import Logo from "./components/Logo";
import SubHead from "./components/SubHead";

const LinksAndResources = () => {
  return (
    <section id="resources" className="bg-[#043873] text-gray-300 max-w-7xl mx-auto px-6 pt-12 pb-8 grid grid-cols-1 md:grid-cols-5 gap-10">
      {/* Company Info */}
      <div className="flex flex-col gap-3">
        <Logo />

        <p className="text-sm leading-relaxed">
          whitespace was created for the new ways we live and work. We make a
          better workspace around the world.
        </p>
      </div>

      {footerLinks.map((link, index) => {
        return (
          <div key={index}>
            <h3 className="font-semibold text-white mb-4">{link.headingLink}</h3>

            <ul className="space-y-2 text-sm">
              {link.links.map((link, i) => {
                return (
                  <li key={i}>
                    <a href={`#${link.toLowerCase()}`} className={`hover:text-white ${((index === 0) && (i === 0)) ? "text-[#FFE492]" : ""}`}>
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <div className="text-white flex flex-col space-y-6">
        <SubHead
          heading="Try It Today"
          headingContent="Get started for free. Add your whole team as your needs grow."
          textColor="white"
        />

        <CTABtn
          bgColor="blue"
          content="Start today"
        />
      </div>
    </section>
  );
};

export default LinksAndResources;