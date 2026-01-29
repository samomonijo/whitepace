const H1Heading = ({ textColor, heading }: { textColor: string, heading: string }) => {
  return (
    <h1 className={`
        text-4xl sm:text-[40px] justify-self-center font-bold leading-tight text-center mb-3 max-[600px]:max-w-100
        ${(textColor === "white") ? "text-white" : "text-black"}
      `}>
      {heading}
    </h1>
  );
};

export default H1Heading;
