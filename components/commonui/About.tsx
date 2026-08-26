"use client";

import Image from "next/image";
import { selfData } from "@/components/Constants/SelfData";
import { mono } from "@/app/font";
import { useRouter } from "next/navigation";
import { GsapFade } from "./GsapFade";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const About = () => {
  const router = useRouter();

  return (
    <section id="about" className="w-full py-24 text-white px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4 font-semibold">
              Behind The Code
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none">
              ABOUT <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">MYSELF</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-neutral-400 text-sm md:text-base max-w-md leading-relaxed">
              Front-End Focused Full-Stack Developer with 3+ years of experience building scalable, high-performance web applications.
            </p>

            <button
              onClick={() => router.push("/about")}
              className="group shrink-0 flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <span className="text-xs font-bold tracking-widest uppercase">My Full Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE: Bio & Skills */}
          <GsapFade direction="up" distance={40} duration={0.8} className="lg:col-span-7 space-y-8">
            <p className={`${mono.className} text-neutral-300 text-lg leading-relaxed`}>
              {selfData.bio}
            </p>

            {/* Quote */}
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed border-l-2 border-white/20 pl-6 italic">
              &ldquo;Programming is not just about writing code; it&apos;s about
              engineering solutions that stand the test of time and scale with
              your vision.&rdquo;
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm tracking-widest text-neutral-400 font-mono pt-4 border-t border-white/5">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                Scalable Architecture
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                Clean UI &amp; UX
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                Performance First
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                REST API Design
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                Agile Workflow
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                MERN Stack Systems
              </div>
            </div>
          </GsapFade>

          {/* RIGHT SIDE: Shady Dark Profile Photo Card */}
          <GsapFade
            direction="right"
            distance={40}
            duration={0.9}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-sm p-3 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] hover:border-white/20 transition-all duration-700">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
                <Image
                  src="/images/sayyan-profile-pic.jpeg"
                  alt="Muhammed Sayyan E"
                  fill
                  unoptimized
                  className="object-cover object-top grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-95 transition-all duration-700 ease-out"
                />
                {/* Dark Moody Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 opacity-80" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight uppercase">
                      Muhammed Sayyan E
                    </h4>
                    <p className="text-[10px] text-white/50 font-mono tracking-widest uppercase">
                      Full-Stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GsapFade>
        </div>
      </div>
    </section>
  );
};

export default About;
