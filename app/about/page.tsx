import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full py-20 flex flex-col justify-start items-center max-md:py-0">
      <div className="w-2/3 flex flex-col items-start gap-5 max-md:w-11/12">
        <h1 className="animate-translateUp text-8xl font-semibold max-md:text-5xl">
          About Me
        </h1>
        <div className="w-full mt-8 flex flex-col items-start gap-8 max-md:mb-0">
          <Image
            src="/about-cover.jpg"
            alt="Cover Image"
            width={900}
            height={900}
            className="w-1/2"
          />

          <p className="text-2xl">
            Hi, I&apos;m Renzo Viscio, a passionate web developer based in San
            Rafael, Mendoza, Argentina. With a focus on frontend development, I
            bring a blend of creativity and technical expertise to every
            project.
          </p>
        </div>
        <div className="about_text mt-16 flex flex-col gap-3">
          <h2 className="font-medium text-3xl mt-8">Education & Skills:</h2>
          <p className="text-xl">
            I hold a degree in Programming from{" "}
            <Link
              href="https://www.frsr.utn.edu.ar/"
              target="_blank"
              className="text-teal-500 underline font-medium hover:text-teal-400"
            >
              National Technological University
            </Link>{" "}
            and have completed several courses, where I honed my fullstack
            programming skills. Proficient in{" "}
            <span className="text-teal-500 underline font-medium">
              JavaScript
            </span>
            , <span className="text-teal-500 underline font-medium">React</span>{" "}
            (including{" "}
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              className="text-teal-500 underline font-medium hover:text-teal-400"
            >
              Next.js
            </Link>
            , using Typescript and React Native),{" "}
            <span className="text-teal-500 underline font-medium">CSS</span>{" "}
            (including SASS and Tailwind),{" "}
            <span className="text-teal-500 underline font-medium">Node.js</span>
            , and{" "}
            <span className="text-teal-500 underline font-medium">
              databases
            </span>{" "}
            like PostgreSQL and MongoDB.
          </p>
          <h2 className="font-medium text-3xl mt-8">Experience:</h2>
          <p className="text-xl">
            I've worked on various web development projects, from redesigning
            and optimizing websites to creating online stores on platforms like{" "}
            <Link
              href="https://www.shopify.com/"
              target="_blank"
              className="text-teal-500 underline font-medium hover:text-teal-400"
            >
              Shopify
            </Link>
            .
          </p>
          <h2 className="font-medium text-3xl mt-8">
            {" "}
            Languages & Soft Skills:
          </h2>
          <p className="text-xl">
            Fluent in both Spanish and English (C1 level), I bring proactive,
            responsible, and collaborative qualities to every team I work with.
            My ability to actively listen and empathize with clients helps me
            deliver exceptional results.
          </p>
          <h2 className="font-medium text-3xl mt-8">Looking Forward:</h2>
          <p className="text-xl">
            Excited to continue growing as a developer and tackle new
            challenges. If you're interested in collaboration or have any
            questions, feel free to reach out. Let's create something amazing
            together!
          </p>
        </div>
      </div>
    </div>
  );
}
