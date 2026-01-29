import RightArrow from "./RightArrow";

const TryBtn = ({ bgColor, content }: { bgColor: string, content: string }) => {
  return (
    <a
      href="#"
      className={`
        ${bgColor === 'white' ? 'bg-white border border-gray-200 hover:text-white' : 'bg-[#4F9CF9]'} 
        ${bgColor === 'white' ? 'text-black' : 'text-white'} 
        hover:bg-blue-700 text-xs min-[1500px]:text-base font-semibold inline-flex items-center justify-center w-36 h-10 rounded whitespace-nowrap transition
      `}
    >
      {content} <span className="ml-1"><RightArrow /></span>
    </a>
  );
};

export default TryBtn;