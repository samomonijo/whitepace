const H1heading = ({ textColor, heading }: { textColor: string, heading: string }) => {
  return (
    <h1 className={`text-4xl sm:text-[40px] ${(textColor === "white") ? "text-white" : "text-black"} 
    font-bold leading-tight text-center mb-3`}>
      {heading}
    </h1>
  );
};

export default H1heading;