type H1HeadingProps = { 
  headingProps: {
    heading: string, 
    headingSpanContent: string
    underline: string
  },

  contentProps: {
    textColor: string,
  }
};

const H1Heading = ({ headingProps, contentProps }: H1HeadingProps) => {
  const line = headingProps.underline === "long-orange" ? "orange-line.png" :
      headingProps.underline === "short-orange" ? "short-orange-line.png"
        : "blue-line.png";

  return (
    <h1 className={`
        text-4xl sm:text-[40px] justify-self-center font-bold leading-tight text-center mb-3 max-[600px]:max-w-100
        ${(contentProps.textColor === "white") ? "text-white" : "text-black"}
      `}>
      {headingProps.heading}

      <span
        style={{
          backgroundImage: `url(/${line})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `center ${line === "blue-line.png" ? "220%" : "100%" }`,
          backgroundSize: "contain",
          display: "inline-block",
        }}>
        {headingProps.headingSpanContent}
      </span>
    </h1>
  );
};

export default H1Heading;

// headerSpanContent: "your needs",
// underline: "long-orange",