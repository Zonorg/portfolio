"use client";
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";

export const ProjectCard = ({ src, alt, link, title, description }: IProject) => (
  <Link href={link} target="_blank" className="text-center flex flex-col gap-2">
    <div className="project_card flex flex-col justify-center items-center gap-3">
      <div className="hover:scale-105 transition ease-in-out duration-300 relative">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={600}
          className="object-cover h-60 w-96 border rounded-xl dark:border-none"
        />
        <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
          <IoOpenOutline className="hover:text-pink-600 duration-200 text-white" size={35} />
          {/* <p className="text-white">{description}</p> */}
          <p className="font-medium text-center text-white">{title}</p>
        </div>
      </div>
    </div>
    <h3 className="text-lg font-semibold hover:text-pink-600 transition">{title}</h3>
  </Link>
);
