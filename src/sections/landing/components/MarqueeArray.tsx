import "@/index.css"
import { useState, useEffect, type ReactNode, type ReactElement } from "react";
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
        width: "150px",
        height: "150px",
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
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  
  return (
    <div style = {{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        height: "100%",
        width: "75%",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        right: 0,
        animation: "marquee-array-fade 5s ease-in forwards",
        opacity: "0.75",
      }}>
        {
          Array.from({ length: 5 }, (_, i) => (
            <div
              key = {i}
              style = {{ transform: "rotate(-35deg)", position: "relative", right: 150, top: `${i * 50}px` }}
            >
              <Marquee items = {listToElements(itemList)} duration = {10 + i * 3}/>
            </div>
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