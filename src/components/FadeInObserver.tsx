import "@/styles/fadeIn.css"
import { useEffect } from "react";

export default function FadeInObserver() {
  useEffect(() => {
    const items = document.querySelectorAll('.fade-in-container');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "20px",
    });

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}