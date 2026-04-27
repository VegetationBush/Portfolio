import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        style={{
          backgroundColor: "var(--background)",
          borderRadius: "2rem",
          border: "var(--border)",
          boxShadow: "var(--shadow-out), var(--shadow-in)",
          padding: "1rem",
          color: "var(--primary)",
          overflow: "hidden",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;