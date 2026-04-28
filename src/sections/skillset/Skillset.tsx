import { useFadeInOnScroll } from "@/util/fadeInOnScroll"

function Skillset() {
  const { ref, isVisible } = useFadeInOnScroll();
  
  return (
    <div
      ref={ref}
      className = "split-container"
      style = {{
        transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
        transition: "all 0.3s ease-out",
        opacity: isVisible ? 1 : 0,
      } as React.CSSProperties}
    >

    </div>
  )
}

export default Skillset