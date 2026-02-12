import H1Heading from "./components/H1Heading";

import testimonials from "./constants/testimonials";
import WhiteApostrophe from "./assets/white-apostrophe.png";
import BlueApostrophe from "./assets/blue-apostrophe.png";
import SubHead from "./components/SubHead";

const Testimonials = () => {
  return (
    <section id="solutions" className="py-16 max-w-6xl mx-auto px-6 flex flex-col items-center">
      <div id="customer stories"></div>
      <H1Heading
        headingProps={{
          heading: "What Our Clients",
          headingSpanContent: "Says",
          underline: "short-orange"
        }}

        contentProps={{
          textColor: "black"
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[3%]">
        {testimonials.map((testimonial, i) => {
          return (
            <div key={i} className={`${i === 0 ? "bg-white text-gray-800" : "bg-[#4F9CF9] text-gray-100"} rounded-lg shadow-md p-6 flex flex-col max-w-100`}>
              <img 
                src={`${i === 0 ? `${BlueApostrophe}` : `${WhiteApostrophe}`}`} 
                alt="Speech apostrophe"
                className="w-16 h-11 mb-[10%]" 
              />

              <p className="text-sm sm:text-base mb-[10%]">{testimonial.testimonial}</p>
              <hr className="h-1 w-full mb-[10%]" />

              <div className="flex items-center justify-between">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.imgAlt}
                  className="w-16 h-16 rounded-full mr-6"
                />

                <SubHead 
                  heading={testimonial.clientName} 
                  headingContent={testimonial.clientPost} 
                  textColor={i === 0 ? "black" : "white"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;