"use client";
import Image from "next/image";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
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
      className={`text-lg max-lg:text-3xl font-medium hover:border-b-4 hover:border-b-pink-600 transition duration-300 ${
        isActive(href)
          ? "border-b-4 border-b-pink-600"
          : "border-b-4 border-transparent"
      }`}
    >
      {text}
    </Link>
  );

  return (
    <header className="header w-full flex justify-center">
      <div className="header_inner_container w-2/3 flex justify-between items-center py-10 max-md:w-11/12">
        <Link href="/" className="header_brand flex items-center gap-x-2">
          <Image
            src="/profile-picture.png"
            alt="Profile picture portfolio"
            width={45}
            height={45}
            className="border-none rounded-full"
          />
          <span className="font-semibold hover:text-pink-600">
            Renzo Viscio
          </span>
          <RiVerifiedBadgeFill size={25} color="#1da1f2" />
        </Link>
        <div className="hidden lg:flex gap-10">
          {generateLink("/", "Home")}
          {generateLink("/#about", "About")}{" "}
          {generateLink("/#projects", "Projects")}
          {generateLink("/contact", "Contact")}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <GiHamburgerMenu size={30} />
          </button>
          <motion.div
            className="menu_header flex flex-col gap-10 z-10 bg-black fixed inset-y-0 right-0 transform translate-x-full overflow-auto transition-transform duration-200 ease-in-out"
            style={{ width: "100%" }}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            <button onClick={toggleMenu}>
              <IoClose size={40} className="absolute right-0 mt-10 mr-2" />
            </button>
            <div className="flex flex-col gap-5 mt-32 mx-auto">
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
