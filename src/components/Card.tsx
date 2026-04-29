import React from "react";
import { useState } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, style, ...props }, ref) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    
    return (
      <div
        ref = {ref}
        {...props}
        style = {{
          backgroundColor: "var(--background-secondary)",
          borderRadius: "1.25rem",
          border: "var(--border)",
          boxShadow: "var(--shadow)",

          transform: (isHovering ? "scale(1.0075)" : "scale(1)"),

          padding: "1rem",
          color: "var(--primary)",
          overflow: "hidden",
          ...style,
        }}
        onMouseEnter = {() => setIsHovering(true)}
        onMouseLeave = {() => setIsHovering(false)}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;