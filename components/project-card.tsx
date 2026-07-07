"use client";

import Link from "next/link";
import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";
import { IProject } from "@/types";

const DEFAULT_STACK: Record<string, string> = {
  react: "React",
  wordpress: "WordPress",
  hubspot: "HubSpot",
  shopify: "Shopify",
};

export const ProjectCard = ({ src, alt, link, title, description, stack, type, category }: IProject) => {
  const stackLabel = stack ?? (category ? DEFAULT_STACK[category] : "Web");
  const typeLabel = type ?? "Project";

  return (
    <Link href={link} target="_blank" className="project-card group block">
      <div className="overflow-hidden aspect-video bg-white">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={338}
          className="w-full h-full object-cover transition-all duration-[350ms] group-hover:scale-[1.045] group-hover:saturate-[1.06] group-hover:contrast-[1.02]"
        />
      </div>
      <div className="p-[18px_18px_20px]">
        <div className="flex justify-between gap-4 mb-3.5 font-sans text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--accent)]">
          <span>{stackLabel}</span>
          <span>{typeLabel}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[26px] leading-[1.02] tracking-[-0.035em]">{title}</h3>
            {description ? (
              <p className="mt-2.5 font-sans text-[13px] leading-[1.55] text-[var(--muted)] line-clamp-2">
                {description}
              </p>
            ) : null}
          </div>
          <IoOpenOutline
            className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[var(--muted)]"
            size={22}
          />
        </div>
      </div>
    </Link>
  );
};
