interface IconProps {
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

const IconSVG = ({ svg: Svg, color = "var(--primary)", width, height, style }: IconProps) => {
  return (
    <Svg
      style={{
        width,
        height,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "none",
        ...style,
      }}
    />
  );
};

export default IconSVG;