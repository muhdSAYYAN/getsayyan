"use client";

import React from "react";
import { Code2, Layout, Database, Smartphone, Cpu, Globe, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { GsapFade } from "./GsapFade";

const services = [
  {
    title: "Premium Web Development",
    description:
      "Building high-performance, scalable web applications using modern frameworks like React.js and Next.js.",
    icon: <Code2 className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "App Development",
    description:
      "Crafting native-feel, cross-platform mobile experiences for iOS and Android using React Native.",
    icon: <Smartphone className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "API & Backend Integration",
    description:
      "Custom RESTful API development, third-party service integration, and scalable database workflow automation.",
    icon: <Cpu className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Full-featured online stores with payment integration, inventory management, and globally scalable architecture.",
    icon: <Globe className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Warehouse Management",
    description:
      "Streamlined warehouse & logistics operations systems for accurate inventory tracking and stock flow.",
    icon: <Database className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Academic Projects",
    description:
      "Helping students build sophisticated college projects with architecture guidance and clean code.",
    icon: <Layout className="w-6 h-6 text-slate-300" />,
  },
];

const tools = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
];

export default function Services() {
  const router = useRouter();

  return (
    <section id="services" className="w-full py-24 text-white px-6 bg-transparent">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4 font-semibold">
              Expertise
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none whitespace-nowrap">
              MY <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">SERVICES</span>
            </h2>
          </div>

          <button
            onClick={() => router.push("/services")}
            className="group flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 shrink-0"
          >
            <span className="text-xs font-bold tracking-widest uppercase">View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Services Grid Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <GsapFade
              key={index}
              direction="up"
              distance={30}
              duration={0.6}
              delay={index * 0.08}
              className="h-full"
            >
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 flex flex-col justify-between h-full group backdrop-blur-xl">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                      {service.icon}
                    </div>
                    <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </GsapFade>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="pt-8">
          <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-6 font-mono font-semibold">
            Tech Stack &amp; Frameworks
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono font-medium text-neutral-300 transition-all hover:border-white/40 hover:scale-105"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

