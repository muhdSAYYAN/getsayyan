"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/components/commonui/Navbar";
import { Footer } from "@/components/commonui/Footer";
import { GsapFade } from "@/components/commonui/GsapFade";
import {
  Globe,
  ShoppingCart,
  Cpu,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  FileText,
  Code2,
  Rocket,
  Shield,
  Star,
  Zap,
  Tag,
  HeartHandshake,
  Smartphone,
  Box,
  Terminal,
} from "lucide-react";

const detailedServices = [
  {
    id: "web-dev",
    title: "Premium Web Development",
    subtitle: "Your Website, Engineered to Convert",
    description:
      "A slow or outdated website is costing you leads every day. I build high-performance web applications that load fast, rank on Google, and turn visitors into paying clients — built to scale as your business grows.",
    features: [
      "Next.js Server-Side Rendering (SSR)",
      "Core Web Vitals & SEO Optimized",
      "Conversion-Focused UI Design",
      "Seamless API & Payment Integrations",
      "Mobile-First Responsive Layouts",
      "Secure & Scalable Deployment",
    ],
    icon: <Code2 className="w-10 h-10 md:w-14 md:h-14 text-slate-300" />,
    color: "from-slate-500/20 to-transparent",
    borderColor: "border-slate-500/20",
    buttonHover: "hover:bg-white/10",
  },
  {
    id: "app-dev",
    title: "App Development",
    subtitle: "An App Your Customers Will Actually Use",
    description:
      "I build iOS and Android apps focused on one thing: keeping your users engaged. From smooth onboarding to daily-use features, every screen is designed to feel native and perform flawlessly — so your brand stays on their home screen.",
    features: [
      "Cross-Platform iOS & Android",
      "Smooth Native-Feel Animations",
      "Offline-First Architecture",
      "Push Notifications Setup",
      "App Store & Play Store Deployment",
      "Ongoing Maintenance & Updates",
    ],
    icon: <Smartphone className="w-10 h-10 md:w-14 md:h-14 text-slate-300" />,
    color: "from-slate-500/20 to-transparent",
    borderColor: "border-slate-500/20",
    buttonHover: "hover:bg-white/10",
  },
  {
    id: "backend-api",
    title: "API & Backend Systems",
    subtitle: "Connect Your Business Tools & Automate Data",
    description:
      "If your team is juggling multiple tools, manually copying data, or dealing with reporting gaps — you need clean API integrations and backend architecture. I build custom Node.js/Express REST APIs and database workflows so your tools sync automatically.",
    features: [
      "Custom RESTful API Architecture",
      "Third-Party Service & Payment Webhooks",
      "Database Optimization & Migration",
      "Microservices & Serverless Functions",
      "Automated Data Sync Pipelines",
      "Role-Based Access Control & Security",
    ],
    icon: <Cpu className="w-10 h-10 md:w-14 md:h-14 text-slate-300" />,
    color: "from-slate-500/20 to-transparent",
    borderColor: "border-slate-500/20",
    buttonHover: "hover:bg-white/10",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platforms",
    subtitle: "A Store Built to Sell — Not Just Display",
    description:
      "I build e-commerce platforms that handle real traffic, real orders, and real payment flows without crashing or losing data. From catalog management to checkout optimization and inventory sync, your store will be ready to scale the moment you launch.",
    features: [
      "Payment Gateway Integration",
      "Product & Category Management",
      "Order & Invoice Tracking",
      "Abandoned Cart Recovery",
      "Multi-Currency / Multi-Language",
      "Inventory Syncing",
    ],
    icon: <ShoppingCart className="w-10 h-10 md:w-14 md:h-14 text-slate-300" />,
    color: "from-slate-500/20 to-transparent",
    borderColor: "border-slate-500/20",
    buttonHover: "hover:bg-white/10",
  },
  {
    id: "warehouse",
    title: "Warehouse Management",
    subtitle: "Know Exactly What's in Your Warehouse — At All Times",
    description:
      "Inventory errors are expensive. I build custom warehouse management systems that give you real-time visibility into every item — inbound, outbound, and on-shelf — reducing losses, speeding up fulfillment, and eliminating the guesswork from your logistics.",
    features: [
      "Real-Time Stock Tracking",
      "Barcode & Scanner Integration",
      "Purchase Order Management",
      "Multi-Location Syncing",
      "Returns Processing",
      "Audit Trail & Reporting",
    ],
    icon: <Box className="w-10 h-10 md:w-14 md:h-14 text-slate-300" />,
    color: "from-slate-500/20 to-transparent",
    borderColor: "border-slate-500/20",
    buttonHover: "hover:bg-white/10",
  },
  {
    id: "hospital-ms",
    title: "Hospital Management Systems",
    subtitle: "Modern Operations for Modern Healthcare Providers",
    description:
      "Paper-based records and disconnected tools are creating costly gaps in patient care. I build custom hospital and clinic management systems that digitize your patient registration, appointment scheduling, EMR documentation, and billing — giving your staff one unified platform and your patients a faster, smoother experience.",
    features: [
      "Patient Registration & EMR",
      "Appointment Scheduling",
      "Billing & Invoice Management",
      "Department-Wise Workflows",
      "Lab & Pharmacy Integration",
      "Role-Based Staff Access",
    ],
    icon: <Globe className="w-10 h-10 md:w-14 md:h-14 text-slate-300" />,
    color: "from-slate-500/20 to-transparent",
    borderColor: "border-slate-500/20",
    buttonHover: "hover:bg-white/10",
  },
  {
    id: "mentorship",
    title: "Technical Mentorship & Code Review",
    subtitle: "Get Your Project Built Right the First Time",
    description:
      "Whether you're a student building a final-year project or a junior developer looking for senior-level code review, I help you implement clean architecture and professional-grade practices that go beyond just \u201cmaking it work.\u201d",
    features: [
      "Concept Validation & Design",
      "Full Stack Implementation",
      "In-Depth Documentation Review",
      "Clean Code Explanations",
      "Database Modeling",
      "Deployment & Hosting Setup",
    ],
    icon: <GraduationCap className="w-10 h-10 md:w-14 md:h-14 text-slate-300" />,
    color: "from-slate-500/20 to-transparent",
    borderColor: "border-slate-500/20",
    buttonHover: "hover:bg-white/10",
  },
];

const workSteps = [
  {
    title: "Initial Consultation",
    desc: "We discuss your requirements, goals, and project scope.",
    icon: <MessageSquare className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Proposal & Quote",
    desc: "Receive a detailed proposal with timeline and pricing.",
    icon: <FileText className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Development",
    desc: "Regular updates as I build your solution with best practices.",
    icon: <Code2 className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Testing & Delivery",
    desc: "Thorough testing, training, and smooth handover.",
    icon: <Rocket className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Support",
    desc: "Ongoing support and maintenance after launch.",
    icon: <Shield className="w-6 h-6 text-slate-300" />,
  },
];

const additionalServices = [
  {
    title: "API Support & Maintenance",
    desc: "Ongoing technical assistance, database optimization, API version updates, and cloud infrastructure monitoring.",
    icon: <Cpu className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Web Management Assistant",
    desc: "Dedicated website monitoring, security patching, performance scaling, and regular content updates.",
    icon: <Terminal className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Brand Identity & Design",
    desc: "Creative poster design, digital marketing assets, and cohesive branding packages to elevate your presence.",
    icon: <Star className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Dynamic QR Code Solutions",
    desc: "Custom QR code generation for marketing campaigns, product tracking, menus, and digital business footprints.",
    icon: <Tag className="w-6 h-6 text-slate-300" />,
  },
];

const whyMe = [
  {
    title: "Quality Assured",
    desc: "As an expert developer, I deliver clean, maintainable code following strict industry standards.",
    icon: <Star className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Client-Focused",
    desc: "Your satisfaction is my priority. I build transparent logic ensuring your needs are fully met.",
    icon: <HeartHandshake className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Speed & Scale",
    desc: "Using tools like Next.js and React Native ensures efficient development without compromising scaling.",
    icon: <Zap className="w-6 h-6 text-slate-300" />,
  },
  {
    title: "Fair Pricing",
    desc: "I offer transparent, competitive, and highly scalable pricing models for all custom solutions.",
    icon: <Tag className="w-6 h-6 text-slate-300" />,
  },
];

