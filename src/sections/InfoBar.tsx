import '../index.css'

const InfoBar = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "400px",
        backgroundColor: "var(--accent)",

        animation: "animateIn 1.75s ease-in-out",
        animationDelay: "1.75s",
        animationFillMode: "forwards",

        transform: "translate(100%, 0%) translateX(50px)",
        position: "relative",
      }}
    >
      <style>
        {`@keyframes animateIn {
          0%   { transform: translate(100%, 0%) translateX(50px); }
          100% { transform: translate(0%, 0%)  translateX(-50px); }
        }`}
      </style>
    </div>
  );
};

export default InfoBar;