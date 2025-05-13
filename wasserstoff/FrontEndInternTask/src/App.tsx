import  { useState } from "react";
import RegistrationPage from "./pages/registration_page/registration_page";
import ConfirmationPage from "./pages/confirmation_page/confirmation_page";

// Defines the structure for user details collected during registration.
interface UserDetails {
  fullName: string;
  email: string;
}

// The main App functional component.
function App() {
  // State to control which page is currently displayed ('registration' or 'confirmation').
  // Defaults to 'registration' when the app loads.
  const [currentPage, setCurrentPage] = useState<
    "registration" | "confirmation"
  >("registration");

  // State to store the user's details after successful registration.
  // Initially null, as no user is registered.
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  // Callback function passed to RegistrationPage.
  // This function is called when the registration form is submitted successfully.
  const handleRegistration = (details: UserDetails) => {
    setUserDetails(details); // Stores the collected user details in state.
    setCurrentPage("confirmation"); // Switches the view to the ConfirmationPage.
  };

  // Conditional rendering based on the currentPage state.
  if (currentPage === "confirmation" && userDetails) {
    // If currentPage is 'confirmation' AND userDetails are available,
    // render the ConfirmationPage, passing the necessary props.
    return (
      <ConfirmationPage
        userName={userDetails.fullName}
        email={userDetails.email}
      />
    );
  }

  // By default, or if currentPage is 'registration', render the RegistrationPage.
  // Pass the handleRegistration callback to allow the RegistrationPage to trigger
  // the state change upon successful registration.
  return <RegistrationPage onRegister={handleRegistration} />;
}

export default App;
