
// Defines the possible HTML heading tag levels (h1 through h6).
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// Defines the properties (props) that the Heading component can accept.
export interface HeadingProps {
  children: React.ReactNode; // The content to be displayed within the heading (e.g., text).
  level?: HeadingLevel; // Optional: The HTML heading level (defaults to 'h1').
  className?: string; // Optional: Custom CSS class for additional styling.
  align?: "left" | "center" | "right"; // Optional: Text alignment (defaults to 'left').
}
