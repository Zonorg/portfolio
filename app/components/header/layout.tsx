"use client";
import Image from "next/image";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };

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
        <Link href="#">
          <GiHamburgerMenu size={30} className="lg:hidden" />
        </Link>
        <div className="menu_header flex gap-10 max-lg:hidden">
          <Link
            href="/"
            className={`hover:border-b-4 hover:border-b-pink-600 transition duration-300 ${
              isActive("/")
                ? "border-b-4 border-b-pink-600"
                : "border-b-4 border-transparent"
            }`}
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className={`hover:border-b-4 hover:border-b-pink-600 transition duration-300 ${
              isActive("/projects")
                ? "border-b-4 border-b-pink-600"
                : "border-b-4 border-transparent"
            }`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={`hover:border-b-4 hover:border-b-pink-600 transition duration-300 ${
              isActive("/contact")
                ? "border-b-4 border-b-pink-600"
                : "border-b-4 border-transparent"
            }`}
          >
            Contact
          </Link>
          <Link
            href="about"
            className={`hover:border-b-4 hover:border-b-pink-600 transition duration-300 ${
              isActive("/about")
                ? "border-b-4 border-b-pink-600"
                : "border-b-4 border-transparent"
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
