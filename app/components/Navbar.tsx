"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-12">
      <div className="max-w-[1345px] mx-auto flex justify-between items-center gap-4">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="Logo" width={150} height={40} />
        </Link>
        <div className="flex items-center gap-4">
          <h5 className="text-base font-light">Don&apos;t have an account?</h5>
          <Link href="/option-to-personalize" className="text-base font-medium text-color2">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
