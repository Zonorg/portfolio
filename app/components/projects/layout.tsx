import Image from "next/image";
import Link from "next/link";
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

export default function Projects() {
  return (
    <div className="projects_section py-10 grid grid-cols-3 gap-x-1 gap-y-12 max-2xl:grid-cols-2 max-xl:grid-cols-1 max-xl:justify-items-center">
      <div className="project_card flex flex-col justify-center items-center gap-3">
        <div className="hover:scale-105 transition ease-in-out duration-300 relative">
          <Image
            src="/projects/mendoza-tours.jpg"
            alt="Mendoza Tours"
            width={600}
            height={600}
            className="object-cover h-60 w-96 border-none rounded-t-xl"
          />
          <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
            <Link href="https://mendozatours.com.ar" target="_blank">
              <IoOpenOutline
                className="hover:text-zinc-900 duration-200"
                size={35}
              />
            </Link>

            <p>
              Experience the best of Mendoza with Lauke Tours. From thrilling
              adventures to leisurely wine tours, we tailor unforgettable
              experiences just for you. Plan your trip today!
            </p>
            <Link href="/projects/mendoza-tours" className="hover:font-bold">
              Read more
            </Link>
          </div>
          <div className="bg-zinc-900 w-96 p-2 rounded-b-xl">
            <p className="font-medium text-center">Mendoza Tours</p>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="project_card flex flex-col justify-center items-center gap-3">
        <div className="hover:scale-105 transition ease-in-out duration-300 relative">
          <Image
            src="/projects/quamtum-audio.jpg"
            alt="Quamtum Audio"
            width={600}
            height={600}
            className="object-cover h-60 w-96 border-none rounded-t-xl"
          />
          <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
            <Link href="https://quamtumaudio.com/" target="_blank">
              <IoOpenOutline
                className="hover:text-zinc-900 duration-200"
                size={35}
              />
            </Link>

            <p>
              Elevate your music experience with Quamtum Personal Audio.
              High-quality like the Style Pro QA10 Earbuds. Experience the
              perfect blend of design, quality, and functionality.
            </p>
            <Link href="/projects/quamtum-audio" className="hover:font-bold">
              Read more
            </Link>
          </div>
          <div className="bg-zinc-900 w-96 p-2 rounded-b-xl">
            <p className="font-medium text-center">Quamtum Audio</p>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="project_card flex flex-col justify-center items-center gap-3">
        <div className="hover:scale-105 transition ease-in-out duration-300 relative">
          <Image
            src="/projects/marianabo.jpg"
            alt="Mariana Bo"
            width={600}
            height={600}
            className="object-cover h-60 w-96 border-none rounded-t-xl"
          />
          <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
            <Link href="https://opus.djmarianabo.com/" target="_blank">
              <IoOpenOutline
                className="hover:text-zinc-900 duration-200"
                size={35}
              />
            </Link>

            <p>Dj Mariana Bo`&apos;`s Official Store</p>
            <Link href="/projects/marianabo" className="hover:font-bold">
              Read more
            </Link>
          </div>
          <div className="bg-zinc-900 w-96 p-2 rounded-b-xl">
            <p className="font-medium text-center">Mariana Bo</p>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="project_card flex flex-col justify-center items-center gap-3">
        <div className="hover:scale-105 transition ease-in-out duration-300 relative">
          <Image
            src="/projects/saldo.jpg"
            alt="Saldo"
            width={600}
            height={600}
            className="object-cover h-60 w-96 border-none rounded-t-xl"
          />
          <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
            <Link
              href="https://zg-currency-caculator.vercel.app/"
              target="_blank"
            >
              <IoOpenOutline
                className="hover:text-zinc-900 duration-200"
                size={35}
              />
            </Link>

            <p>Currency Calculator</p>
            <Link href="/projects/saldo" className="hover:font-bold">
              Read more
            </Link>
          </div>
          <div className="bg-zinc-900 w-96 p-2 rounded-b-xl">
            <p className="font-medium text-center">Saldo</p>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="project_card flex flex-col justify-center items-center gap-3">
        <div className="hover:scale-105 transition ease-in-out duration-300 relative">
          <Image
            src="/projects/mano.jpg"
            alt="Clara de asís"
            width={600}
            height={600}
            className="object-cover h-60 w-96 border-none rounded-t-xl"
          />
          <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
            <Link href="https://cimadigital.com.ar/mm/" target="_blank">
              <IoOpenOutline
                className="hover:text-zinc-900 duration-200"
                size={35}
              />
            </Link>

            <p>
              Through spiritual connection and solidarity, mano con mano impact
              communities through workshops, collaborations, and sustainable
              projects, fostering personal growth and societal well-being.
            </p>
            <Link href="/projects/mano-con-mano" className="hover:font-bold">
              Read more
            </Link>
          </div>
          <div className="bg-zinc-900 w-96 p-2 rounded-b-xl">
            <p className="font-medium text-center">Mano con Mano</p>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="project_card flex flex-col justify-center items-center gap-3">
        <div className="hover:scale-105 transition ease-in-out duration-300 relative">
          <Image
            src="/projects/withsecure.jpg"
            alt="Withsecure"
            width={600}
            height={600}
            className="object-cover h-60 w-96 border-none rounded-t-xl"
          />
          <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
            <Link
              href="https://www.expertic.ai/withsecure?hs_preview=KNqMqYfH-161188345931"
              target="_blank"
            >
              <IoOpenOutline
                className="hover:text-zinc-900 duration-200"
                size={35}
              />
            </Link>

            <p>
              WithSecure™ Elements: Simplifying cybersecurity, strengthening
              defenses. Gain real-time visibility and proactive protection
              across endpoints and cloud applications.
            </p>
            <Link href="/projects/mano-con-mano" className="hover:font-bold">
              Read more
            </Link>
          </div>
          <div className="bg-zinc-900 w-96 p-2 rounded-b-xl">
            <p className="font-medium text-center">Withsecure ™</p>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="project_card flex flex-col justify-center items-center gap-3">
        <div className="hover:scale-105 transition ease-in-out duration-300 relative">
          <Image
            src="/projects/delete.jpg"
            alt="Withsecure"
            width={600}
            height={600}
            className="object-cover h-60 w-96 border-none rounded-t-xl"
          />
          <div className="absolute inset-0 opacity-0 px-2 gap-3 hover:opacity-100 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl">
            <Link href="https://www.deletetechnology.com/" target="_blank">
              <IoOpenOutline
                className="hover:text-zinc-900 duration-200"
                size={35}
              />
            </Link>
            <p>
              Delete Technology Group: Experts in secure data erasure. Trusted
              by governments and organizations worldwide.
            </p>
            <Link
              href="/projects/delete-technology"
              className="hover:font-bold"
            >
              Read more
            </Link>
          </div>
          <div className="bg-zinc-900 w-96 p-2 rounded-b-xl">
            <p className="font-medium text-center">Delete Technology</p>
          </div>
        </div>
      </div>
      {/* Card */}
    </div>
  );
}
