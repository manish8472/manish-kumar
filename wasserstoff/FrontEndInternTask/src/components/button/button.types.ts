// Extends standard HTML button attributes to include custom props for the Button component.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // The content of the button (e.g., text or an icon).
  variant?: 'primary' | 'secondary'; // Optional: Predefined visual styles for the button.
  fullWidth?: boolean; 
     // Optional: If true, the button will take up the full width of its container.
}