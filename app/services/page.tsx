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
  Truck,
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
    icon: <Code2 className="w-10 h-10 md:w-14 md:h-14 text-blue-400" />,
    color: "from-blue-500/20 to-transparent",
    borderColor: "border-blue-500/20",
    buttonHover: "hover:bg-blue-500/20",
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
    icon: <Smartphone className="w-10 h-10 md:w-14 md:h-14 text-purple-400" />,
    color: "from-purple-500/20 to-transparent",
    borderColor: "border-purple-500/20",
    buttonHover: "hover:bg-purple-500/20",
  },
  {
    id: "odoo",
    title: "Odoo Integration",
    subtitle: "Stop Managing Your Business in Spreadsheets",
    description:
      "If your team is juggling multiple tools, manually copying data, or dealing with reporting gaps — you need an integrated ERP. I customize and connect Odoo to your existing workflows, automating the repetitive tasks so your team can focus on what actually matters.",
    features: [
      "Custom Module Development",
      "Third-Party API Integrations",
      "Workflow Automation",
      "Data Migration & Upgrades",
      "Accounting & Sales Modules",
      "Custom Dashboard Analytics",
    ],
    icon: <Cpu className="w-10 h-10 md:w-14 md:h-14 text-emerald-400" />,
    color: "from-emerald-500/20 to-transparent",
    borderColor: "border-emerald-500/20",
    buttonHover: "hover:bg-emerald-500/20",
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
    icon: (
      <ShoppingCart className="w-10 h-10 md:w-14 md:h-14 text-orange-400" />
    ),
    color: "from-orange-500/20 to-transparent",
    borderColor: "border-orange-500/20",
    buttonHover: "hover:bg-orange-500/20",
  },
  {
    id: "warehouse",
    title: "Warehouse Management",
    subtitle: "Know Exactly What’s in Your Warehouse — At All Times",
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
    icon: <Box className="w-10 h-10 md:w-14 md:h-14 text-yellow-400" />,
    color: "from-yellow-500/20 to-transparent",
    borderColor: "border-yellow-500/20",
    buttonHover: "hover:bg-yellow-500/20",
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
    icon: <Globe className="w-10 h-10 md:w-14 md:h-14 text-rose-400" />,
    color: "from-rose-500/20 to-transparent",
    borderColor: "border-rose-500/20",
    buttonHover: "hover:bg-rose-500/20",
  },
  {
    id: "mentorship",
    title: "Technical Mentorship & Code Review",
    subtitle: "Get Your Project Built Right the First Time",
    description:
      "Whether you’re a student building a final-year project or a junior developer looking for senior-level code review, I help you implement clean architecture and professional-grade practices that go beyond just “making it work.”",
    features: [
      "Concept Validation & Design",
      "Full Stack Implementation",
      "In-Depth Documentation Review",
      "Clean Code Explanations",
      "Database Modeling",
      "Deployment & Hosting Setup",
    ],
    icon: <GraduationCap className="w-10 h-10 md:w-14 md:h-14 text-cyan-400" />,
    color: "from-cyan-500/20 to-transparent",
    borderColor: "border-cyan-500/20",
    buttonHover: "hover:bg-cyan-500/20",
  },
];

const workSteps = [
  {
    title: "Initial Consultation",
    desc: "We discuss your requirements, goals, and project scope.",
    icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Proposal & Quote",
    desc: "Receive a detailed proposal with timeline and pricing.",
    icon: <FileText className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Development",
    desc: "Regular updates as I build your solution with best practices.",
    icon: <Code2 className="w-6 h-6 text-orange-400" />,
  },
  {
    title: "Testing & Delivery",
    desc: "Thorough testing, training, and smooth handover.",
    icon: <Rocket className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Support",
    desc: "Ongoing support and maintenance after launch.",
    icon: <Shield className="w-6 h-6 text-pink-400" />,
  },
];

