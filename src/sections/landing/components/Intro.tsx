import "@/components/Button.tsx"

const Intro = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 100,
      }}
    >
      <div
        style={{
          fontSize: 100,
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
        style={{
          fontSize: 30,
          fontWeight: 600,
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
        }}>
        Thanks for checking in!
      </div>

      <style>
        {`@keyframes introMoveTitle {
          0%   { transform: translate(-50%, -50%) translateY(0.75rem); opacity: 0 }
          100% { transform: translate(-50%, -50%) translateY(-3rem); opacity: 1 }
        }`}
        {`@keyframes introMoveSubtitle {
          0%   { transform: translate(-50%, -50%) translateY(3.5rem); opacity: 0 }
          100% { transform: translate(-50%, -50%) translateY(1.5rem); opacity: 1 }
        }`}
        {`@keyframes introMoveTitleLeft {
          0%   { transform: translate(-50%, -50%) translateY(-3rem); }
          100% { transform: translate(0%, -50%) translateY(-3rem); left: 0px}
        }`}
        {`@keyframes introMoveSubtitleLeft {
          0%   { transform: translate(-50%, -50%) translateY(1.5rem); }
          100% { transform: translate(2%, -50%) translateY(1.5rem); left: 0px}
        }`}
      </style>
    </div>
  );
};

export default Intro;