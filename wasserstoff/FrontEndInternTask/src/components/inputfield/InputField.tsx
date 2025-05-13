import { InputFieldProps } from "./inputfield.types";
import "./inputfield.css";
import { useState } from "react";

// Defines the InputField functional component.
const InputField = ({
  label, // The label text for the input field.
  name, // The name attribute for the input field.
  type = "text", // Defaults to 'text' type if not specified.
  className = "", // Defaults to an empty string for custom input classes.
  containerClassName = "", // Defaults to an empty string for custom container classes.
  id, // Optional id, if not provided, 'name' will be used.
  ...props // Spreads any other standard HTML input attributes.
}: InputFieldProps) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e:any) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  // Determines the id for the input field. Uses the provided 'id' or falls back to 'name'.
  // This is important for associating the label with the input using 'htmlFor'.
  const inputId = id || name;

  return (
    // The main div wrapping the label and input. Applies container-specific styles.
    <div className={`input-field-group ${containerClassName}`}>
      {/* Conditionally renders the label if 'label' prop is provided. */}
      {label && (
        <label htmlFor={inputId} className="input-field-label">
          {label}
        </label>
      )}
      {/* if input field type exept file type */}
      {type != "file" && (
        <input
          type={type}
          id={inputId}
          name={name}
          className={`input-field-element ${className}`} // Applies input-specific styles.
          {...props} // Spreads other props like 'placeholder', 'value', 'onChange', etc.
        />
      )}
      {/* if input field file type */}

      {type == "file" && (
        <div className="upload-container">
          <label htmlFor={inputId} className="upload-box">
            <div className="upload-icon">📤</div>
            <div className="upload-text">Upload Profile</div>
            {fileName && <div className="file-name">{fileName}</div>}
          </label>

          <input
            type="file"
            id={inputId}
            className="file-input"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default InputField;
