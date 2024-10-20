"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Questions() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = ["Thinking of starting", "Starting", "Intermediate", "Advanced"];

  const handleOptionChange = (option: string) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <main>
      <Navbar />
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-[700px] px-4">
          <div className="h-1.5 bg-[#E0E0E0] relative mb-12">
            <div className="absolute left-0 h-1.5 bg-[#0A0222] rounded-full w-1/2"></div>
          </div>
          <div className="max-w-[380px] mx-auto">
            <h3 className="text-3xl font-normal mb-5 mt-12 text-[#0A0222]">
              What type of business would you like to start or grow?
            </h3>
            <p className="text-lg font-normal mb-8 text-[#1D1D23]">Select one option below</p>
            <div className="space-y-4 mb-10">
              {options.map((option) => (
                <div key={option} className="relative">
                  <input
                    type="checkbox"
                    id={option}
                    className="hidden peer"
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  <label
                    htmlFor={option}
                    className="flex items-center p-4 pl-12 border border-[#BDBDBD] rounded-lg cursor-pointer bg-white peer-checked:border-[#0A0222] transition-colors"
                  >
                    <span className="ml-2 text-sm">{option}</span>
                  </label>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-[#BDBDBD] rounded-sm peer-checked:bg-[#0A0222] peer-checked:border-[#0A0222] after:content-['✔'] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:opacity-0 peer-checked:after:opacity-100 transition-all"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-10">
              <Link href="/question-onboarding">
                <button className="flex items-center text-[#0A0222] text-sm font-normal">
                  <Image src="/assets/images/back-img.svg" alt="Back" width={20} height={20} className="mr-2" />
                  Back
                </button>
              </Link>
              <Link href="/user-dashboard">
                <button className="bg-[#0A0222] text-white rounded px-8 py-3 text-sm font-light">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
