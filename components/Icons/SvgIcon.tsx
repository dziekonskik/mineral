import type { SvgIconProps } from "./IconComponentPros";

export const SvgIcon = ({ children, className }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      {children}
    </svg>
  );
};
