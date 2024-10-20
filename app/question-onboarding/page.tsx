import Image from "next/image";
import Link from "next/link";

export default function QuestionOnboarding() {
  return (
    <main className="flex h-screen">
      <div className="w-[400px] bg-[url('/assets/images/lad-quess-bgg-min.png')] bg-cover bg-center">
        <div className="p-8 pt-12">
          <Image src="/assets/images/white-logo.svg" alt="Logo" width={150} height={40} />
        </div>
      </div>
      <div className="flex-grow flex items-center pl-28">
        <div>
          <Image src="/assets/images/question-avatar.png" alt="Avatar" width={48} height={48} className="mb-8" />
          <h4 className="text-4xl font-normal max-w-[575px] mt-8 mb-5">
            Your first step toward a personalised learning experience.
          </h4>
          <p className="text-xl font-normal max-w-[695px] mb-8 mt-5">
            Let&apos;s personalize your learning experience by answering a few questions about your goals, experience, and expertise level. Don&apos;t worry, you can always update your answers later.
          </p>
          <Link href="/questions">
            <button className="bg-[#007AFF] text-white rounded px-8 py-3 text-sm font-light">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
