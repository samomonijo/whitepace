import CTABtn from "./CTABtn";
import HeadingContent from "./HeadingContent";

type ContentImgSectionProps = {
  bg: {
    bgImg: string,
    bgColor: string,
  },

  headingProps: {
    heading: string,
    headingSpanContent: string,
    underline: string
  },

  contentProps: {
    content: string,
    textColor: string,
    tryBtnContent: string
  },

  imgIcon: {
    img: string,
    imgSide: string,
    imgAlt: string,
  }
};

const ContentImgSection = ({ bg, headingProps, contentProps, imgIcon }: ContentImgSectionProps) => {
  const lineImgSrc = (
    headingProps.underline === "long-orange" ? "orange-line.png" : "short-orange-line.png"
  );

  return (
    <section
      style={{ 
        backgroundImage: `url('/${bg.bgImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}

      className={`
        ${bg.bgColor === 'blue' ? 'bg-[#043873]' : 'bg-white'} 
        ${contentProps.textColor === 'white' ? 'text-white' : 'text-black'} 
        px-[9%] pt-[5%] pb-[10%] sm:px-[4%] md:px-[6%] md:pt-[5%] md:pb-[3%] lg:px-[10%]
      `}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8 md:justify-end md:flex-row md:space-y-0">
        {/* Illustration */}
        {imgIcon.imgSide === 'left' && (
          <div className="md:flex-1 md:mt-0 flex justify-center md:justify-start">
            <img
              src={imgIcon.img}
              alt={imgIcon.imgAlt}
              className="w-9/10 sm:w-3/5 md:w-4/5 h-auto"
            />
          </div>
        )}

        {/* Text Content */}
        <div className="md:flex-1 space-y-6 max-[650px]:text-center">
          <h1 className="text-4xl sm:text-[40px] font-bold leading-tight mb-3 max-w-80 max-[650px]:justify-self-center">
            {headingProps.heading}

            <span
              style={{
                backgroundImage: `url(${lineImgSrc})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: `center ${lineImgSrc === "short-orange-line.png" ? "220%" : "110%" }`,
                backgroundSize: "contain",
                display: "inline-block",
              }}>
              {headingProps.headingSpanContent}
            </span>
          </h1>

          <HeadingContent
            textColor={contentProps.textColor}
            fontSize="small"
            alignCenter={false}
            content={contentProps.content}
          />

          <CTABtn bgColor="blue" content={contentProps.tryBtnContent} />
        </div>

        {/* Illustration */}
        {imgIcon.imgSide === 'right' && (
          <div className="md:flex-1 md:mt-0 flex justify-center">
            <img
              src={imgIcon.img}
              alt={imgIcon.imgAlt}
              className="w-9/10 sm:w-3/5 md:w-4/5 h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentImgSection;