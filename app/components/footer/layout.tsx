import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer w-full py-5 flex justify-center">
      <div className="w-2/3 flex justify-between">
        <span className="text-sm">Renzo Viscio</span>
        <div className="social-icons flex gap-5">
          <Link href="https://github.com/Zonorg" target="_blank">
            <FaGithub size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/renzo-viscio-b69a13217/" target="_blank">
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
