import TryBtn from "./TryBtn";

type ContentImgSectionProps = {
  bgImg: string,
  bgColor: string,
  textColor: string,
  imgSide: string,
  header: string,
  content: string,
  img: string,
  tryBtnContent: string
};

const ContentImgSection = ({ bgImg, bgColor, textColor, imgSide, header, content, img, tryBtnContent }: ContentImgSectionProps) => {
  return (
    <section
      className={`
        ${bgColor === 'blue' ? 'bg-[#043873]' : 'bg-white'} 
        ${textColor === 'white' ? 'text-white' : 'text-black'} 
        ${bgImg ? `bg-[url('${bgImg}')] bg-cover bg-center` : ''}
        px-[9%] sm:px-[4%] md:px-[6%] lg:px-[10%] bg-[#043873] pt-[7%] pb-5
      `}
    >
      <div className="max-w-6xl mx-auto flex flex-col space-y-8 md:justify-between md:flex-row md:space-y-0">
        {/* Illustration */}
        {imgSide === 'left' && (
          <div className="flex-1">
            <img
              src={img}
              alt="Collaboration illustration"
              className="w-4/5 h-auto"
            />
          </div>
        )}

        {/* Text Content */}
        <div className="flex-1 space-y-6 max-[769px]:text-center">
          <h1 className="text-4xl sm:text-[40px] font-bold leading-tight mb-3 max-w-80 max-[769px]:justify-self-center">
            {header}
          </h1>

          <p className="text-sm min-[1500px]:text-base max-w-4/5 max-[769px]:justify-self-center mb-12">
            {content}
          </p>

          <TryBtn bgColor="blue" content={tryBtnContent} />
        </div>

        {/* Illustration */}
        {imgSide === 'right' && (
          <div className="flex-1 md:mt-0">
            <img
              src={img}
              alt="Collaboration illustration"
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentImgSection;