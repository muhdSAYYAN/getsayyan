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
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "App Development",
    description:
      "Crafting native-feel, cross-platform mobile experiences for iOS and Android using React Native.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Odoo Integration",
    description:
      "Custom Odoo module development, API integration, and seamless ERP workflow automation.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Full-featured online stores with payment integration, inventory management, and globally scalable architecture.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Warehouse Management",
    description:
      "Streamlined warehouse & logistics operations systems for accurate inventory tracking and stock flow.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Academic Projects",
    description:
      "Helping students build sophisticated college projects with architecture guidance and clean code.",
    icon: <Layout className="w-6 h-6" />,
  },
];

const tools = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  //   "Angular",
  "Tailwind",
  "Framer Motion",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
];

export default function Services() {
  const router = useRouter();
  return (
    <section
      id="services"
      className="w-full py-24 text-white px-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4">
              Expertise
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8">
              MY <br />
              <span className="block text-6xl md:text-7xl block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-b from-white via-neutral-500 to-neutral-700 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
            <p className="text-white/50 leading-relaxed max-w-xs mb-8">
              I help brands and businesses stand out in the digital age through
              high-end development and thoughtful design.
            </p>

            <button 
              onClick={() => router.push("/services")}
              className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="text-sm font-bold tracking-widest uppercase">View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Service Rows */}
          <div className="lg:col-span-8 flex flex-col border-t border-white/10">
            {services.map((service, index) => (
              <GsapFade
                key={index}
                direction="right"
                distance={20}
                duration={0.6}
                delay={index * 0.1}
                className="group relative py-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4"
              >
                <div className="flex items-center gap-8">
                  <span className="text-white/20 font-mono text-sm">
                    0{index + 1}
                  </span>
                  <div className="p-3 rounded-full border border-white/5 bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-white/40 text-sm max-w-xs md:text-right group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
              </GsapFade>
            ))}

            {/* Tools "Chips" Section */}
            <div className="mt-20">
              <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase mb-8">
                Stack & Tools
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/60 transition-all cursor-default hover:scale-105 hover:border-white/40"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
