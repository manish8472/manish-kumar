import { TextProps } from "./text.types";
import "./text.css";

// Defines the Text functional component, typically used for paragraphs.
const Text = ({
  children, // The content of the text element.
  className = "", // Defaults to an empty string for custom classes.
  size = "medium", // Defaults to 'medium' size.
  muted = false, // Defaults to not muted.
  align = "left", // Defaults to 'left' alignment.
}: TextProps) => {
  // Constructs the CSS class string for the paragraph element.
  // It combines base classes, size class, conditional muted class,
  // alignment class, and any custom className passed via props.
  const textClasses = `
    text-paragraph
    text-size-${size}
    ${muted ? "text-muted" : ""}
    text-align-${align}
    ${className}
  `;

  return (
    // Renders a <p> tag with the constructed classes.
    <p className={textClasses.trim()}>{children}</p>
  );
};

export default Text;
