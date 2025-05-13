import { ButtonProps } from "./button.types";
import "./button.css";

// Defines the Button functional component.
const Button = ({
  children, // The content to be displayed inside the button.
  variant = "primary", // Defaults to the 'primary' visual variant.
  type = "button", // Defaults to 'button' type, can be 'submit' or 'reset'.
  className = "", // Defaults to an empty string for custom classes.
  fullWidth = false, // Defaults to not full width.
  ...props // Spreads any other standard HTML button attributes (e.g., onClick, disabled).
}: ButtonProps) => {
  // Constructs the CSS class string for the button element.
  // It combines a base class, a class for the chosen variant,
  // a conditional class for 'fullWidth', and any custom className.
  const buttonClasses = `
    button-base
    button-${variant}
    ${fullWidth ? "button-fullWidth" : ""}
    ${className}
  `;

  return (
    // Renders the HTML button element with the constructed classes and spread props.
    <button type={type} className={buttonClasses.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
