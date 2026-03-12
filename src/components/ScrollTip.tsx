import '../index.css'

const ScrollTip = () => {
  return (
    <div
      style={{
        height: "20px",
        width: "100px",

        animation: "scrollTipFade 0.5s ease-in-out",
        animationDelay: "3s",
        animationFillMode: "forwards",
        opacity: 0,

        bottom: 10,
        left: "50%",

        transform: "translateX(-50%)",
        position: "absolute",
      }}
    >
      Scroll down
      <style>
        {`@keyframes scrollTipFade {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }`}
      </style>
    </div>
  );
};

export default ScrollTip;