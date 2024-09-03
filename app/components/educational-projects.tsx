import Image from "next/image";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";

interface Educational {
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<Educational> = ({ src, alt, link, title, description }) => (
  <Link href={link} target="_blank">
    <div className="project_card flex flex-col justify-center items-center gap-3">
      <div className="hover:scale-105 transition ease-in-out duration-300 relative">
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

export default function Educational() {
  const projects: Educational[] = [
    {
      src: "/projects/rickandmorty.jpg",
      alt: "Rick-and-Morty",
      link: "https://rick-and-morty-client-cyan.vercel.app/",
      title: "Rick and Morty",
      description: "A Rick and Morty API that allows you to search for characters and information about them.",
    },
    {
      src: "/projects/saldo.jpg",
      alt: "Saldo",
      link: "https://zg-currency-caculator.vercel.app/",
      title: "Saldo",
      description: "Currency Calculator",
    },
    {
      src: "/projects/electroshop.jpg",
      alt: "Electroshop",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7061449669389787136/",
      title: "Electroshop",
      description:
        "E-commerce platform that allows users to conduct accurate searches, compare products and process secure transactions from the comfort of their home or office.",
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
