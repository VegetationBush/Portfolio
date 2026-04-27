import { useState, useEffect, type ReactElement } from "react";
import Marquee from "./Marquee";

const images = import.meta.glob<string>('/src/sections/landing/components/marqueeImages/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});
const itemList = Object.values(images);

const listToElements = (list: string[]): ReactElement[] => {
  return list.map((item, i) => {
    return <img
      key={i}
      src={item}
      style={{
        width: "10rem",
        height: "10rem",
        objectFit: "cover",
        marginRight: "1rem",
        borderRadius: "1.5rem",
      }}
    />
  })
}

const MarqueeArray = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        height: "100%",
        width: "75%",

        WebkitMaskImage: "linear-gradient(to right, transparent, black 35%, black 65%, transparent)",
        animation: "marquee-array-fade 5s ease-in forwards",
      }}
    >
      <div style={{
        height: "100%",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        
        transform: "rotate(-35deg)",
        transformOrigin: "center",
      }}>
        {
          Array.from({ length: 5 }, (_, i) => (
            <Marquee items = {listToElements(itemList)} duration = {10 + i * 3}/>
          ))
        }
      </div>
      <style>
        {`@keyframes marquee-array-fade {
          0%   { opacity: 1 }
          100% { opacity: 0.27 }
        }`}
      </style>
    </div>
  )
}

export default MarqueeArray