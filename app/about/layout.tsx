import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full py-20 flex flex-col justify-start items-center max-md:py-0">
      <div className="about_content" id="about">
        <h1 className="animate-translateUp text-right text-8xl font-semibold max-md:text-5xl max-md:ml-0">
          About Me
        </h1>
        <div className="animate-translateUp w-full mt-8 flex items-center gap-5 max-md:flex-col max-md:items-start">
          <p className="text-2xl">
            I&apos;m dedicated to pushing the boundaries of web development,
            leveraging my creativity and expertise to bring ideas to life
            effectively.
          </p>
          <video
            src="/about-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl max-lg:hidden w-1/2"
          />
          <Image
            src="/about-cover.png"
            alt="About me cover"
            width={800}
            height={800}
            className="lg:hidden max-lg:w-72"
          />
        </div>
        <div className="about_text mt-16 flex flex-col gap-3">
          <h2 className="font-medium text-3xl mt-8">Education & Skills:</h2>
          <p className="text-xl">
            I hold a degree in Programming from{" "}
            <Link
              href="https://www.frsr.utn.edu.ar/"
              target="_blank"
              className="text-pink-600 underline font-medium hover:text-pink-500"
            >
              National Technological University
            </Link>{" "}
            and have completed several courses, where I honed my fullstack
            programming skills. Proficient in{" "}
            <span className="text-pink-600 underline font-medium">
              JavaScript
            </span>
            , <span className="text-pink-600 underline font-medium">React</span>{" "}
            (including{" "}
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              className="text-pink-600 underline font-medium hover:text-pink-500"
            >
              Next.js
            </Link>
            , using Typescript and React Native),{" "}
            <span className="text-pink-600 underline font-medium">CSS</span>{" "}
            (including SASS and Tailwind),{" "}
            <span className="text-pink-600 underline font-medium">Node.js</span>
            , and{" "}
            <span className="text-pink-600 underline font-medium">
              databases
            </span>{" "}
            like PostgreSQL and MongoDB.
          </p>
          <h2 className="font-medium text-3xl mt-8">Experience:</h2>
          <p className="text-xl">
            I&apos;ve worked on various web development projects, from
            redesigning and optimizing websites to creating online stores on
            platforms like{" "}
            <Link
              href="https://www.shopify.com/"
              target="_blank"
              className="text-pink-600 underline font-medium hover:text-pink-500"
            >
              Shopify
            </Link>{" "}
            and other CMS such as{" "}
            <Link
              href="https://wordpress.com/"
              target="_blank"
              className="text-pink-600 underline font-medium hover:text-pink-500"
            >
              Wordpress
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.hubspot.com/"
              target="_blank"
              className="text-pink-600 underline font-medium hover:text-pink-500"
            >
              HubSpot
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
            challenges. If you&apos;re interested in collaboration or have any
            questions, feel free to{" "}
            <Link
              href="/contact"
              className="text-pink-600 underline font-medium hover:text-pink-500"
            >
              reach out
            </Link>
            . Let&apos;s create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}
