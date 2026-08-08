import React, { useEffect, useRef, useState } from "react";
import animation from "./assets/animation3.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger, useGSAP);


const App = () => {
  const videoRef = useRef(null);
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const state = {
      target: 1,
    };

    let ticker;
    let trigger;

    const start = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      trigger = ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "+=600",
        scrub: 0.1,
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

    <section id="chapter1" className="hero relative h-screen overflow-hidden">

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