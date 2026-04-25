"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa6";
import { selfData } from "@/components/Constants/SelfData";

const socialLinks = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/${selfData.phone.replace(/[^0-9]/g, "")}`,
    color: "#25D366",
    glow: "0 0 18px rgba(37, 211, 102, 0.55)",
    borderHover: "rgba(37, 211, 102, 0.35)",
    Icon: FaWhatsapp,
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: `https://instagram.com/${selfData.instagram}`,
    color: "#E1306C",
    glow: "0 0 18px rgba(225, 48, 108, 0.55)",
    borderHover: "rgba(225, 48, 108, 0.35)",
    Icon: FaInstagram,
    external: true,
  },
  {
    id: "mail",
    label: "Email",
    href: `mailto:${selfData.email}`,
    color: "#60a5fa",
    glow: "0 0 18px rgba(96, 165, 250, 0.55)",
    borderHover: "rgba(96, 165, 250, 0.35)",
    Icon: FaEnvelope,
    external: false,
  },
  {
    id: "call",
    label: "Call",
    href: `tel:${selfData.phone.replace(/\s/g, "")}`,
    color: "#a78bfa",
    glow: "0 0 18px rgba(167, 139, 250, 0.55)",
    borderHover: "rgba(167, 139, 250, 0.35)",
    Icon: FaPhone,
    external: false,
  },
];

export const SocialSidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Entrance: slide in from far right
    if (sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { x: 90, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 1.6 },
      );
    }

    // Icons: stagger bounce-in
    const validIcons = iconsRef.current.filter(Boolean);
    gsap.fromTo(
      validIcons,
      { scale: 0, opacity: 0, rotation: -15 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.5,
        ease: "back.out(2.2)",
        stagger: 0.1,
        delay: 2.0,
      },
    );

    // Continuous gentle float (up–down)
    gsap.to(sidebarRef.current, {
      y: -8,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    const el = iconsRef.current[index];
    if (!el) return;
    gsap.to(el, { scale: 1.2, duration: 0.2, ease: "back.out(2.5)" });
    el.style.boxShadow = socialLinks[index].glow;
    el.style.borderColor = socialLinks[index].borderHover;
    el.style.background = "rgba(255,255,255,0.1)";
  };

  const handleMouseLeave = (index: number) => {
    const el = iconsRef.current[index];
    if (!el) return;
    gsap.to(el, { scale: 1, duration: 0.2, ease: "power2.out" });
    el.style.boxShadow = "none";
    el.style.borderColor = "rgba(255,255,255,0.10)";
    el.style.background = "rgba(255,255,255,0.05)";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        /* Glass pill wrapper */
        .ss-glass-pill {
          background: linear-gradient(
            160deg,
            rgba(255, 255, 255, 0.07) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.3),
            0 12px 40px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.10),
            inset 0 -1px 0 rgba(0, 0, 0, 0.15);
        }

        /* Individual icon button */
        .ss-icon-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.10);
          text-decoration: none;
          cursor: pointer;
          transition: background 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }

        /* CSS tooltip using data-tooltip */
        .ss-icon-btn::after {
          content: attr(data-tooltip);
          position: absolute;
          right: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%) translateX(4px);
          background: rgba(8, 8, 18, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: rgba(255, 255, 255, 0.9);
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.07em;
          font-family: inherit;
          padding: 4px 10px;
          border-radius: 7px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          border: 1px solid rgba(255, 255, 255, 0.09);
          transition: opacity 0.18s ease, transform 0.18s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        }

        .ss-icon-btn:hover::after {
          opacity: 1;
          transform: translateY(-50%) translateX(0px);
        }

        /* Bottom decorative line */
        .ss-bottom-line {
          width: 1px;
          height: 30px;
          margin-top: 4px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.14), transparent);
          border-radius: 1px;
        }
      `}</style>

      <div
        ref={sidebarRef}
        id="social-sidebar"
        className="fixed right-2 md:right-4 z-50 flex flex-col items-center opacity-0"
        style={{ top: "75%", transform: "translateY(-50%)" }}
      >
        <div className="ss-glass-pill flex flex-col items-center gap-[11px] px-[10px] pt-[12px] pb-[8px] rounded-[22px]">
          {socialLinks.map(({ id, label, href, color, Icon, external }, i) => (
            <a
              key={id}
              id={`social-${id}`}
              href={href}
              data-tooltip={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              ref={(el) => {
                iconsRef.current[i] = el;
              }}
              className="ss-icon-btn"
              style={{ color }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              aria-label={label}
            >
              <Icon size={15} />
            </a>
          ))}

          <button
            onClick={scrollToTop}
            data-tooltip="Scroll to Top"
            ref={(el) => {
              iconsRef.current[socialLinks.length] = el;
            }}
            className="ss-icon-btn mt-1"
            style={{ color: "#ffffff" }}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.2,
                duration: 0.2,
                ease: "back.out(2.5)",
              });
              e.currentTarget.style.boxShadow =
                "0 0 18px rgba(255, 255, 255, 0.4)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
              });
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            aria-label="Scroll to Top"
          >
            <FaArrowUp size={15} />
          </button>

          <div className="ss-bottom-line" />
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;
