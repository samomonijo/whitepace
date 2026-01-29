import H1Heading from "./H1Heading";

const Heading = ({ textColor, heading, content }: { textColor: string, heading: string, content: string }) => {
  return (
    <>
      <H1Heading textColor={textColor} heading={heading} />
      <p className={`text-sm min-[1500px]:text-base px-[10%]
        ${(textColor === "white") ? "text-white" : "text-black"} 
        justify-self-center text-center max-w-3xl mb-12`}>
        {content}
      </p>
    </>
  );
};

export default Heading;