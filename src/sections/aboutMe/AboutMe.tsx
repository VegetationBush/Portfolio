import { useFadeInOnScroll } from "@/util/fadeInOnScroll"
import Timeline from "./components/Timeline";
import AboutMeText from "./components/AboutMeText";

function AboutMe() {
  const { ref, isVisible } = useFadeInOnScroll();
  
  return (
    <div
      ref={ref}
      className = "split-container"
      style = {{
        position: "relative",
        minHeight: "var(--content-height)",
        transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
        transition: "all 0.3s ease-out",
        
        alignContent: "center",
        justifyContent: "center",
        padding: "5rem 0",
        gap: "3.5rem",
        
        opacity: isVisible ? 1 : 0,

        "--wrap-length": 40,
        "--left": 3,
        "--right": 5,
      } as React.CSSProperties}
    >
      <AboutMeText/>
      <Timeline/>
    </div>
  )
}

export default AboutMe
