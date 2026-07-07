import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="section-padding relative z-10" id="about">
      <div className="site-container">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-[50px] items-end mb-[42px]">
          <div>
            <span className="section-kicker">About me</span>
            <h2 className="section-title">Clean websites with technical precision.</h2>
          </div>
          <p className="section-desc">
            I&apos;m dedicated to pushing the boundaries of web development, combining creativity and technical
            expertise to bring ideas to life effectively.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-9 items-stretch">
          <figure className="image-frame about-image">
            <video
              src="/about-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full min-h-[300px] md:min-h-full object-cover max-lg:hidden"
            />
            <Image
              src="/about-cover.png"
              alt="About me cover"
              width={800}
              height={800}
              className="w-full min-h-[300px] object-cover lg:hidden"
            />
          </figure>

          <div className="grid gap-4">
            <article className="info-card">
              <h3 className="mb-2.5 text-[26px] tracking-[-0.03em]">Education & Skills</h3>
              <p className="text-base leading-[1.62] text-[var(--muted)]">
                I hold a degree in Programming from{" "}
                <Link
                  href="https://www.frsr.utn.edu.ar/"
                  target="_blank"
                  className="text-[var(--accent)] underline font-medium hover:opacity-80"
                >
                  National Technological University
                </Link>{" "}
                and have completed several courses, where I honed my fullstack programming skills. Proficient in{" "}
                <span className="text-[var(--accent)] underline font-medium">JavaScript</span>,{" "}
                <span className="text-[var(--accent)] underline font-medium">React</span> (including{" "}
                <Link
                  href="https://nextjs.org/docs"
                  target="_blank"
                  className="text-[var(--accent)] underline font-medium hover:opacity-80"
                >
                  Next.js
                </Link>
                , using Typescript and React Native),{" "}
                <span className="text-[var(--accent)] underline font-medium">CSS</span> (including SASS and Tailwind),{" "}
                <span className="text-[var(--accent)] underline font-medium">Node.js</span>, and{" "}
                <span className="text-[var(--accent)] underline font-medium">databases</span> like PostgreSQL and
                MongoDB.
              </p>
            </article>

            <article className="info-card">
              <h3 className="mb-2.5 text-[26px] tracking-[-0.03em]">Experience</h3>
              <p className="text-base leading-[1.62] text-[var(--muted)]">
                I&apos;ve worked on various web development projects, from coding fullstack projects with{" "}
                <Link
                  href="https://www.mongodb.com/resources/languages/mern-stack"
                  target="_blank"
                  className="text-[var(--accent)] underline font-medium hover:opacity-80"
                >
                  MERN
                </Link>{" "}
                stack mostly, to redesigning and optimizing websites to creating online stores on platforms like{" "}
                <Link
                  href="https://wordpress.com/"
                  target="_blank"
                  className="text-[var(--accent)] underline font-medium hover:opacity-80"
                >
                  Wordpress
                </Link>{" "}
                and other CMS such as{" "}
                <Link
                  href="https://www.shopify.com/"
                  target="_blank"
                  className="text-[var(--accent)] underline font-medium hover:opacity-80"
                >
                  Shopify
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.hubspot.com/"
                  target="_blank"
                  className="text-[var(--accent)] underline font-medium hover:opacity-80"
                >
                  HubSpot
                </Link>
                .
              </p>
            </article>

            <article className="info-card">
              <h3 className="mb-2.5 text-[26px] tracking-[-0.03em]">Languages & Soft Skills</h3>
              <p className="text-base leading-[1.62] text-[var(--muted)]">
                Fluent in both Spanish and English (C1 level), I bring proactive, responsible, and collaborative
                qualities to every team I work with. My ability to actively listen and empathize with clients helps me
                deliver exceptional results.
              </p>
            </article>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-[26px]" aria-label="Technology stack">
          {["React", "Next.js", "Node.js", "TypeScript", "WordPress", "WooCommerce", "HubSpot", "Shopify"].map(
            (tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
