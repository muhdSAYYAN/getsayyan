"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { GsapFade } from "@/components/commonui/GsapFade";
import { selfData } from "@/components/Constants/SelfData";
import { mono } from "@/app/font";
import {
  Layout,
  Server,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export default function AboutClient() {
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.2,
          }
        );
      }
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative min-h-screen flex flex-col justify-between overflow-x-hidden text-white pt-32 bg-transparent"
    >
      <Navbar />

      <main className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-center flex-grow w-full pb-24">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center max-w-4xl mb-24 md:mb-32">
          <p className="text-xs md:text-sm tracking-[0.4em] text-neutral-400 uppercase mb-6 inline-block py-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            The Developer Behind the Work
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            ABOUT <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">SAYYAN</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Freelance Full-Stack Developer · {selfData.current_location.city}, {selfData.current_location.state}
          </p>
        </div>

        {/* Who I Am + Shady Profile Photo Section */}
        <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          <GsapFade direction="left" distance={40} className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8">
              WHO <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">I AM</span>
            </h2>
            <div className={`${mono.className} space-y-6 text-neutral-300 text-lg leading-relaxed`}>
              <p>{selfData.bio}</p>
              <p>From high-performance web apps to clinical management systems — every project I take on has one measure of success: does it solve the client&apos;s real problem?</p>
              <ul className="space-y-4 text-base pt-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                  <span>Direct 1-on-1 communication — you work with me, not a project manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                  <span>Clear timelines, honest scoping, and milestone delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                  <span>Clean, documented code following industry SOLID architecture</span>
                </li>
              </ul>
            </div>
          </GsapFade>
          
          <GsapFade direction="right" distance={40} delay={0.2} className="lg:col-span-5 flex flex-col gap-8">
            {/* Shady Dark Profile Photo Card */}
            <div className="relative group w-full p-3 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] hover:border-white/20 transition-all duration-500">
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

        {/* My Journey Section */}
        <div className="w-full mb-32">
          <GsapFade direction="up" delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-16 text-center">
              MY <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">JOURNEY</span>
            </h2>
          </GsapFade>

          <div className="max-w-4xl mx-auto space-y-16">
            {(selfData as any).experience?.map((exp: any, index: number) => (
              <GsapFade key={index} direction="up" delay={0.1 * (index + 1)}>
                <div className="relative pl-10 border-l border-white/10">
                  <div className={`absolute left-[-9px] top-1 w-4 h-4 ${index === 0 ? 'bg-neutral-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'bg-neutral-600'} rounded-full`} />
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <span className={`text-sm tracking-widest ${index === 0 ? 'text-slate-300' : 'text-neutral-500'} font-bold uppercase`}>{exp.role}</span>
                        <h3 className="text-2xl md:text-3xl font-bold">{exp.company}</h3>
                        <p className="text-neutral-500 text-sm font-mono">{exp.location}</p>
                      </div>
                      <span className="text-neutral-500 text-sm font-mono bg-white/5 py-1 px-3 rounded-full border border-white/10">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 text-neutral-400 leading-relaxed">
                    {exp.points.map((point: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GsapFade>
            ))}
          </div>
        </div>

        {/* What I Do Best Section */}
        <div className="w-full mb-32">
          <GsapFade direction="up" delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-16 text-center">
              WHAT I <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">DO BEST</span>
            </h2>
          </GsapFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GsapFade direction="up" delay={0.1} distance={20}>
              <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all h-full group">
                <Layout className="w-12 h-12 text-slate-300 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
                <ul className="space-y-3 text-neutral-500 text-sm font-mono">
                  {selfData.skills.frontend.map(skill => <li key={skill}>• {skill}</li>)}
                </ul>
              </div>
            </GsapFade>

            <GsapFade direction="up" delay={0.2} distance={20}>
              <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all h-full group">
                <Server className="w-12 h-12 text-slate-300 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Backend &amp; Databases</h3>
                <ul className="space-y-3 text-neutral-500 text-sm font-mono">
                  {selfData.skills.backend.map(skill => <li key={skill}>• {skill}</li>)}
                  {selfData.skills.database.map(db => <li key={db}>• {db}</li>)}
                </ul>
              </div>
            </GsapFade>

            <GsapFade direction="up" delay={0.3} distance={20}>
              <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all h-full group">
                <Wrench className="w-12 h-12 text-slate-300 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Tools &amp; Deployment</h3>
                <ul className="space-y-3 text-neutral-500 text-sm font-mono">
                  {selfData.skills.tools.map(tool => <li key={tool}>• {tool}</li>)}
                </ul>
              </div>
            </GsapFade>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="w-full mb-32 border-t border-white/10 pt-32">
          <GsapFade direction="up" delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-16 text-center">
              WHY CHOOSE <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">ME?</span>
            </h2>
          </GsapFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-8">
              <GsapFade direction="left" delay={0.1} distance={20}>
                <div className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Clean, Scalable Code</h4>
                    <p className="text-neutral-400">Following best practices and industry standards for maintainable solutions that grow with your users.</p>
                  </div>
                </div>
              </GsapFade>
              <GsapFade direction="left" delay={0.2} distance={20}>
                <div className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Clear Communication</h4>
                    <p className="text-neutral-400">Regular updates, transparent processes, and proactive collaboration throughout the project lifecycle.</p>
                  </div>
                </div>
              </GsapFade>
            </div>

            <div className="space-y-8">
              <GsapFade direction="right" delay={0.1} distance={20}>
                <div className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">On-Time Delivery</h4>
                    <p className="text-neutral-400">Reliable timelines and milestones, ensuring your product launches when it matters most.</p>
                  </div>
                </div>
              </GsapFade>
              <GsapFade direction="right" delay={0.2} distance={20}>
                <div className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Performance-First Approach</h4>
                    <p className="text-neutral-400">Speed and optimization are integrated from the very first line of code, ensuring a premium user experience.</p>
                  </div>
                </div>
              </GsapFade>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <GsapFade
          direction="up"
          delay={0.2}
          className="w-full text-center border-t border-white/10 pt-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            LET&apos;S WORK <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">TOGETHER</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
            Ready to turn your ideas into reality? Let&apos;s collaborate to build something extraordinary.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="inline-block px-10 py-4 rounded-full border border-white/20 bg-white text-black font-bold tracking-wide hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Get In Touch
          </button>
        </GsapFade>
      </main>

      <Footer />
    </div>
  );
}
