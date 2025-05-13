// Defines the properties (props) that the Ticket component can accept.
export interface TicketProps {
  userName: string; // The full name of the user for whom the ticket is.
  userHandle: string; // The user's handle or username (e.g., "@jonatankristof").
  ticketDate?: Date; // Optional: The date to display on the ticket.
  className?: string; // Optional: Custom CSS class for additional styling of the ticket card.
  avatarUrl?: string; // Optional: URL to an avatar image for the user.
  // If not provided, initials will be shown.
}
