import React from "react";
import { PageLayoutProps } from "./page_layout.types";
import "./page_layout.css";

// Defines the PageLayout functional component.
// This component provides a consistent structure for different pages.
const PageLayout: React.FC<PageLayoutProps> = ({
  children, // The content to be rendered inside the layout.
  className = "", // Defaults to an empty string for custom classes.
}) => {
  return (
    // The main div for the page layout. Applies base and custom classes.
    <div className={`page-layout-container ${className}`}>{children}</div>
  );
};

export default PageLayout;
