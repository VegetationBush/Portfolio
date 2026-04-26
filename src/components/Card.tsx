import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps & React.HTMLAttributes<HTMLDivElement>> = ({
  style,
  children
}) => {
  return (
    <div
      style = {{
        backgroundColor: "var(--background)",
        borderRadius: 25,
        border: "var(--border)",
        boxShadow: "var(--shadow)",
        padding: "15px",
        color: "var(--primary)",
        overflow: "hidden",
        contain: "paint",
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Card;