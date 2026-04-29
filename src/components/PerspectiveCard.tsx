import React, { useRef } from 'react';
import type { MouseEvent } from 'react';
import Card from './Card';
import type {CardProps} from './Card';

const PERSPECTIVE_CARD_STRENGTH = 0.1
const PerspectiveCard: React.FC<CardProps> = ({
  children,
  style,
  ...props
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
      style = {{
        perspective: "1500px",
      }}
      onMouseMove = {handleMouseMove}
      onMouseLeave = {handleMouseLeave}
    >
      <Card ref = {cardRef} {...props} style = {{...style, transition: "transform 0.2s ease-out"}}>
        {children}
      </Card>
    </div>
  );
};

export default PerspectiveCard;