import React, { useRef } from 'react';
import Card from './Card';
import type { MouseEvent } from 'react';

interface PerspectiveCardProps {
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const PERSPECTIVE_CARD_STRENGTH = 0.05
const PerspectiveCard: React.FC<PerspectiveCardProps & React.HTMLAttributes<HTMLDivElement>> = ({
  width = 350,
  height = 350,
  style,
  children
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    // retrieving values
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(mouseY - cardCenterY, mouseX - cardCenterX);
    const percentX = Math.abs((mouseX - cardCenterX) / (card.offsetWidth / 2)); // percent distance from the center and outer x bound
    const percentY = Math.abs((mouseY - cardCenterY) / (card.offsetHeight / 2)); // percent distance from the center and outer y bound

    // percentY is used on rotateX and vice versa since their axis rotates each other
    const rotateX = Math.sin(angle) * -PERSPECTIVE_CARD_STRENGTH * percentY;
    const rotateY = Math.cos(angle) * PERSPECTIVE_CARD_STRENGTH * percentX;
    card.style.transform = `rotateX(${rotateX}rad) rotateY(${rotateY}rad)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className="interactive-card-container"
      style={{
        width,
        height,
        position: "absolute",
        perspective: "1500px",
        backgroundColor: "rgba(100, 0, 0, 0)",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref = {cardRef} style = {{backgroundColor: "rgba(100, 0, 0, 0)"}}>
        <Card
          height = {height}
          style = {style}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export default PerspectiveCard;