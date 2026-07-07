import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ProjectCategory = "react" | "wordpress" | "hubspot" | "shopify";

export interface IProject {
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
  stack?: string;
  type?: string;
  category?: ProjectCategory;
}
