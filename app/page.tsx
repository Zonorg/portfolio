import Projects from "./components/projects/layout";

export default function Home() {
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
          <h2 className="font-medium text-3xl">Checkout my work</h2>
          <Projects />
        </div>
      </div>
    </main>
  );
}
