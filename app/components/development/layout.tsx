import Image from "next/image";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";

interface Development {
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<Development> = ({ src, alt, link, title, description }) => (
  <div className="project_card flex flex-col justify-center items-center gap-3">
    <div className="hover:scale-105 transition ease-in-out duration-300 relative">
      <Image src={src} alt={alt} width={600} height={600} className="object-cover h-60 w-96 border-none rounded-xl" />
      <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
        <Link href={link} target="_blank">
          <IoOpenOutline className="hover:text-pink-600 duration-200" size={35} />
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

export default function Development() {
  const projects: Development[] = [
    {
      src: "/projects/mumblebe.jpg",
      alt: "Mumblebe",
      link: "https://mumblebe.com/",
      title: "Mumblebe",
      description: "Future social network of audios. Connect, create, share, and listen what you love with Mumblebe.",
    },
    {
      src: "/projects/kwsolar.jpg",
      alt: "KwSolar",
      link: "https://cimadigital.com.ar/kwsolar/",
      title: "KwSolar",
      description:
        "KwSolar is a leading provider of solar energy solutions. They offer a wide range of services including solar panels, solar roof tiles, solar water heating, and more.",
    },
    {
      src: "/projects/delete.jpg",
      alt: "Delete Technology",
      link: "https://www.deletetechnology.com/-temporary-slug-bb7af0f4-0669-41f6-ae0e-cd3238fda02f?hs_preview=dMnNoQlr-159659264682",
      title: "Delete Technology",
      description:
        "Delete Technology Group: Experts in secure data erasure. Trusted by governments and organizations worldwide.",
    },
    {
      src: "/projects/quamtum-audio.jpg",
      alt: "Quamtum Audio",
      link: "https://quamtumaudio.com/",
      title: "Quamtum Audio",
      description:
        "Elevate your music experience with Quamtum Personal Audio. High-quality like the Style Pro QA10 Earbuds. Experience the perfect blend of design, quality, and functionality.",
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
