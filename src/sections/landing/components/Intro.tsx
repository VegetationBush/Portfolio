import "./intro.css"

const Intro = () => {
  return (
    <div
      style = {{
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 100,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div style = {{
        position: "relative",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <h1
          className = "intro-title"
          style = {{
            fontWeight: 600,
            color: "var(--primary)",
            textWrap: "nowrap",
            userSelect: "none",
            lineHeight: 1,

            animation: "introMoveTitle 0.8s ease-out forwards",
            animationDelay: "0s",
          }}
        >
          Hi, I'm Hans.
        </h1>
        <div
          className = "intro-subtitle"
          style = {{
            fontWeight: 400,
            color: "var(--secondary)",
            textWrap: "nowrap",
            opacity: 0,
            userSelect: "none",

            animation: "introMoveSubtitle 0.8s ease-out forwards",
            animationDelay: "0.5s",
          }}
        >
          Thanks for checking in!
        </div>
      </div>
    </div>
  );
};

export default Intro;