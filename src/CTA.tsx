import ctaIcons from "./constants/ctaIcons";

import Heading from "./components/Heading";
import CTABtn from "./components/CTABtn";
import HeadingContent from "./components/HeadingContent";

const CTA = () => {
  return (
    <section className="bg-[#043873] flex flex-col items-center">
      <Heading
        headingProps={{
          heading: "Try Whitepace \ntoday",
          headingSpanContent: "",
          underline: ""
        }}

        contentProps={{
          textColor: "white",
          fontSize: "medium",
          content: "Get started for free.\nAdd your whole team as your needs grows"
        }}
      />

      <div className="-mt-5 mb-7">
        <CTABtn bgColor="blue" content="Try Taskey" />
      </div>

      <HeadingContent
        fontSize="medium"
        textColor="white"
        alignCenter={true}
        content="On a big team? Contact sales"
      />

      <div className="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:justify-between md:items-center">
        {ctaIcons.map((icon, i) => {
          return (
            <img
              key={i}
              src={icon.imgSrc}
              alt={icon.imgAlt}
              className="h-10 sm:h-12 object-contain justify-self-center"
            />
          )
        })}
      </div>
    </section>
  );
};

export default CTA;