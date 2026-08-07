import React, { useEffect, useRef, useState } from "react";
import animation from "./assets/animation1.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const NAV_LINKS = ["About", "Products", "Services", "Team", "Contact", "More"];
const FRAME_COUNT = 225;
const App = () => {
 
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
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
      tl.from(".navlink",{
        y:-50,
        stagger:0.06,
        duration:0.35,
        opacity:0,
        ease:"power4.out"
      },"-=0.4")
        
    },
    { scope: container }
  );

  

  const imageRef = useRef(null);

  useEffect(() => {
    const images = [];


    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/frames/frame_${String(i).padStart(3, "0")}.jpg`;
      images.push(img);
    }

    images[0].onload = () => {
      imageRef.current.src = images[0].src;
    };

    const playhead = {
      frame: 0,
    };

    gsap.to(playhead, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=5000",
        pin: true,
        scrub: 1,
      },

      onUpdate: () => {
        imageRef.current.src = images[playhead.frame].src;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);




  return (
  <div ref={container} className="bg-[#1B1E23] text-white min-h-screen">

   
    <nav className="navbar bg-tansparent fixed top-0 left-0 w-full z-50 bg-[#1B1E23]/95 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">

       
        <div className="logo flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-white text-[#1B1E23] flex items-center justify-center font-bold text-xl">
            Z
          </div>

          <div>
            <h1 className="text-2xl font-bold leading-none">
              Zenith India
            </h1>            
          </div>

        </div>

        
        <ul className="nav-links flex items-center gap-8 font-medium text-gray-300">

          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className="navlink cursor-pointer hover:text-white "
            >
              {link}
            </li>
          ))}

        </ul>

       
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

    
    <section className="hero">
      <img
        ref={imageRef}
        className="hero-image w-full h-screen"
        alt=""
      />
    </section>
      <div className="w-full h-screen bg-black">

      </div>
  </div>
)
}

export default App;


