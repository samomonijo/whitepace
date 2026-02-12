type HeadingContentProps = {
  fontSize: string,
  textColor: string,
  alignCenter: boolean,
  content: string
}

const HeadingContent = ({ fontSize, textColor, alignCenter, content }: HeadingContentProps) => {
  return (
    <p className={`
          max-w-[80%] justify-self-center md:max-w-[75%] md:justify-self-start whitespace-pre-line
          ${(alignCenter ? "text-center justify-self-center px-[10%] mb-12" : "mb-10")}
          ${(textColor === "white") ? "text-gray-300" : "text-gray-800"} 
          ${(fontSize === "small" ? "text-sm min-[1500px]:text-base" : "text-base min-[1500px]:text-lg")}
        `}>
      {content}
    </p>
  );
};

export default HeadingContent;