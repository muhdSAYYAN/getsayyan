"use client";

import React from "react";
import { GsapFade } from "@/components/commonui/GsapFade";
import { MapPin, Navigation, ExternalLink, Clock, Phone, Mail, ShieldCheck } from "lucide-react";
import { selfData } from "@/components/Constants/SelfData";

export default function LocationSection() {
  const mapEmbedUrl =
    selfData.current_location.embed_url ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5029193231367!2d76.11797047481105!3d11.110410589059734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b1319521a0b%3A0x5cff8bca110d3c85!2sSayyan%20%7C%20Web%20Developer%20in%20Malappuram!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  const googleMapsListingUrl =
    selfData.current_location.maps_url ||
    "https://www.google.com/maps/place/Sayyan+%7C+Web+Developer+in+Malappuram/@11.0618617,76.0683917,12z/data=!4m22!1m15!4m14!1m6!1m2!1s0x3ba65b1319521a0b:0x5cff8bca110d3c85!2sSayyan+%7C+Web+Developer+in+Malappuram,+near+Kacherippadi+stand,+Kacherippadi,+Manjeri,+Kerala+676123!2m2!1d76.1205454!2d11.1104106!1m6!1m2!1s0x3ba65b1319521a0b:0x5cff8bca110d3c85!2sSayyan+%7C+Web+Developer+in+Malappuram,+near+Kacherippadi+stand,+Kacherippadi,+Manjeri,+Kerala+676123!2m2!1d76.1205454!2d11.1104106!3m5!1s0x3ba65b1319521a0b:0x5cff8bca110d3c85!8m2!3d11.1104106!4d76.1205454!16s%2Fg%2F11n58h_cz7";

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${selfData.current_location.latitude},${selfData.current_location.longitude}`;

  return (
    <section
      id="location"
      className="relative w-full py-20 px-6 max-w-7xl mx-auto"
      itemScope
      itemType="https://schema.org/ProfessionalService"
    >
      <meta itemProp="name" content="Sayyan | Web Developer in Malappuram" />
      <meta itemProp="telephone" content={selfData.phone} />
      <meta itemProp="email" content={selfData.email} />
      <meta itemProp="hasMap" content={googleMapsListingUrl} />
      <div
        itemProp="geo"
        itemScope
        itemType="https://schema.org/GeoCoordinates"
        className="hidden"
      >
        <meta itemProp="latitude" content={selfData.current_location.latitude} />
        <meta itemProp="longitude" content={selfData.current_location.longitude} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* LEFT COLUMN: Location Information & SEO Address */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <GsapFade direction="right" distance={40} duration={0.8}>
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-slate-300 mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
                <span>GOOGLE VERIFIED BUSINESS</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
                OUR{" "}
                <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                  LOCATION
                </span>
              </h2>

              <p className="text-neutral-400 text-base sm:text-lg mb-8 leading-relaxed">
                Based in Manjeri, Malappuram district, Kerala. Available for
                in-person consultations across Malappuram &amp; Kozhikode, and
                serving businesses worldwide remotely.
              </p>

              {/* Semantic Address with Schema Microdata */}
              <address
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                className="not-italic bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 block mb-1">
                      Office &amp; Studio Address
                    </span>
                    <p
                      itemProp="streetAddress"
                      className="text-white font-medium text-base leading-snug"
                    >
                      Near Kacherippadi Stand, Kacherippadi
                    </p>
                    <p className="text-neutral-300 text-sm mt-1">
                      <span itemProp="addressLocality">Manjeri</span>,{" "}
                      <span itemProp="addressRegion">Kerala</span>{" "}
                      <span itemProp="postalCode">676123</span>,{" "}
                      <span itemProp="addressCountry">India</span>
                    </p>
                  </div>
                </div>
              </address>

              {/* Additional Meta / Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <Clock className="w-5 h-5 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-500 block">Working Hours</span>
                    <span className="text-xs text-neutral-200 font-medium">Mon - Sat: 9 AM - 7 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <Phone className="w-5 h-5 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-500 block">Phone Support</span>
                    <a
                      href={`tel:${selfData.phone}`}
                      className="text-xs text-neutral-200 font-medium hover:text-white transition-colors"
                    >
                      {selfData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg hover:shadow-white/10"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>

              <a
                href={googleMapsListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-neutral-400" />
                Open in Google Maps
              </a>
            </div>
          </GsapFade>
        </div>

        {/* RIGHT COLUMN: Interactive Google Map Embed */}
        <div className="lg:col-span-7 flex flex-col">
          <GsapFade direction="up" distance={40} duration={0.8} className="h-full flex flex-col">
            <div className="relative w-full flex-grow min-h-[420px] rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] shadow-2xl backdrop-blur-xl flex flex-col">
              {/* Header Bar */}
              <div className="px-6 py-3.5 bg-black/40 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 animate-pulse" />
                  <span className="text-xs font-mono tracking-wider text-neutral-300">
                    Manjeri, Malappuram · Live GPS Pin
                  </span>
                </div>

                <a
                  href={googleMapsListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors font-mono"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full flex-grow min-h-[380px]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "380px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Sayyan | Web Developer in Malappuram Office Location Map"
                  className="w-full h-full grayscale-[25%] contrast-[1.05] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>

              {/* Footer Banner */}
              <div className="px-6 py-3 bg-black/50 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
                <span>📍 Near Kacherippadi Stand, Manjeri 676123</span>
                <span className="text-neutral-500 font-mono">11.1104° N, 76.1205° E</span>
              </div>
            </div>
          </GsapFade>
        </div>
      </div>
    </section>
  );
}
