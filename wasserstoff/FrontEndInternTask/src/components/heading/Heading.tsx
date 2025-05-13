// Imports React and the component's specific props and styles.

import { HeadingProps } from './heading.types';
import './heading.css';

// Defines the Heading functional component.
const Heading = ({
  children,                     // The content of the heading.
  level = 'h1',                 // Defaults to 'h1' if no level is specified.
  className = '',               // Defaults to an empty string for custom classes.
  align = 'left',               // Defaults to 'left' alignment.
} : HeadingProps) => {
  // Dynamically sets the HTML tag based on the 'level' prop (e.g., 'h1', 'h2').
  const Tag = level;

  // Constructs the CSS class string for the heading element.
  // It combines a base class, a class for the specific heading level,
  // a class for text alignment, and any custom className passed via props.
  const headingClasses = `heading heading-${level} heading-align-${align} ${className}`;

  return (
    // Renders the dynamic HTML heading tag (Tag) with the constructed classes.
    <Tag className={headingClasses.trim()}>
      {children}
    </Tag>
  );
};

export default Heading;