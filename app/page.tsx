import Image from "next/image";
import Link from "next/link";

interface ProjectImageProps {
  src: string;
}

function ProjectImage({ src }: ProjectImageProps) {
  return (
    <Image
      className="object-cover h-72 w-60 border-none rounded-2xl hover:scale-105	transition ease-in-out duration-300"
      src={src}
      height={300}
      width={300}
      alt=""
    />
  );
}

export default function Home() {

  // const generateImagePath = (index: number): string => `/project-${index}.jpg`;
  // const totalImages = 3;

  return (
    <main className="w-full py-20 flex flex-col justify-start items-center">
      <div className="home_content w-2/3 flex flex-col items-start gap-5 max-md:w-11/12">
        <div className="animate-translateUp flex flex-col gap-5">
          <span className="uppercase text-pink-600 font-bold text-lg">
            Hello, my name is Renzo
          </span>
          <h1 className="text-8xl font-semibold max-md:text-5xl">
            Web developer
          </h1>
          <p className="text-lg">I&apos;m a front-end developer</p>
        </div>
        <div className="mt-16 w-full">
          <h2 className="font-medium text-3xl">Checkout my projects</h2>
          <div className="projects_section py-10 grid grid-cols-4 gap-x-2 gap-y-12 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center">
            {/* {[...Array(totalImages)].map((_, index) => (
              <ProjectImage key={index} src={generateImagePath(index + 1)} />
            ))} */}
            <Link
              href="/"
              className="project_card flex flex-col h-72 w-60 p-2 border-none rounded-2xl hover:scale-105 transition ease-in-out duration-300 bg-[url('/projects/project-1.jpg')] bg-cover"
            >
              <span className="text-2xl font-semibold">Mano con Mano</span>
            </Link>
            <Link
              href="/"
              className="project_card flex flex-col h-72 w-60 p-2 border-none rounded-2xl hover:scale-105 transition ease-in-out duration-300 bg-[url('/projects/project-1.jpg')] bg-cover"
            >
              <span className="text-2xl font-semibold">Mano con Mano</span>
            </Link>
            <Link
              href="/"
              className="project_card flex flex-col h-72 w-60 p-2 border-none rounded-2xl hover:scale-105 transition ease-in-out duration-300 bg-[url('/projects/project-1.jpg')] bg-cover"
            >
              <span className="text-2xl font-semibold">Mano con Mano</span>
            </Link>
            <Link
              href="/"
              className="project_card flex flex-col h-72 w-60 p-2 border-none rounded-2xl hover:scale-105 transition ease-in-out duration-300 bg-[url('/projects/project-1.jpg')] bg-cover"
            >
              <span className="text-2xl font-semibold">Mano con Mano</span>
            </Link>
            <Link
              href="/"
              className="project_card flex flex-col h-72 w-60 p-2 border-none rounded-2xl hover:scale-105 transition ease-in-out duration-300 bg-[url('/projects/project-1.jpg')] bg-cover"
            >
              <span className="text-2xl font-semibold">Mano con Mano</span>
            </Link>
            <Link
              href="/"
              className="project_card flex flex-col h-72 w-60 p-2 border-none rounded-2xl hover:scale-105 transition ease-in-out duration-300 bg-[url('/projects/project-1.jpg')] bg-cover"
            >
              <span className="text-2xl font-semibold">Mano con Mano</span>
            </Link>
            <Link
              href="/"
              className="project_card flex flex-col h-72 w-60 p-2 border-none rounded-2xl hover:scale-105 transition ease-in-out duration-300 bg-[url('/projects/project-1.jpg')] bg-cover"
            >
              <span className="text-2xl font-semibold">Mano con Mano</span>
            </Link>
            <Link
              href="/"
              className="project_card flex flex-col h-72 w-60 p-2 border-none rounded-2xl hover:scale-105 transition ease-in-out duration-300 bg-[url('/projects/project-1.jpg')] bg-cover"
            >
              <span className="text-2xl font-semibold">Mano con Mano</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
