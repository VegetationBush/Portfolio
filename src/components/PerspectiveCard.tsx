import React, { useRef } from 'react';
import type { MouseEvent } from 'react';

interface PerspectiveCardProps {
  title?: string;
  description?: string;
  width?: number;
  height?: number; // optional, default 400
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
    // card.style.boxShadow = `5px 5px 20px 20px black`;
    
    // Convert angle so 45deg = brightest, 225deg = darkest
    const targetAngle = -Math.PI / 4; // 45deg in radians
    let angleDiff = angle - targetAngle;

    // Normalize angleDiff to -π → π
    if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
    if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

    // Cosine mapping: 0 → darkest, 1 → brightest
    const brightnessFactor = 0.05; // max deviation
    const brightness = 1.05 + brightnessFactor * Math.cos(angleDiff); 
    card.style.filter = `brightness(${brightness})`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    card.style.filter = `brightness(1)`;
  };

  return (
    <div
      className="interactive-card-container"
      style={{
        width,
        height,
        position: "absolute",
        perspective: "1500px",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="interactive-card" ref={cardRef} style = {{position: "absolute", height: "350px", width: "350px", color: "white"}}>
        <h2 style = {{backgroundColor: "black", height: "100%", borderRadius: 25, border: "var(--border)", boxShadow: "var(--shadow)"}}></h2>
        {children}
      </div>
    </div>
  );
};

export default PerspectiveCard;