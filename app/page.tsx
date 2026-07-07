import About from "./about/layout";
import ProjectsSection from "@/components/projects-section";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="site-container relative z-10 grid lg:grid-cols-[1.02fr_0.98fr] items-center gap-11 lg:gap-[70px] pt-[52px] lg:pt-[26px] pb-10 lg:min-h-[calc(100svh-74px)]">
        <div className="animate-translateUp">
          <p className="eyebrow">Full stack developer</p>
          <h1 className="hero-title">Web developer</h1>
          <p className="hero-copy">
            I build modern, elegant and functional websites for brands, businesses and digital products.
          </p>
          <div className="flex items-center gap-3.5 mt-[38px] font-sans">
            <Link href="#projects" className="btn btn-primary">
              View projects
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact me
            </Link>
          </div>
        </div>

        <div className="relative animate-translateUp">
          <figure className="image-frame">
            <video
              src="/home-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full min-h-[300px] md:min-h-[420px] object-cover max-lg:hidden"
            />
            <Image
              src="/home-cover.png"
              alt="About me cover"
              width={800}
              height={800}
              className="w-full min-h-[300px] object-cover lg:hidden"
            />
          </figure>
          <div className="floating-card">
            <strong className="block mb-2 text-xl tracking-[-0.02em]">Hello, my name is Renzo</strong>
            <span className="block font-sans text-[13px] leading-[1.55] text-[var(--muted)]">
              Based in Argentina, focused on websites, ecommerce, CMS platforms and custom web solutions.
            </span>
          </div>
        </div>
      </section>

      <About />
      <ProjectsSection />

      <section className="section-padding relative z-10" id="contact">
        <div className="site-container">
          <div className="contact-box">
            <div>
              <span className="section-kicker">Contact</span>
              <h2 className="section-title">Let&apos;s create something.</h2>
              <p className="mt-[22px] section-desc max-w-[560px]">
                Available for websites, ecommerce projects, CMS builds, redesigns and custom development.
              </p>
            </div>
            <div className="grid gap-3 md:justify-self-end w-full md:max-w-[280px]">
              <a href="mailto:nviscio@gmail.com" className="btn btn-primary">
                Send email
              </a>
              <Link href="#projects" className="btn btn-secondary text-center">
                See work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
