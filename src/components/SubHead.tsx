type SubHeadProps = {
  heading: string,
  headingContent: string,
  textColor: string
};

const SubHead = ({ heading, headingContent, textColor }: SubHeadProps) => {
  return (
    <div className={`${(textColor === "white") ? "text-gray-200" : "text-gray-800"} flex flex-col space-y-3`}>
      <h3 className="font-semibold">
        {heading}
      </h3>

      <p className="text-xs font-light">
        {headingContent}
      </p>
    </div>
  );
};

export default SubHead;