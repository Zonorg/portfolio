import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IProject {
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
}
