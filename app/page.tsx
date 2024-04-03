import Projects from "./components/projects/layout";
import Development from "./components/development/layout";

export default function Home() {
  return (
    <main className="w-full py-20 flex flex-col justify-start items-center max-md:py-0">
      <div className="home_content w-2/3 flex flex-col items-start gap-5 max-md:w-11/12 ">
        <div className="animate-translateUp flex flex-col gap-5">
          <span className="uppercase text-pink-600 font-bold text-lg">
            Hello, my name is Renzo
          </span>
          <h1 className="text-8xl font-semibold max-md:text-5xl">
            Web developer
          </h1>
          <p className="text-xl">
            I&apos;m a passionate full stack developer based in Argentina. With
            a focus on websites, I bring a blend of creativity and
            technical expertise to every project.
          </p>
        </div>
        <div id="projects" className="mt-16 w-full">
          <h2 className="font-medium text-3xl">Checkout my work</h2>
          <Projects />
          <h2 className="font-medium text-3xl">In development</h2>
          <Development />
        </div>
      </div>
    </main>
  );
}
