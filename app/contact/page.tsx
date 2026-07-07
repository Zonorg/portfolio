"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="site-container section-padding animate-translateUp relative z-10">
      <div className="grid md:grid-cols-[0.8fr_1fr] gap-[50px] items-end mb-10">
        <div>
          <span className="section-kicker">Contact</span>
          <h1 className="section-title">Contact me</h1>
        </div>
        <p className="section-desc">Want to work with me? Let&apos;s connect!</p>
      </div>

      <div className="contact-box mb-10">
        <div>
          <h2 className="text-[clamp(32px,5vw,52px)] leading-[0.95] tracking-[-0.04em] mb-4">Get in touch</h2>
          <p className="section-desc">
            Reach out through email, LinkedIn or WhatsApp. I&apos;m open to new projects and collaborations.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/renzo-viscio-b69a13217/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-12 h-12 min-h-0 p-0"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://wa.me/+5492604676270"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-12 h-12 min-h-0 p-0"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="mailto:nviscio@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaEnvelope className="mr-2" />
            Send email
          </a>
        </div>
      </div>

      <figure className="image-frame max-w-2xl">
        <video
          src="/contact-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full min-h-[300px] object-cover max-lg:hidden"
        />
        <Image
          src="/contact-cover.png"
          alt="Contact cover"
          width={800}
          height={800}
          className="w-full min-h-[300px] object-cover lg:hidden"
        />
      </figure>

      <div className="mt-8">
        <Link href="/" className="btn btn-secondary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
