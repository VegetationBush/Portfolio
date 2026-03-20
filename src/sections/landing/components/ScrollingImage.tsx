import '@/index.css'
import { useEffect, useState, useRef } from 'react';
import PerspectiveCard from '@/components/PerspectiveCard';

type scrollingImage = {
  id: number,
  top: number,
  right: number,
}

interface RowProps {
  items: number[];
  speed: number; // pixels per frame
}

function ScrollingRow({ items, speed }: RowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scroll = 0;
    const totalWidth = container.scrollWidth / 2;
    let requestId: number;

    const step = () => {
      scroll += speed;
      if (scroll >= totalWidth) scroll = 0;
      container.scrollLeft = scroll;
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestId);
  }, [speed]);

  const cards = items.map((i) => (
    <div
      key={i}
      style={{
        display: "inline-block",
        width: 250,
        height: 100,
        flexShrink: 0,
        marginRight: 35,
      }}
    >
      <PerspectiveCard
        key={i}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        Card {i + 1}
      </PerspectiveCard>
    </div>
  ));

  // Duplicate items for infinite scroll
  const allCards = [...cards, ...cards];

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        marginBottom: 24,
        width: "100%",
      }}
    >
      {allCards}
    </div>
  );
}

export default function DiagScrollingImages() {
  const rows = [
    { items: Array.from({ length: 8 }, (_, i) => i), speed: 0.5 },
    { items: Array.from({ length: 6 }, (_, i) => i), speed: 1 },
    { items: Array.from({ length: 10 }, (_, i) => i), speed: 0.7 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        padding: 16,
        left: "30%",
        top: 0,
        height: "100%",
        width: "100%",
        transform: "rotate(-70deg)",
      }}
    >
      {rows.map((row, idx) => (
        <ScrollingRow key={idx} items={row.items} speed={row.speed} />
      ))}
    </div>
  );

  // const [scrollingImages, setScrollingImages] = useState<scrollingImage[]>([]);

  // // Create a square every 500ms
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const id = Date.now();
  //     setScrollingImages((prev) => [
  //       ...prev,
  //       { id: id, top: 0, right: 0 },
  //     ]);

  //     setTimeout(() => {
  //       setScrollingImages((prev) => prev.filter((im) => im.id !== id));
  //     }, 3000);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  // const frameRef = useRef<number>(0);

  // useEffect(() => {
  //   let lastTime: number = performance.now();
  //   function animate() {
  //     const dt = performance.now() - lastTime
  //     lastTime = performance.now()
      
  //     setScrollingImages((prev) =>
  //       prev.map((im) => ({
  //         id: im.id,
  //         top: im.top + dt / 30,
  //         right: im.right + dt / 30,
  //       }))
  //     );

  //     requestAnimationFrame(animate);
  //   }

  //   requestAnimationFrame(animate);

  //   return () => {
  //     if (frameRef.current) cancelAnimationFrame(frameRef.current);
  //   };
  // }, []);
  
  //   return <div
  //     style = {{
  //       position: "absolute",
  //       top: "50%",
  //       left: "50%",
  //       transform: "translate(-50%, -50%)",

  //       height: "100%",
  //       width: "100%",

  //       WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
  //       WebkitMaskRepeat: "no-repeat",
  //       WebkitMaskSize: "cover",

  //       color: "red",
  //       fontSize: 200,

  //       display: "grid",
  //     }}
  //   >
  //     {scrollingImages.map((im) => {
  //       return <PerspectiveCard
  //         key = {im.id}
  //         style = {{
  //           position: "absolute",
  //           transform: "rotate(45deg)",
  //           width: 250,
  //           height: 250,
  //           right: im.right,
  //           top: im.top,
  //         }}
  //         cardStyle = {{
  //           backgroundColor: "red"
  //         }}
  //       >

  //       </PerspectiveCard>
  //     })}
  //   </div>
}