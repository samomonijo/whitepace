import H1heading from "./h1heading";

const Heading = ({ textColor, heading, content }: { textColor: string, heading: string, content: string }) => {
  return (
    <>
      <H1heading textColor={textColor} heading={heading} />
      <p className={`text-sm min-[1500px]:text-base ${(textColor === "white") ? "text-white" : "text-black"} justify-self-center text-center max-w-3xl mb-12`}>
        {content}
      </p>
    </>
  );
};

export default Heading;