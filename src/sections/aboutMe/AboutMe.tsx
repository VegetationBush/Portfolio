import Timeline from "./components/Timeline";
import AboutMeText from "./components/AboutMeText";

function AboutMe() {
  return (
    <div
      className = "split-container fade-in-container"
      style = {{
        position: "relative",
        minHeight: "var(--content-height)",
        width: "100%",
        
        alignContent: "center",
        justifyContent: "center",
        padding: "5rem 0",
        gap: "3.5rem",  

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
