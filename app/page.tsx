import Projects from "./components/projects/layout";
import Development from "./components/development/layout";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-full py-20 flex flex-col justify-start items-center max-md:py-0">
      <div className="home_content w-2/3 flex flex-col items-start gap-5 max-md:w-11/12">
        <div className="animate-translateUp flex flex-col gap-5">
          <h1 className="text-8xl font-semibold max-md:text-5xl">
            Web developer
          </h1>
          <div className="mt-8 flex items-center gap-5 max-md:flex-col-reverse max-md:items-start">
            <video
              src="/home-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl max-lg:hidden w-1/2"
            />
            <Image
              src="/home-cover.png"
              alt="About me cover"
              width={800}
              height={800}
              className="lg:hidden max-lg:w-72"
            />
            <div className="flex flex-col gap-2">
              <span className="uppercase text-pink-600 font-bold text-lg">
                Hello, my name is Renzo
              </span>
              <p className="text-2xl">
                I&apos;m a passionate full stack developer based in Argentina.
                With a focus on websites, I bring a blend of creativity and
                technical expertise to every project.
              </p>
            </div>
          </div>
        </div>
        <div id="projects" className="mt-16 w-full">
          <h2 className="font-medium text-3xl">Checkout my work</h2>
          <Projects />
          <h2 className="font-medium text-3xl">In development</h2>
          <Development />
        </div>
        <div className="home_bottom">
          <Link
            href="/contact"
            className="font-bold text-pink-600 text-xl flex items-center gap-3"
          >
            <span>Let&apos;s create something</span>
            <FaArrowRight className="transition-all mt-1 hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
