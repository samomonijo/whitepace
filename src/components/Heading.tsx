import H1Heading from "./H1Heading";
import HeadingContent from "./HeadingContent";

type HeadingProps = {
  headingProps: {
    heading: string, 
    underline: string,
    headingSpanContent: string
  }

  contentProps: {
    textColor: string, 
    content: string,
    fontSize: string
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

      <HeadingContent 
        fontSize={contentProps.fontSize}
        textColor={contentProps.textColor}
        alignCenter={true}
        content={contentProps.content}
      />
    </>
  );
};

export default Heading;