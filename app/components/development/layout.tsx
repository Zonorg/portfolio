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

const ProjectCard: React.FC<Development> = ({
  src,
  alt,
  link,
  title,
  description,
}) => (
  <div className="project_card flex flex-col justify-center items-center gap-3">
    <div className="hover:scale-105 transition ease-in-out duration-300 relative">
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
            className="hover:text-pink-600 duration-200"
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

export default function Development() {
  const projects: Development[] = [
    {
      src: "/projects/withsecure.jpg",
      alt: "WithSecure",
      link: "https://www.expertic.ai/withsecure?hs_preview=KNqMqYfH-161188345931",
      title: "WithSecure™",
      description:
        "WithSecure™ Elements: Simplifying cybersecurity, strengthening defenses. Gain real-time visibility and proactive protection across endpoints and cloud applications.",
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
      src: "/projects/lauke.jpg",
      alt: "Lauke",
      link: "https://lauketours.com/",
      title: "Lauke Tours",
      description:
        "Lauketours is designed for the use of tourist guides, where they can manage and plan their own tourist routes.",
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
