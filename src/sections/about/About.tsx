import Timeline from "./components/Timeline";
import AboutMeText from "./components/AboutMeText";

function About() {
  return (
    <div
      className = "section-container"
      style = {{
        backgroundColor: "var(--background-secondary)",
      }}
    >
      <div
        className = "split-container section-item fade-in-container"
        style = {{
          position: "relative",
          minHeight: "var(--content-height)",
          width: "100%",
          
          alignContent: "center",
          justifyContent: "center",
          gap: "3.5rem",  

          "--wrap-length": 40,
          "--left": 3,
          "--right": 5,
        } as React.CSSProperties}
      >
        <AboutMeText/>
        <Timeline/>
      </div>
    </div>
  )
}

export default About
