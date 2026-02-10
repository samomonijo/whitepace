import TryBtn from "./TryBtn";

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
        px-[9%] sm:px-[4%] md:px-[6%] lg:px-[10%] pt-[7%] pb-10
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
        <div className="md:flex-1 md:justify-end space-y-6 max-[769px]:text-center">
          <h1 className="relative inline-block text-4xl sm:text-[40px] font-bold leading-tight mb-3 max-w-80 
          max-[769px]:justify-self-center">
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

          <p className="text-sm min-[1500px]:text-base max-w-4/5 max-[769px]:justify-self-center max-[640px]:mb-8 mb-12">
            {contentProps.content}
          </p>

          <TryBtn bgColor="blue" content={contentProps.tryBtnContent} />
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