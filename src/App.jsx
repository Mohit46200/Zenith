import React, { useEffect, useRef, useState } from "react";
import animation from "./assets/animation.mp4";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const NAV_LINKS = ["About", "Products", "Services", "Team", "Contact", "More"];

const App = () => {
  const videoRef = useRef(null);
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // =========================
  // Navbar Animation
  // =========================
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".navbar", {
        y: -120,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      })
        .from(
          ".logo",
          {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        
    },
    { scope: container }
  );

  // =========================
  // Video Scroll Animation
  // =========================
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const state = {
      target: 0,
    };

    let ticker;
    let trigger;

    const start = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      trigger = ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "+=3000",
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,

        onUpdate: (self) => {
          state.target = self.progress * video.duration;
        },
      });

      ticker = () => {
        const delta = state.target - video.currentTime;

        if (video.readyState >= 2 && Math.abs(delta) > 0.001) {
          video.currentTime += delta * 0.12;
        }
      };

      gsap.ticker.add(ticker);
    };

    video.addEventListener("loadedmetadata", start);

    if (video.readyState >= 1) {
      start();
    }

    return () => {
      video.removeEventListener("loadedmetadata", start);

      if (ticker) gsap.ticker.remove(ticker);

      if (trigger) trigger.kill();
    };
  }, []);

  return (
  <div ref={container} className="bg-[#1B1E23] text-white min-h-screen">

    {/* ================= Navbar ================= */}
    <nav className="navbar bg-tansparent fixed top-0 left-0 w-full z-50 bg-[#1B1E23]/95 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <div className="logo flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-white text-[#1B1E23] flex items-center justify-center font-bold text-xl">
            Z
          </div>

          <div>
            <h1 className="text-2xl font-bold leading-none">
              Zenith
            </h1>

            <p className="text-gray-400 text-lg leading-none">
              India
            </p>
          </div>

        </div>

        {/* Desktop Links */}
        <ul className="nav-links flex items-center gap-8 font-medium text-gray-300">

          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-white transition"
            >
              {link}
            </li>
          ))}

        </ul>

        {/* Desktop Buttons */}
        <div className="nav-buttons hidden items-center gap-4">

          <button className="px-5 py-3 rounded-xl bg-[#36384A] hover:bg-[#474A5A] transition">
            Apply for Internship
          </button>

          <button className="px-5 py-3 rounded-xl bg-[#2B2D39] hover:bg-[#3A3D4C] transition">
            Login
          </button>

          <button className="px-5 py-3 rounded-xl bg-[#454A52] hover:bg-[#5A6068] transition">
            Sign Up
          </button>

        </div>

        {/* Mobile Menu */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#1B1E23] px-6 pb-6">

          <ul className="flex flex-col gap-5 text-gray-300 mb-6">

            {NAV_LINKS.map((link) => (
              <li key={link}>{link}</li>
            ))}

          </ul>

          <div className="flex flex-col gap-3">

            <button className="px-5 py-3 rounded-xl bg-[#36384A]">
              Apply for Internship
            </button>

            <button className="px-5 py-3 rounded-xl bg-[#2B2D39]">
              Login
            </button>

            <button className="px-5 py-3 rounded-xl bg-[#454A52]">
              Sign Up
            </button>

          </div>

        </div>
      )}

    </nav>

    {/* ================= Hero ================= */}

    <section className="hero relative h-screen overflow-hidden">

      <video
        ref={videoRef}
        src={animation}
        className="hero-video absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-black/40"></div>

    </section>

  </div>
);
};

export default App;