"use client";

import Image from "next/image";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact_content animate-translateUp">
      <h1 className="text-8xl font-semibold max-md:text-5xl">Contact me</h1>
      <p className="text-xl mt-4 max-md:text-lg">Want to work with me? Let's connect!</p>
      <div className="contact_flex mt-8 flex  items-start w-full max-lg:flex-col">
        <div className="flex  w-full gap-5">
          <a
            href="https://www.linkedin.com/in/renzo-viscio-b69a13217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+5492604676270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:scale-125 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="mt-8">
        <video src="/contact-video.mp4" autoPlay muted loop playsInline className="rounded-xl max-lg:hidden w-1/2" />
        <Image
          src="/contact-cover.png"
          alt="About me cover"
          width={800}
          height={800}
          className="lg:hidden max-lg:w-72"
        />
      </div>
    </div>
  );
}
