// Extends standard HTML input attributes to include custom props for the InputField component.
export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional: Text for the <label> associated with the input.
  name: string; // Required: The name attribute for the input, crucial for forms.
  containerClassName?: string; // Optional: Custom CSS class for the div wrapping the label and input.
  // id is an HTML attribute, so it's inherited. If not provided, it will use 'name'.
}
