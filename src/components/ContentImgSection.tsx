import TryBtn from "./TryBtn";

type ContentImgSectionProps = {
  bgImg: string,
  bgColor: string,
  textColor: string,
  imgSide: string,
  header: string,
  content: string,
  img: string,
  imgAlt: string,
  tryBtnContent: string
};

const ContentImgSection = ({ bgImg, bgColor, textColor, imgSide, header, content, img, imgAlt, tryBtnContent }: ContentImgSectionProps) => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`
        ${bgColor === 'blue' ? 'bg-[#043873]' : 'bg-white'} 
        ${textColor === 'white' ? 'text-white' : 'text-black'} 
        bg-cover bg-center px-[9%] sm:px-[4%] md:px-[6%] lg:px-[10%] pt-[7%] pb-5
      `}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8 md:justify-between md:flex-row md:space-y-0">
        {/* Illustration */}
        {imgSide === 'left' && (
          <div className="md:flex-1 md:mt-0 flex justify-center">
            <img
              src={img}
              alt={imgAlt}
              className="w-9/10 sm:w-3/5 md:w-4/5 h-auto"
            />
          </div>
        )}

        {/* Text Content */}
        <div className="md:flex-1 space-y-6 max-[769px]:text-center">
          <h1 className="text-4xl sm:text-[40px] font-bold leading-tight mb-3 max-w-80 max-[769px]:justify-self-center">
            {header}
          </h1>

          <p className="text-sm min-[1500px]:text-base max-w-4/5 max-[769px]:justify-self-center max-[640px]:mb-8 mb-12">
            {content}
          </p>

          <TryBtn bgColor="blue" content={tryBtnContent} />
        </div>

        {/* Illustration */}
        {imgSide === 'right' && (
          <div className="md:flex-1 md:mt-0 flex justify-center">
            <img
              src={img}
              alt={imgAlt}
              className="w-9/10 sm:w-3/5 md:w-4/5 h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentImgSection;