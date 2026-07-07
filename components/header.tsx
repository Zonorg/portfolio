"use client";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { ThemeSwitch } from "@/components/theme-switch";

type NavSection = "home" | "about" | "projects" | "contact";

const HEADER_OFFSET = 120;

export default function Header() {
  const pathname = usePathname();
  const validPaths = ["/", "/about", "/#about", "/#projects", "/contact"];
  const is404Page = !validPaths.includes(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSection>("home");

  const updateActiveSection = useCallback(() => {
    if (pathname === "/contact") {
      setActiveSection("contact");
      return;
    }

    if (pathname === "/about") {
      setActiveSection("about");
      return;
    }

    if (pathname !== "/") {
      return;
    }

    const scrollY = window.scrollY + HEADER_OFFSET;
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");

    if (projects && scrollY >= projects.offsetTop) {
      setActiveSection("projects");
      return;
    }

    if (about && scrollY >= about.offsetTop) {
      setActiveSection("about");
      return;
    }

    setActiveSection("home");
  }, [pathname]);

  useEffect(() => {
    updateActiveSection();

    if (pathname !== "/") {
      return;
    }

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname, updateActiveSection]);

  const isActive = (href: string) => {
    switch (href) {
      case "/":
        return activeSection === "home";
      case "/#about":
        return activeSection === "about";
      case "/#projects":
        return activeSection === "projects";
      case "/contact":
        return activeSection === "contact";
      default:
        return false;
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const generateLink = (href: string, text: string) => (
    <Link
      onClick={closeMenu}
      href={href}
      className={`nav-link relative font-sans text-[13px] transition-colors duration-200 hover:text-[var(--text)] ${
        isActive(href) ? "text-[var(--text)] is-active" : "text-[var(--muted)]"
      }`}
    >
      {text}
    </Link>
  );

  if (is404Page) {
    return null;
  }

  return (
    <header className="site-header">
      <div className="site-container min-h-[68px] md:min-h-[74px] flex items-center justify-between gap-7">
        <div className="inline-flex items-center gap-3 font-bold text-[15px] tracking-[-0.01em]">
          <Link href="/#" className="inline-flex items-center gap-3">
            <Image
              src="/profile-picture.jpg"
              alt="Profile picture portfolio"
              width={34}
              height={34}
              className="rounded-full border border-white/40 shadow-[0_0_0_4px_rgba(255,255,255,0.035)]"
            />
            <span>Renzo Viscio</span>
          </Link>
          <span className="hidden sm:inline-flex items-center gap-2.5 ml-2">
            <Link
              href="https://github.com/Zonorg"
              target="_blank"
              className="w-7 h-7 grid place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={13} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/renzo-viscio-b69a13217/"
              target="_blank"
              className="w-7 h-7 grid place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={13} />
            </Link>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
          {generateLink("/", "Home")}
          {generateLink("/#about", "About")}
          {generateLink("/#projects", "Projects")}
          {generateLink("/contact", "Contact")}
          <ThemeSwitch />
        </nav>

        <div className="lg:hidden flex items-center gap-3">
          <ThemeSwitch />
          <button onClick={toggleMenu} aria-label="Open menu">
            <GiHamburgerMenu size={26} />
          </button>
          <motion.div
            className="flex flex-col gap-10 z-30 fixed inset-y-0 right-0 overflow-auto transition-transform duration-200 ease-in-out border-l border-[var(--border)]"
            style={{
              width: "100%",
              height: "100vh",
              background: "var(--bg)",
            }}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            <button onClick={toggleMenu} className="absolute right-4 top-3" aria-label="Close menu">
              <IoClose size={36} />
            </button>
            <div className="flex flex-col gap-6 mt-28 mx-auto">
              {generateLink("/", "Home")}
              {generateLink("/#about", "About")}
              {generateLink("/#projects", "Projects")}
              {generateLink("/contact", "Contact")}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
