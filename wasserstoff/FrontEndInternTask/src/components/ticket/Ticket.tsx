import { TicketProps } from "./ticket.types";
import Logo from "../logo/Logo"; // Reusing the Logo component for the ticket header.
import "./ticket.css";

// Defines the Ticket functional component.
const Ticket = ({
  userName,
  userHandle,
  ticketDate, // Accept the ticketDate prop
  className = "",
  avatarUrl, // Optional URL for an avatar image.
}: TicketProps) => {
  // Helper function to generate initials from the user's name.
  // Used as a fallback if no avatarUrl is provided.
  const getInitials = (name: string): string => {
    if (!name) return ""; // Handle cases where name might be empty
    const names = name.split(" ");
    if (names.length > 1 && names[0] && names[names.length - 1]) {
      // Takes the first letter of the first name and the first letter of the last name.
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    // Fallback for single names or names without spaces.
    return name.substring(0, 2).toUpperCase();
  };

  // Helper function to format the date
  const formatDate = (date: Date | undefined): string => {
    if (!date) return "";
    // Example format: May 12, 2025
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  

  return (
    // The main div for the ticket card. Applies base and custom classes.
    <div className={`ticket-card ${className}`}>
      {/* Header section of the ticket, containing a small version of the Logo. */}
      <div className="ticket-header">
        <Logo small />
      </div>
      {/* Display the formatted date if ticketDate is provided */}
      <div className="ticket-date">
        
        <div className="ticket-date-label">Challege Date: </div>
        <p> {formatDate(ticketDate)}</p>
      </div>

      {/* Body section of the ticket, containing avatar and user information. */}
      <div className="ticket-body">
        {/* Avatar display. Shows an image if avatarUrl is provided, otherwise shows initials. */}
        <div className="ticket-avatar">
          {avatarUrl ? (
            <img src={avatarUrl} alt={`${userName}'s avatar`} />
          ) : (
            getInitials(userName)
          )}
        </div>
        {/* Container for user's name and handle. */}
        <div className="ticket-user-info">
          <p className="ticket-user-name">{userName}</p>
          <p className="ticket-user-handle">{userHandle}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
