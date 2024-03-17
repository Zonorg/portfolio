import Image from "next/image";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="header w-full flex justify-center">
      <div className="header_inner_container w-2/3 flex justify-between items-center py-10 max-md:w-11/12">
        <Link href="/" className="header_brand flex items-center gap-2">
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
        <div className="menu_header flex gap-10 max-lg:hidden">
          <Link href="#" className="hover:underline">
            Home
          </Link>
          <Link href="#" className="hover:underline">
            Projects
          </Link>
          <Link href="#" className="header_navigation">
            Contact
          </Link>
          <Link href="#" className="header_navigation">
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
