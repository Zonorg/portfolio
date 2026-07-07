"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="site-container section-padding relative z-10 flex flex-col items-center text-center gap-5">
      <h1 className="animate-translateUp section-title">Ups!</h1>
      <p className="section-desc max-w-xl">404 Error. It seems that the page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary">
        Go back home
      </Link>
    </div>
  );
}