const additionalServices = [
  {
    title: "Odoo Support & Maintenance",
    desc: "Ongoing technical assistance, troubleshooting, module updates, and user training for your Odoo ERP systems.",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Web Management Assistant",
    desc: "Dedicated website monitoring, security patching, performance scaling, and regular content updates.",
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Brand Identity & Design",
    desc: "Creative poster design, digital marketing assets, and cohesive branding packages to elevate your presence.",
    icon: <Star className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Dynamic QR Code Solutions",
    desc: "Custom QR code generation for marketing campaigns, product tracking, menus, and digital business footprints.",
    icon: <Tag className="w-6 h-6 text-yellow-400" />,
  },
];

const whyMe = [
  {
    title: "Quality Assured",
    desc: "As an expert developer, I deliver clean, maintainable code following strict industry standards.",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Client-Focused",
    desc: "Your satisfaction is my priority. I build transparent logic ensuring your needs are fully met.",
    icon: <HeartHandshake className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Speed & Scale",
    desc: "Using tools like Next.js and React Native ensures efficient development without compromising scaling.",
    icon: <Zap className="w-6 h-6 text-orange-400" />,
  },
  {
    title: "Fair Pricing",
    desc: "I offer transparent, competitive, and highly scalable pricing models for all custom solutions.",
    icon: <Tag className="w-6 h-6 text-emerald-400" />,
  },
];

export default function ServicesPage() {
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
      className="relative min-h-screen overflow-x-hidden text-white pt-32 pb-24"
    >
      <Navbar />

      <main className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center max-w-4xl mb-24 md:mb-32">
          <p className="text-xs md:text-sm tracking-[0.4em] text-neutral-400 uppercase mb-6 inline-block py-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            What I Provide
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8">
            SERVICES
            <span className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent italic pb-2">
              I OFFER
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Professional solutions spanning Next.js web applications, immersive
            React Native mobile apps, comprehensive Odoo ERP integrations, and
            global E-Commerce architectures.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="w-full flex flex-col gap-12 md:gap-20 mb-32">
          {detailedServices.map((svc, idx) => (
            <GsapFade
              key={svc.id}
              direction={idx % 2 === 0 ? "left" : "right"}
              distance={40}
              duration={0.8}
              delay={0.1}
              className="w-full"
            >
              <div
                className={`relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-xl p-8 md:p-12 lg:p-16`}
              >
                <div
                  className={`absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  {/* Left content: Title & Icon */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div
                      className={`w-fit p-4 rounded-2xl border bg-black/50 backdrop-blur-md ${svc.borderColor} shadow-lg`}
                    >
                      {svc.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                        {svc.title}
                      </h2>
                      <h3 className="text-lg md:text-xl text-neutral-400 font-medium tracking-wide">
                        {svc.subtitle}
                      </h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
                      {svc.description}
                    </p>
                  </div>

                  {/* Right content: Features */}
                  <div className="lg:col-span-7 flex flex-col justify-center h-full">
                    <div className="bg-black/30 rounded-2xl p-6 md:p-8 border border-white/5 shadow-inner">
                      <h4 className="text-sm tracking-[0.2em] text-neutral-500 uppercase mb-6 font-semibold">
                        Core Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6">
                        {svc.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 group/item"
                          >
                            <CheckCircle2 className="w-5 h-5 text-neutral-500 group-hover/item:text-white transition-colors shrink-0 mt-0.5" />
                            <span className="text-neutral-300 group-hover/item:text-white transition-colors text-sm md:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                        <button
                          onClick={() =>
                            router.push(
                              `/contact?service=${encodeURIComponent(svc.title)}`,
                            )
                          }
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-semibold transition-all duration-300 bg-white/5 ${svc.buttonHover} hover:border-white/30`}
                        >
                          Request a Quote <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GsapFade>
          ))}
        </div>

        {/* Additional Services */}
        <div className="w-full mb-32">
          <GsapFade direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Additional Capabilities
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How We Work Together
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
        <div className="w-full mb-20">
          <GsapFade direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Work With Me?
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

        {/* Bottom CTA to contact */}
        <GsapFade
          direction="up"
          delay={0.2}
          className="w-full mt-16 text-center border-t border-white/10 pt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
            Every project is unique. Let's get in touch for a detailed quote
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
