import { LogoProps } from "./logo.types";
import "./logo.css";

const Logo = ({
  className = "", // Default to an empty string if no className is provided.
  small = false, // Default to the standard size if 'small' is not specified.
}: LogoProps) => {

  // Constructs the CSS class string for the main container.
  // It combines a base class, a conditional class for the 'small' variant,
  // and any custom className passed via props.
  const containerClasses = `logo-container ${
    small ? "logo-container-small" : ""
  } ${className}`;

  return (
    // The main div for the logo.
    <div className={containerClasses.trim()}>
      {/* The visual icon part of the logo. */}
      <div className="logo-icon"></div>
      {/* The text part of the logo. */}
      <span className="logo-text">Coding Conf</span>
    </div>
  );
};

export default Logo;
