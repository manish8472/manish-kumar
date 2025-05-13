import  { useState, FormEvent } from "react";
import {
  Button,
  Heading,
  InputField,
  Logo,
  PageLayout,
  Text,
} from "../../components";
import "./registration_page.css"; 

// Defines the properties (props) that the RegistrationPage component can accept.
interface RegistrationPageProps {
  // Callback function to be invoked when the registration form is successfully submitted.
  // It passes an object containing the fullName and email entered by the user.
  onRegister: (details: { fullName: string; email: string}) => void;
}

// Defines the RegistrationPage functional component.
const RegistrationPage = ({ onRegister }: RegistrationPageProps) => {
  // State hooks to manage the values of the full name and email input fields.
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Handles the form submission.
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevents the default browser form submission behavior.
    // Basic validation: ensure fields are not empty before calling onRegister.
    if (fullName.trim() && email.trim()) {
      onRegister({ fullName, email });
    } else {
      // Optional: Add user feedback here if fields are empty, e.g., an alert or inline message.
      console.warn("Full name and email are required.");
    }
  };

  return (
    // Uses the PageLayout component for consistent page structure and styling.
    <PageLayout>
      {/* Displays the Logo component, with a custom class for page-specific styling. */}
      <Logo className="registration-page-logo" />

      {/* Main heading of the page. */}
      <Heading
        level="h1"
        align="center"
        className="registration-page-main-heading"
      >
        Your Journey to Coding Conf 2025 Starts Here!
      </Heading>

      {/* Subtitle text below the main heading. */}
      <Text align="center" muted className="registration-page-sub-text">
        Secure your seat at next year's biggest coding conference.
      </Text>

      {/* The registration form. */}
      <form onSubmit={handleSubmit} className="registration-page-form">
        {/* InputField for the user's full name. */}
        <InputField
          label="Profile Picture"
          name="profile_picture"
          type="file"
          placeholder=""
          id="profile_picture"
          required // HTML5 built-in validation for required field.
        />
        <InputField
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required // HTML5 built-in validation for required field.
        />
        {/* InputField for the user's email address. */}
        <InputField
          label="Email Address"
          name="email"
          type="email" // Sets input type to 'email' for basic email format validation.
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Submit button for the form. */}
        <Button
          type="submit"
          fullWidth
          className="registration-page-submit-button"
          
        >
          Secure my Ticket
        </Button>
      </form>
    </PageLayout>
  );
};

export default RegistrationPage;
