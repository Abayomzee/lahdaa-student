import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <div className="max-w-[1345px] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[600px]">
            <h1 className="text-5xl font-bold text-color1 mb-6">
              Empowering Your Learning Journey
            </h1>
            <p className="text-xl text-color3 mb-8">
              Discover personalized courses tailored to your goals and interests. Start your learning adventure today!
            </p>
            <Link href="/option-to-personalize">
              <button className="bg-color2 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
          <div className="relative w-full max-w-[500px] h-[400px]">
            <Image
              src="/assets/images/overview-card-bg.png"
              alt="Students learning"
              width={500}
              height={400}
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
