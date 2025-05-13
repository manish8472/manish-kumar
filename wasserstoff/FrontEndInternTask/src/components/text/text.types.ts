
// Defines the properties (props) that the Text component (for paragraphs) can accept.
export interface TextProps {
  children: React.ReactNode; // The content to be displayed (e.g., a paragraph of text).
  className?: string; // Optional: Custom CSS class for additional styling.
  size?: "small" | "medium" | "large"; // Optional: Predefined font sizes.
  muted?: boolean; // Optional: If true, applies a lighter, 'muted' text color.
  align?: "left" | "center" | "right"; // Optional: Text alignment.
}
