"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { GsapFade } from "@/components/commonui/GsapFade";
import { selfData } from "@/components/Constants/SelfData";
import { mono } from "@/app/font";
import {
  Code2,
  Layout,
  Database,
  Terminal,
  Server,
  Wrench,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Briefcase
} from "lucide-react";

export default function AboutPage() {
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
      className="relative min-h-screen overflow-x-hidden text-white pt-32 pb-24"
    >
      <Navbar />

      <main className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center max-w-4xl mb-24 md:mb-32">
          <p className="text-xs md:text-sm tracking-[0.4em] text-neutral-400 uppercase mb-6 inline-block py-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            Behind The Code
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8">
            ABOUT
            <span className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent italic pb-2">
              {selfData.devname.toUpperCase()}
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {selfData.jobTitle} | {selfData.current_location.city}, {selfData.current_location.state}
          </p>
        </div>

        {/* Who I Am Section */}
        <div className="w-full grid lg:grid-cols-2 gap-16 items-start mb-32">
          <GsapFade direction="left" distance={40}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Who I Am</h2>
            <div className={`${mono.className} space-y-6 text-neutral-300 text-lg leading-relaxed`}>
              <p>{selfData.bio}</p>
              <p>Based in {selfData.current_location.city}, India — {selfData.name} helps businesses and individuals turn ideas into powerful digital products. From modern web and mobile apps to scalable backend systems and Odoo integrations, I focus on building fast, reliable, and user-friendly solutions that drive real growth.</p>
            </div>
          </GsapFade>
          
          <GsapFade direction="right" distance={40} delay={0.2}>
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 flex flex-col gap-8 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                <span className="text-xs tracking-[0.2em] text-white/40 uppercase">Location</span>
                <span className="text-xl font-bold">{selfData.current_location.city}, {selfData.current_location.state}, India</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs tracking-[0.2em] text-white/40 uppercase">Email</span>
                <a href={`mailto:${selfData.email}`} className="text-xl font-bold hover:text-white/70 transition-colors">{selfData.email}</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs tracking-[0.2em] text-white/40 uppercase">WhatsApp</span>
                <a href={`https://wa.me/${selfData.phone.replace(/\D/g, '')}`} className="text-xl font-bold hover:text-white/70 transition-colors">{selfData.phone}</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs tracking-[0.2em] text-white/40 uppercase">LinkedIn</span>
                <a href={`https://linkedin.com/in/${selfData.socials_username.linkedin}`} className="text-xl font-bold hover:text-white/70 transition-colors">Connect with me</a>
              </div>
            </div>
          </GsapFade>
        </div>

        {/* My Journey Section */}
        <div className="w-full mb-32">
          <GsapFade direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">My Journey</h2>
          </GsapFade>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Experience */}
            {(selfData as any).experience?.map((exp: any, index: number) => (
              <GsapFade key={index} direction="up" delay={0.1 * (index + 1)}>
                <div className="relative pl-10 border-l border-white/10">
                  <div className={`absolute left-[-9px] top-1 w-4 h-4 ${index === 0 ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-neutral-600'} rounded-full`} />
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <span className={`text-sm tracking-widest ${index === 0 ? 'text-blue-400' : 'text-neutral-500'} font-bold uppercase`}>{exp.role}</span>
                        <h3 className="text-2xl md:text-3xl font-bold">{exp.company}</h3>
                        <p className="text-neutral-500 text-sm font-mono">{exp.location}</p>
                      </div>
                      <span className="text-neutral-500 text-sm font-mono bg-white/5 py-1 px-3 rounded-full border border-white/10">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 text-neutral-400 leading-relaxed">
                    {exp.points.map((point: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-neutral-600 shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GsapFade>
            ))}

            {/* Education */}
            {(selfData as any).education?.map((edu: any, index: number) => (
              <GsapFade key={index} direction="up" delay={0.1 * (index + 1)}>
                <div className="relative pl-10 border-l border-white/10">
                  <div className="absolute left-[-9px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <span className="text-sm tracking-widest text-purple-400 font-bold uppercase">Education</span>
                        <h3 className="text-2xl md:text-3xl font-bold">{edu.degree}</h3>
                        <p className="text-neutral-500 text-sm font-mono">{edu.institution}</p>
                      </div>
                      <span className="text-neutral-500 text-sm font-mono bg-white/5 py-1 px-3 rounded-full border border-white/10">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </GsapFade>
            ))}
          </div>
        </div>

        {/* What I Do Best Section */}
        <div className="w-full mb-32">
          <GsapFade direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">What I Do Best</h2>
          </GsapFade>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GsapFade direction="up" delay={0.1} distance={20}>
              <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all h-full group">
                <Layout className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
                <ul className="space-y-3 text-neutral-500 text-sm font-mono">
                  {selfData.skills.frontend.map(skill => <li key={skill}>• {skill}</li>)}
                </ul>
              </div>
            </GsapFade>

            <GsapFade direction="up" delay={0.2} distance={20}>
              <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all h-full group">
                <Server className="w-12 h-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Backend & APIs</h3>
                <ul className="space-y-3 text-neutral-500 text-sm font-mono">
                  {selfData.skills.backend.map(skill => <li key={skill}>• {skill}</li>)}
                </ul>
              </div>
            </GsapFade>

            <GsapFade direction="up" delay={0.3} distance={20}>
              <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all h-full group">
                <Wrench className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Tools & Others</h3>
                <ul className="space-y-3 text-neutral-500 text-sm font-mono">
                  {selfData.skills.tools.map(tool => <li key={tool}>• {tool}</li>)}
                  <li>• SQL Database</li>
                </ul>
              </div>
            </GsapFade>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="w-full mb-32 border-t border-white/10 pt-32">
          <GsapFade direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Why Choose Me?</h2>
          </GsapFade>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-8">
              <GsapFade direction="left" delay={0.1} distance={20}>
                <div className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Clean, Scalable Code</h4>
                    <p className="text-neutral-400">Following best practices and industry standards for maintainable solutions that grow with your users.</p>
                  </div>
                </div>
              </GsapFade>
              <GsapFade direction="left" delay={0.2} distance={20}>
                <div className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
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
                  <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">On-Time Delivery</h4>
                    <p className="text-neutral-400">Reliable timelines and milestones, ensuring your product launches when it matters most.</p>
                  </div>
                </div>
              </GsapFade>
              <GsapFade direction="right" delay={0.2} distance={20}>
                <div className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Performance-First Approach</h4>
                    <p className="text-neutral-400">Speed and optimization are integrated from the very first line of code, ensuring a premium user experience.</p>
                  </div>
                </div>
              </GsapFade>
            </div>
          </div>
        </div>

        {/* Let's Work Together CTA */}
        <GsapFade
          direction="up"
          delay={0.2}
          className="w-full text-center border-t border-white/10 pt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Work Together
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