export default function ServicesClient() {
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
          },
        );
      }
    },
    { scope: container },
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
            What I Provide
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            MY <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">SERVICES</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Professional solutions spanning Next.js web applications, immersive
            React Native mobile apps, scalable RESTful API backend systems, and
            global E-Commerce architectures.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-32 w-full">
          {detailedServices.map((svc, idx) => {
            const isLast = idx === detailedServices.length - 1;
            return (
              <GsapFade
                key={svc.id}
                direction="up"
                distance={30}
                duration={0.8}
                delay={0.05 * idx}
                className={`h-full ${isLast ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <div
                  className="relative group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 p-6 md:p-8 h-full backdrop-blur-md hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
                >
                  <div className="flex flex-col gap-5">
                    {/* Icon & Badge Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300 [&_svg]:!w-6 [&_svg]:!h-6">
                        {svc.icon}
                      </div>
                      <span className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase font-bold py-1 px-3 rounded-full border border-white/5 bg-white/[0.02]">
                        {svc.id === "web-dev" ? "Web" : svc.id === "app-dev" ? "Mobile" : svc.id === "backend-api" ? "API" : svc.id === "ecommerce" ? "E-com" : svc.id === "warehouse" ? "WMS" : svc.id === "hospital-ms" ? "HMS" : "Mentorship"}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-1 text-white">
                        {svc.title}
                      </h2>
                      <p className="text-xs text-neutral-400 font-medium tracking-wide">
                        {svc.subtitle}
                      </p>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-2">
                      <h4 className="text-[10px] tracking-[0.15em] text-neutral-500 uppercase mb-3 font-semibold">
                        Core Features
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {svc.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 group/item"
                          >
                            <CheckCircle2 className="w-4 h-4 text-neutral-500 group-hover/item:text-white transition-colors shrink-0 mt-0.5" />
                            <span className="text-neutral-400 group-hover/item:text-neutral-200 transition-colors text-xs leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA button aligned to bottom */}
                  <div className="mt-8 pt-5 border-t border-white/5 flex justify-end">
                    <button
                      onClick={() =>
                        router.push(
                          `/contact?service=${encodeURIComponent(svc.title)}`,
                        )
                      }
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-xs font-semibold transition-all duration-300 bg-white/5 hover:bg-white/10 hover:border-white/30 text-neutral-300 hover:text-white"
                    >
                      Request a Quote <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </GsapFade>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="w-full mb-32">
          <GsapFade direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4">
                ADDITIONAL <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">CAPABILITIES</span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Providing ongoing support, branding, and technical
                micro-services to complete your digital ecosystem.
              </p>
            </div>
          </GsapFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => (
              <GsapFade
                key={i}
                direction="up"
                delay={0.1 * i}
                distance={20}
                className="relative"
              >
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all h-full">
                  <div className="mb-6 bg-white/5 w-14 h-14 rounded-full flex items-center justify-center border border-white/10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </GsapFade>
            ))}
          </div>
        </div>

        {/* How We Work Together */}
        <div className="w-full mb-32">
          <GsapFade direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4">
                HOW WE <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">WORK TOGETHER</span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                A seamless, transparent process designed to turn your ideas into
                digital reality.
              </p>
            </div>
          </GsapFade>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workSteps.map((step, i) => (
              <GsapFade
                key={i}
                direction="up"
                delay={0.1 * i}
                distance={20}
                className="relative"
              >
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all h-full">
                  <div className="mb-4 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center border border-white/10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.desc}</p>
                </div>
              </GsapFade>
            ))}
          </div>
        </div>

        {/* Why Work With Me */}
        <div className="w-full mb-32">
          <GsapFade direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4">
                WHY WORK <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">WITH ME?</span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Every project is handled with precision, care, and a focus on
                long-term success.
              </p>
            </div>
          </GsapFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyMe.map((item, i) => (
              <GsapFade
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1 * i}
                distance={30}
              >
                <div className="flex gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
                  <div className="shrink-0 pt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </GsapFade>
            ))}
          </div>
        </div>

        {/* Bottom CTA to contact with ample bottom padding so footer never touches */}
        <GsapFade
          direction="up"
          delay={0.2}
          className="w-full text-center border-t border-white/10 pt-20 pb-24 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            READY TO <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">START?</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
            Every project is unique. Let&apos;s get in touch for a detailed quote
            tailored to your exact needs.
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
