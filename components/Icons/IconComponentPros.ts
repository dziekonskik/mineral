import { SVGAttributes } from "react";

export interface IconComponentProps
  extends Pick<SVGAttributes<SVGSVGElement>, "className"> {}

export interface SvgIconProps extends IconComponentProps {
  children: React.ReactNode;
}
