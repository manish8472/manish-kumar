import { Heading, Logo, PageLayout, Text, Ticket } from "../../components"; 
import "./confirmation_page.css"; 

// Defines the properties (props) that the ConfirmationPage component can accept.
interface ConfirmationPageProps {
  userName: string; // The full name of the user, passed from the registration process.
  email: string; // The email of the user, passed from the registration process.
}

// Defines the ConfirmationPage functional component.
const ConfirmationPage= ({
  userName,
  email,
}: ConfirmationPageProps) => {
  // Generates a simple user handle from the userName.
  // Example: "Jonatan Kristof" becomes "@jonatankristof".
  // This is a simplistic approach; a real application might have a more robust handle generation.
  const userHandle = userName
    ? `@${userName.toLowerCase().replace(/\s+/g, "")}`
    : "@user";
 
  // Calculate the date for the ticket (e.g., 3 days from now)
  const today = new Date();
  const ticketDisplayDate = new Date(today);
  ticketDisplayDate.setDate(today.getDate() + 3); // Add 3 days

  return (
    // Uses the PageLayout component for consistent page structure.
    <PageLayout>
      {/* Displays the Logo component. */}
      <Logo className="confirmation-page-logo" />

      {/* Main heading of the confirmation page, personalized with the user's name. */}
      <Heading
        level="h2"
        align="center"
        className="confirmation-page-main-heading"
      >
        Congrats, {userName}! Your ticket is ready.
      </Heading>

      {/* Informational text, including the user's email. */}
      <Text align="center" muted className="confirmation-page-sub-text">
        We've emailed your ticket to <strong>{email}</strong> and will send
        updates in the run up to the event.
      </Text>

      {/* Displays the Ticket component with the user's details. */}
      <Ticket
        userName={userName}
        userHandle={userHandle}
        ticketDate={ticketDisplayDate} // Pass the calculated future date here
        avatarUrl="https://placehold.co/50x50/FF6B6B/FFFFFF?text=JK" // Example placeholder avatar
        className="confirmation-page-ticket"
      />
    </PageLayout>
  );
};

export default ConfirmationPage;
