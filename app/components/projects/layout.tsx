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

const ProjectCard: React.FC<Project> = ({
  src,
  alt,
  link,
  title,
  description,
}) => (
  <div className="project_card flex flex-col justify-center items-center gap-3 shadow-2xl">
    <div className="hover:scale-105 transition ease-in-out duration-300 relative shadow-2xl">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className="object-cover h-60 w-96 border-none rounded-xl"
      />
      <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
        <Link href={link} target="_blank">
          <IoOpenOutline
            className="hover:text-zinc-900 duration-200"
            size={35}
          />
        </Link>
        <p>{description}</p>
        <p className="font-medium text-center">{title}</p>
        {/* <Link href={link} className="hover:font-bold">
          Read more
        </Link> */}
      </div>
    </div>
  </div>
);

export default function Projects() {
  const projects: Project[] = [
    {
      src: "/projects/mendoza-tours.jpg",
      alt: "Mendoza Tours",
      link: "https://mendozatours.com.ar",
      title: "Mendoza Tours",
      description:
        "Experience the best of Mendoza with Lauke Tours. From thrilling adventures to leisurely wine tours, we tailor unforgettable experiences just for you. Plan your trip today!",
    },
    {
      src: "/projects/quamtum-audio.jpg",
      alt: "Quamtum Audio",
      link: "https://quamtumaudio.com/",
      title: "Quamtum Audio",
      description:
        "Elevate your music experience with Quamtum Personal Audio. High-quality like the Style Pro QA10 Earbuds. Experience the perfect blend of design, quality, and functionality.",
    },
    {
      src: "/projects/marianabo.jpg",
      alt: "Mariana Bo",
      link: "https://opus.djmarianabo.com/",
      title: "Mariana Bo",
      description: "Dj Mariana Bo's Official Store",
    },
    {
      src: "/projects/bitdefender.jpg",
      alt: "Bitdefender",
      link: "https://www.bitdefender.lat/",
      title: "Bitdefender",
      description:
        "Global cybersecurity leader since 2001, protecting 500M+ systems in 150+ countries. Explore the offerings for protection, enhance business security, discover technology, or get support.",
    },
    {
      src: "/projects/mano.jpg",
      alt: "Clara de asís",
      link: "https://cimadigital.com.ar/mm/",
      title: "Mano con Mano",
      description:
        "Through spiritual connection and solidarity, mano con mano impact communities through workshops, collaborations, and sustainable projects, fostering personal growth and societal well-being.",
    },
    {
      src: "/projects/control.jpg",
      alt: "Control Match",
      link: "https://controlmatch.com.mx/",
      title: "Control Match",
      description:
        "The platform streamlines freight matching, efficiently connecting clients and providers. Using advanced algorithms, it links loads with ideal units in real-time, providing digital delivery evidence and seamless API integration.",
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
