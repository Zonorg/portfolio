"use client";

import About from "./about/layout";
import ReactProjects from "./projects/react-projects";
import WordpressProjects from "./projects/wordpress-projects";
import HubspotProjects from "./projects/hubspot-projects";
import ShopifyProjects from "./projects/shopify-projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="home_content flex-col gap-5">
      <div className="animate-translateUp flex flex-col gap-5">
        <h1 className="text-8xl font-semibold max-md:text-5xl">Web developer</h1>
        <div className="mt-8 flex items-center gap-5 max-md:flex-col-reverse max-md:items-start">
          <video src="/home-video.mp4" autoPlay muted loop playsInline className="rounded-xl max-lg:hidden w-1/2" />
          <Image
            src="/home-cover.png"
            alt="About me cover"
            width={800}
            height={800}
            className="lg:hidden max-lg:w-72"
          />
          <div className="flex flex-col gap-2">
            <span className="uppercase text-pink-600 font-bold text-lg">Hello, my name is Renzo</span>
            <p className="text-2xl">
              I&apos;m a passionate full stack developer based in Argentina. With a focus on websites, I bring a blend
              of creativity and technical expertise to every project.
            </p>
          </div>
        </div>
      </div>
      <About />
      <div id="projects" className="mt-16">
        <h2 className="font-medium text-3xl">Made with</h2>
        <div className="flex gap-4 flex-wrap">
          <Image
            src={theme === "light" ? "/logos/react-logo.webp" : "/logos/react-logo-blanco.webp"}
            alt="React logo"
            width={150}
            height={150}
            className="w-auto object-contain"
          />
          <Image
            src={theme === "light" ? "/logos/node-logo.webp" : "/logos/node-logo-blanco.webp"}
            alt="Node logo"
            width={150}
            height={150}
            className="w-auto object-contain"
          />
        </div>
        <ReactProjects />
        <h2 className="font-medium text-3xl mt-16">Wade with</h2>
        <div className="flex gap-4 flex-wrap">
          <Image
            src={theme === "light" ? "/logos/wordpress-logo.webp" : "/logos/wordpress-logo-blanco.webp"}
            alt="Wordpress logo"
            width={150}
            height={150}
            className="w-auto object-contain"
          />
          <Image
            src={theme === "light" ? "/logos/woocommerce-logo.webp" : "/logos/woocommerce-logo-blanco.webp"}
            alt="WooCommerce logo"
            width={150}
            height={150}
            className="w-auto object-contain"
          />
        </div>
        <WordpressProjects />
        <h2 className="font-medium text-3xl mt-16">Wade with</h2>
        <Image
          src={theme === "light" ? "/logos/hubspot-logo.webp" : "/logos/hubspot-logo-blanco.webp"}
          alt="Hubspot logo"
          width={150}
          height={150}
          className="w-auto object-contain"
        />
        <HubspotProjects />
        <h2 className="font-medium text-3xl mt-16">Made with</h2>
        <Image
          src={theme === "light" ? "/logos/shopify-logo.webp" : "/logos/shopify-logo-blanco.webp"}
          alt="Shopify logo"
          width={150}
          height={150}
          className="w-auto"
        />
        <ShopifyProjects />
      </div>
      <div className="home_bottom">
        <Link href="/contact" className="font-bold text-pink-600 text-xl flex items-center gap-3">
          <span>Let&apos;s create something</span>
          <FaArrowRight className="transition-all mt-1 hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
