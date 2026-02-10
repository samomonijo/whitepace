import H1Heading from "./H1Heading";

type HeadingProps = {
  headingProps: {
    heading: string, 
    underline: string,
    headingSpanContent: string
  }

  contentProps: {
    textColor: string, 
    content: string,
  }
}

const Heading = ({ headingProps, contentProps }: HeadingProps) => {
  return (
    <>
      <H1Heading 
        headingProps={{
          underline: `${headingProps.underline}`,
          heading: `${headingProps.heading}`,
          headingSpanContent: `${headingProps.headingSpanContent}`
        }}

        contentProps={{
          textColor: `${contentProps.textColor}`
        }}
      />

      <p className={`
          text-sm min-[1500px]:text-base px-[10%] justify-self-center text-center md:max-w-[75%] mb-12
          ${(contentProps.textColor === "white") ? "text-white" : "text-black"} 
        `}>
        {contentProps.content}
      </p>
    </>
  );
};

export default Heading;