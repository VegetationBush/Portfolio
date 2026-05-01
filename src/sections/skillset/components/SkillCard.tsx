import PerspectiveCard from "@/components/PerspectiveCard";
import IconSVG from "@/components/IconSVG";
import { useTheme } from "@/ThemeProvider";

export interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  svg: string,
  svg_light?: string,
  label: string,
  isExperienced?: boolean,
}

const SkillCard = ({ svg, svg_light, label, isExperienced = false }: SkillCardProps) => {
  const ThemeContext = useTheme()

  return (
    <PerspectiveCard
      style = {{
        height: "2rem",

        borderRadius: "0.75rem",
        outline: isExperienced ? "2px inset var(--accent)" : "none",

        padding: "1.25rem 1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textWrap: "nowrap",
      }}
    >
      <span>
        <IconSVG
          svg = {(svg_light == null || ThemeContext.theme == "dark") ? svg : svg_light }
          width = "1.5rem"
          height = "1.5rem"
        />
      </span>
      <p>{label}</p>
    </PerspectiveCard>
  )
}

export default SkillCard