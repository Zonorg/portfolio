"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="w-full h-4/5 py-20 flex flex-col justify-start items-center max-md:py-0 max-md:h-3/4">
      <div className="w-2/3 flex flex-col items-center gap-5 max-md:w-11/12">
        <h1 className="animate-translateUp text-8xl font-semibold max-md:text-5xl">Ups!</h1>
        <p className="text-xl mt-10">404 Error. It seems that the page you are looking for does not exist.</p>
        <Link href="/" className="bg-pink-700 font-medium rounded px-4 py-2 hover:bg-pink-600">
          Go back home
        </Link>
      </div>
    </div>
  );
}
