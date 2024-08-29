import Image from "next/image";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";

interface Project {
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<Project> = ({ src, alt, link, title, description }) => (
  <Link href={link} target="_blank">
    <div className="project_card flex flex-col justify-center items-center gap-3 shadow-2xl">
      <div className="hover:scale-105 transition ease-in-out duration-300 relative shadow-2xl">
        <Image src={src} alt={alt} width={600} height={600} className="object-cover h-60 w-96 border-none rounded-xl" />
        <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
          <IoOpenOutline className="hover:text-pink-600 duration-200" size={35} />
          <p>{description}</p>
          <p className="font-medium text-center">{title}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default function Projects() {
  const projects: Project[] = [
    {
      src: "/projects/cima.jpg",
      alt: "Cima Digital",
      link: "https://cimadigital.com.ar",
      title: "Cima Digital",
      description:
        "Cima Digital is a digital agency that offers digital solutions, company for which I currently work. Made with WordPress, Elementor, and Custom Theme.",
    },
    {
      src: "/projects/mendoza-tours.jpg",
      alt: "Mendoza Tours",
      link: "https://mendozatours.com.ar",
      title: "Mendoza Tours",
      description:
        "Website made on WordPress for Mendoza tours. With Elementor, JetEngine, WooCommerce, and Custom Plugins.",
    },
    {
      src: "/projects/bariloche.jpg",
      alt: "Bariloche Tours",
      link: "https://barilochetours.com.ar",
      title: "Bariloche Tours",
      description:
        "Website made on WordPress for Bariloche tours. With Elementor, JetEngine, WooCommerce, and Custom Plugins.",
    },
    {
      src: "/projects/lauke.jpg",
      alt: "Lauke",
      link: "https://lauketours.com/",
      title: "Lauke Tours",
      description:
        "Lauketours is designed for the use of tourist guides, where they can manage and plan their own tourist routes. Made with Wordpress, Elementor. Guides can register and manage their routes.",
    },
    {
      src: "/projects/bleemar.jpg",
      alt: "Bleemar",
      link: "https://bleemar.vercel.app/",
      title: "BleeMar",
      description:
        "Stock control app made with Next.js, Prisma, and MongoDB. A platform that provides an easy-to-use interface for managing inventory, generate shipping labels from Woocommerce webhooks and more. This app was made for the company Bleemar.",
    },
    {
      src: "/projects/expertic.jpg",
      alt: "Expertic",
      link: "https://www.expertic.com.mx/",
      title: "Expertic",
      description:
        "Expertic is a company that offers services and products of cibersecurity to businesses. Made with Hubpot.",
    },
    {
      src: "/projects/withsecure.jpg",
      alt: "WithSecure",
      link: "https://www.expertic.com.mx/withsecure",
      title: "WithSecure™",
      description: "WithSecure™ Elements: Simplifying cybersecurity for bussiness. Made with Hubpot.",
    },
    {
      src: "/projects/sys.jpg",
      alt: "Sys Inmobiliaria",
      link: "https://inmobiliariasys.com.ar/",
      title: "Inmobiliaria Sys",
      description:
        "Fully responsive platform for a real estate agency, designed to showcase properties for sale and rent.",
    },
    {
      src: "/projects/marianabo.jpg",
      alt: "Mariana Bo",
      link: "https://opus.djmarianabo.com/",
      title: "Mariana Bo",
      description: "Dj Mariana Bo's Official Store. Made with Shopify.",
    },
    {
      src: "/projects/bitdefender.jpg",
      alt: "Bitdefender",
      link: "https://www.bitdefender.lat/",
      title: "Bitdefender",
      description: "Bitdefender is a Latvian company that provides security solutions. Made with Shopify.",
    },
    {
      src: "/projects/mano.jpg",
      alt: "Clara de asís",
      link: "https://claradeasis.org.ar/",
      title: "Mano con Mano",
      description:
        "Mano con mano is a non-profit organization that provides free services to help people. Made with Wordpress and Elementor.",
    },
    {
      src: "/projects/control.jpg",
      alt: "Control Match",
      link: "https://controlmatch.com.mx/",
      title: "Control Match",
      description:
        "The platform streamlines freight matching, efficiently connecting clients and providers. Made with Wordpress and Elementor.",
    },
  ];

  return (
    <div className="projects_section py-10 grid grid-cols-3 gap-y-10 justify-items-start max-2xl:grid-cols-2 max-xl:grid-cols-1">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
