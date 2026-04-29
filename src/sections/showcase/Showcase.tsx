import { useFadeInOnScroll } from "@/util/fadeInOnScroll"
import ShowcaseItem from "./components/ShowcaseItem";
import type { ShowcaseItemProps } from "./components/ShowcaseItem";

const showcaseItems: ShowcaseItemProps[] = [
  {
    title: "Visulie",
    subtitle: "Comprehensive Animation Suite",
    description: "Animation Editor",
    image: "",
  },
  {
    title: "Visulie",
    subtitle: "Comprehensive Animation Suite",
    description: "Animation Editor",
    image: "",
  },
  {
    title: "Visulie",
    subtitle: "Comprehensive Animation Suite",
    description: "Animation Editor",
    image: "",
  },
  {
    title: "Visulie",
    subtitle: "Comprehensive Animation Suite",
    description: "Animation Editor",
    image: "",
  },
]

function Showcase() {
  const { ref, isVisible } = useFadeInOnScroll();
  
  return (
    <div
      ref = {ref}
      style = {{
        transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
        transition: "all 0.3s ease-out",
        opacity: isVisible ? 1 : 0,

        display: "grid",
        flexDirection: "column",

        padding: "5rem 0rem",
        gap: "8rem"
      }}
    >
      <h2>Showcase</h2>

      <div>
        {showcaseItems.map((item, index) => {
          return (
            <ShowcaseItem key = {index} {...item} />
          )
        })}
      </div>
    </div>
  )
}

export default Showcase