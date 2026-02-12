import sponsorsLogos from "./constants/sponsors";

import H1Heading from "./components/H1Heading";

const Sponsors = () => {
  return (
    <section id="products" className="px-5 md:pt-10 mb-10 bg-white">
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
        <div className="mt-[5%] grid grid-cols-2 gap-5 md:flex md:flex-wrap md:justify-between md:items-center">
          {sponsorsLogos.map((icon, i) => {
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
      </div>
    </section>
  );
};

export default Sponsors;