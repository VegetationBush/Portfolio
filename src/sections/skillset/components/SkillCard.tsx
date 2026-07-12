import PerspectiveCard from "@/components/PerspectiveCard";
import IconSVG from "@/components/IconSVG";
import { useTheme } from "@/ThemeProvider";

export interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  svg_light?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
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

        padding: "1.1rem 1.1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textWrap: "nowrap",
      }}
    >
      <span>
        <IconSVG
          svg = {(svg_light == null || ThemeContext.theme == "dark") ? svg : svg_light }
          width = "1.25rem"
          height = "1.25rem"
        />
      </span>
      <p>{label}</p>
    </PerspectiveCard>
  )
}

export default SkillCard