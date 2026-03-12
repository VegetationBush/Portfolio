  import '../index.css'

const Intro = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100vw",
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
            introMoveTitle 0.85s ease-out,
            introMoveTitleLeft 1.5s ease-in-out
          `,
          animationDelay: "0s, 2s",
          animationFillMode: "forwards",
        }}>
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
            introMoveSubtitle 0.85s ease-out,
            introMoveSubtitleLeft 1.5s ease-in-out
          `,
          animationDelay: "0.65s, 2s",
          animationFillMode: "forwards",
        }}>
        Welcome to my portfolio!
      </div>

      <style>
        {`@keyframes introMoveTitle {
          0%   { transform: translate(-50%, -50%) translateY(10px); opacity: 0 }
          100% { transform: translate(-50%, -50%) translateY(-40px); opacity: 1 }
        }`}
        {`@keyframes introMoveSubtitle {
          0%   { transform: translate(-50%, -50%) translateY(55px); opacity: 0 }
          100% { transform: translate(-50%, -50%) translateY(35px); opacity: 1 }
        }`}
        {`@keyframes introMoveTitleLeft {
          0%   { transform: translate(-50%, -50%) translateY(-40px); }
          100% { transform: translate(0%, -50%) translateY(-40px); left: 100px}
        }`}
        {`@keyframes introMoveSubtitleLeft {
          0%   { transform: translate(-50%, -50%) translateY(35px); }
          100% { transform: translate(0%, -50%) translateY(35px); left: 100px}
        }`}
      </style>
    </div>
  );
};

export default Intro;