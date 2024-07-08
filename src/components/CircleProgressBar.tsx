import { useThemeStore } from "../stores/themeStore";
import { cn } from "../utilities/cn";

type CircleProgressBarProps = {
  persentage: number;
  circleWidth: number;
  radius: number;
};

export default function CircleProgressBar({
  persentage,
  circleWidth,
  radius,
}: CircleProgressBarProps) {
  const dark = useThemeStore((state) => state.dark);

  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * persentage;

  return (
    <svg
      width={circleWidth}
      height={circleWidth}
      viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      className="rotate-90"
    >
      <defs>
        <linearGradient id="gradient">
          <stop offset="5%" stopColor={dark ? "#01315f" : "#c06d4f"} />
          <stop offset="50%" stopColor={dark ? "#015088" : "#fea845"} />
          <stop offset="90%" stopColor={dark ? "#031e33" : "#bc7152"} />
        </linearGradient>
      </defs>
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth="6px"
        r={radius}
        className={cn(
          "fill-none",
          dark ? "stroke-slate-300" : "stroke-stone-300",
        )}
      />
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth="9px"
        r={radius}
        stroke="url(#gradient)"
        className="fill-none"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
    </svg>
  );
}
