"use client";
import Image from "next/image";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Navbar as NextUINavbar, NavbarContent, NavbarBrand } from "@nextui-org/navbar";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { ThemeSwitch } from "@/components/theme-switch";

export default function Header() {
  const pathname = usePathname();

  // Rutas válidas
  const validPaths = ["/", "/#about", "/#projects", "/contact"];

  // Cualquier ruta que no sea válida es una 404
  const is404Page = !validPaths.includes(pathname);

  // Si estás en la página 404, no renderices el Header
  if (is404Page) {
    return null;
  }

  const isActive = (href: string) => pathname === href;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const closeMenu = () => setIsOpen(false);

  const generateLink = (href: string, text: string) => (
    <Link
      onClick={closeMenu}
      href={href}
      className={`text-lg max-lg:text-3xl font-medium hover:border-b-4 hover:border-b-pink-600 transitiion duration-300 ${
        isActive(href) ? "border-b-4 border-b-pink-600" : "border-b-4 border-transparent"
      }`}
    >
      {text}
    </Link>
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="dark:bg-[#0e141bb9]">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <Link href="/#" className="header_brand flex items-center gap-x-2">
          <Image
            src="/profile-picture.png"
            alt="Profile picture portfolio"
            width={45}
            height={45}
            className="border-none rounded-full"
          />
          <span className="font-semibold hover:text-pink-600">Renzo Viscio</span>
          <RiVerifiedBadgeFill size={25} color="#1da1f2" />
        </Link>
        <Link href="https://github.com/Zonorg" target="_blank">
          <FaGithub className="hover:text-pink-600 text-xl hover:text-2xl duration-300 transition-all" />
        </Link>
        <Link href="https://www.linkedin.com/in/renzo-viscio-b69a13217/" target="_blank">
          <FaLinkedin className="hover:text-pink-600 text-xl hover:text-2xl duration-300 transition-all" />
        </Link>
      </NavbarContent>
      <div className="hidden lg:flex gap-10">
        <ThemeSwitch />
        {generateLink("/", "Home")}
        {generateLink("/#about", "About")} {generateLink("/#projects", "Projects")}
        {generateLink("/contact", "Contact")}
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <GiHamburgerMenu size={30} />
        </button>
        <motion.div
          className="menu_header flex flex-col gap-10 z-10 bg-white dark:bg-[#0e141b] fixed inset-y-0 right-0 overflow-auto transition-transform duration-200 ease-in-out"
          style={{ width: "100%", height: "100vh" }}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <button onClick={toggleMenu}>
            <IoClose size={40} className="absolute right-4 top-2" />
          </button>
          <div className="flex flex-col gap-5 mt-32 mx-auto">
            {generateLink("/", "Home")}
            {generateLink("/#about", "About")}
            {generateLink("/#projects", "Projects")}
            {generateLink("/contact", "Contact")}
            <ThemeSwitch />
          </div>
        </motion.div>
      </div>
    </NextUINavbar>
  );
}
