import "@/components/Button.tsx"
import "./intro.css"

const Intro = () => {
  return (
    <div
      style = {{
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 100,
      }}
    >
      <div
        className = "intro-title"
        style = {{
          fontWeight: 600,
          color: "var(--primary)",
          textWrap: "nowrap",
          userSelect: "none",

          position: "absolute",
          left: "50%",
          top: "50%",

          animation: `
            introMoveTitle 0.8s ease-out,
            introMoveTitleLeft 2s ease-in-out
          `,
          animationDelay: "0s, 2s",
          animationFillMode: "forwards",
        }}
      >
        Hi, I'm Hans.
      </div>
      <div
        className = "intro-subtitle"
        style = {{
          fontWeight: 400,
          color: "var(--secondary)",
          textWrap: "nowrap",
          opacity: 0,
          userSelect: "none",

          position: "absolute",
          left: "50%",
          top: "50%",

          animation: `
            introMoveSubtitle 0.8s ease-out,
            introMoveSubtitleLeft 2s ease-in-out
          `,
          animationDelay: "1s, 2s",
          animationFillMode: "forwards",
        }}
      >
        Thanks for checking in!
      </div>

      <style>
        {`@keyframes introMoveTitle {
          0%   { transform: translate(-50%, 0%); opacity: 0 }
          100% { transform: translate(-50%, -70%); opacity: 1 }
        }`}
        {`@keyframes introMoveTitleLeft {
          0%   { transform: translate(-50%, -70%) translateY(0%); }
          100% { transform: translate(10rem, -70%) translateY(0%); left: 0px}
        }`}

        {`@keyframes introMoveSubtitle {
          0%   { transform: translate(-50%, 100%); opacity: 0 }
          100% { transform: translate(-50%, 50%); opacity: 1 }
        }`}
        {`@keyframes introMoveSubtitleLeft {
          0%   { transform: translate(-50%, 50%); }
          100% { transform: translate(10.5rem, 50%); left: 0px}
        }`}
      </style>
    </div>
  );
};

export default Intro;