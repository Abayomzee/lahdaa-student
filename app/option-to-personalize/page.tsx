"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { IonIcon } from "@ionic/react";
export default function OptionToPersonalize() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <div className="max-w-[1345px] px-5 text-center">
          <h4 className="text-4xl font-normal max-w-[575px] mx-auto">
            Would you like to personalise your learning experience
          </h4>
          <p className="text-xl font-normal mt-12 max-w-[840px] mx-auto">
            Personalizing your learning is key to keeping yourself engaged,
            motivated, and progressing efficiently towards your goals. When you
            customize your education around your interests and learning style, the
            material becomes far more relevant and interesting.
          </p>
          <p className="text-xl font-normal mt-8 max-w-[840px] mx-auto">
            It&apos;s empowering to take active control in shaping your own
            development. No one knows your needs better than you.
          </p>
          <div className="flex justify-center gap-6 mt-12">
            <Link href="/question-onboarding">
              <button className="flex items-center justify-center gap-2 bg-[#007AFF] text-white rounded px-8 py-3 text-sm min-w-[200px]">
                Yes, Let&apos;s Personalise
                <IonIcon name="arrow-forward-circle" className="text-xl"></IonIcon>
              </button>
            </Link>
            <button className="flex items-center justify-center gap-2 border border-black rounded px-8 py-3 text-sm min-w-[200px]">
              No, I do it myself
              <IonIcon name="arrow-forward-circle-outline" className="text-xl"></IonIcon>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
