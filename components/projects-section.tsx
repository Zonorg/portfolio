"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import projectsData from "@/config/projects.json";
import { IProject, ProjectCategory } from "@/types";
import { ProjectCard } from "@/components/project-card";

type FilterKey = "all" | "react" | "wordpress" | "hubspot" | "shopify";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "react", label: "React / Next" },
  { key: "wordpress", label: "WordPress" },
  { key: "hubspot", label: "HubSpot" },
  { key: "shopify", label: "Shopify" },
];

type StackLogo = {
  alt: string;
  width: number;
  height: number;
  darkSrc: string;
  lightSrc: string;
};

const FILTER_LOGOS: Record<Exclude<FilterKey, "all">, StackLogo[]> = {
  react: [
    {
      alt: "React",
      width: 150,
      height: 150,
      darkSrc: "/logos/react-logo-blanco.webp",
      lightSrc: "/logos/react-logo.webp",
    },
    {
      alt: "Next.js",
      width: 120,
      height: 120,
      darkSrc: "/logos/nextjs-logo.webp",
      lightSrc: "/logos/nextjs-logo.webp",
    },
    {
      alt: "Node.js",
      width: 120,
      height: 120,
      darkSrc: "/logos/node-logo-blanco.webp",
      lightSrc: "/logos/node-logo.webp",
    },
  ],
  wordpress: [
    {
      alt: "PHP",
      width: 100,
      height: 100,
      darkSrc: "/logos/php-logo-blanco.webp",
      lightSrc: "/logos/php-logo.webp",
    },
    {
      alt: "WordPress",
      width: 150,
      height: 150,
      darkSrc: "/logos/wordpress-logo-blanco.webp",
      lightSrc: "/logos/wordpress-logo.webp",
    },
    {
      alt: "WooCommerce",
      width: 150,
      height: 150,
      darkSrc: "/logos/woocommerce-logo-blanco.webp",
      lightSrc: "/logos/woocommerce-logo.webp",
    },
  ],
  hubspot: [
    {
      alt: "HubSpot",
      width: 150,
      height: 150,
      darkSrc: "/logos/hubspot-logo-blanco.webp",
      lightSrc: "/logos/hubspot-logo.webp",
    },
  ],
  shopify: [
    {
      alt: "Shopify",
      width: 150,
      height: 150,
      darkSrc: "/logos/shopify-logo-blanco.webp",
      lightSrc: "/logos/shopify-logo.webp",
    },
  ],
};

function FilterStackLogos({ filter }: { filter: Exclude<FilterKey, "all"> }) {
  const { theme } = useTheme();
  const logos = FILTER_LOGOS[filter];

  return (
    <div className="flex flex-wrap items-center gap-5 mb-6" aria-label="Stack logos">
      {logos.map((logo) => (
        <Image
          key={logo.alt}
          src={theme === "light" ? logo.lightSrc : logo.darkSrc}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          unoptimized
          className="object-contain h-11 w-auto"
        />
      ))}
    </div>
  );
}

const PROJECT_META: Record<string, { stack: string; type: string }> = {
  "Hoteles Mendoza Tours": { stack: "React", type: "Website" },
  "Inmobiliaria Belga": { stack: "React", type: "Real estate" },
  Mumblebe: { stack: "Next.js", type: "Brand" },
  BleeMar: { stack: "React", type: "Platform" },
  Saldo: { stack: "Next.js", type: "Dashboard" },
  "Mendoza Tours": { stack: "WordPress", type: "Tourism" },
  "Alma Orders": { stack: "WooCommerce", type: "Store" },
  "Bariloche Tours": { stack: "WordPress", type: "Tourism" },
  "Lauke Tours": { stack: "WordPress", type: "Travel" },
  "Alma Afiliados": { stack: "WordPress", type: "Landing" },
  "Cima Digital": { stack: "WordPress", type: "SEO" },
  "Inmobiliaria Sys": { stack: "WordPress", type: "Real estate" },
  "Mano con Mano": { stack: "WordPress", type: "Institutional" },
  "Control Match": { stack: "WordPress", type: "Logistics" },
  KwSolar: { stack: "WordPress", type: "Energy" },
  "Delete Technology": { stack: "HubSpot", type: "Cybersecurity" },
  Expertic: { stack: "HubSpot", type: "Cybersecurity" },
  "WithSecure™": { stack: "HubSpot", type: "Security" },
  Bitdefender: { stack: "Shopify", type: "Security" },
  "Mariana Bo": { stack: "Shopify", type: "Fashion" },
};

function withCategory(projects: IProject[], category: ProjectCategory): IProject[] {
  return projects.map((project) => {
    const meta = PROJECT_META[project.title];

    return {
      ...project,
      category,
      stack: meta?.stack,
      type: meta?.type,
    };
  });
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const allProjects = useMemo(
    () => [
      ...withCategory(projectsData.reactProjects as IProject[], "react"),
      ...withCategory(projectsData.wordpressProjects as IProject[], "wordpress"),
      ...withCategory(projectsData.hubspotProjects as IProject[], "hubspot"),
      ...withCategory(projectsData.shopifyProjects as IProject[], "shopify"),
    ],
    [],
  );

  const filteredProjects =
    activeFilter === "all" ? allProjects : allProjects.filter((project) => project.category === activeFilter);

  return (
    <section className="section-padding relative z-10" id="projects">
      <div className="site-container">
        <div className="grid md:grid-cols-[0.8fr_1fr] gap-[50px] items-end mb-[42px]">
          <div>
            <span className="section-kicker">Selected work</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-desc">
            A collection of websites, ecommerce stores, CMS builds and custom platforms developed across different
            stacks.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-[34px]" aria-label="Project categories">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`filter-btn ${activeFilter === filter.key ? "is-active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {activeFilter !== "all" ? <FilterStackLogos filter={activeFilter} /> : null}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[22px]">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
