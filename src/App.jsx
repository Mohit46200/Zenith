import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FRAME_COUNT_1 = 53;
const FRAME_COUNT_NEW = 90;
const FRAME_COUNT_2 = 180;
const FRAME_COUNT_3 = 40;

const App = () => {
  const container = useRef(null);

  const imageRef1 = useRef(null);
  const imageRefNew = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  useGSAP(
    () => {
      
      // IMAGE ARRAYS
      

      const images1 = [];
      const imagesNew = [];
      const images2 = [];
      const images3 = [];

      
      // LOAD ANIMATION 1
     

      for (let i = 1; i <= FRAME_COUNT_1; i++) {
        const img = new Image();
        img.src = `/frames1/frame_${String(i).padStart(4, "0")}.avif`;
        images1.push(img);
      }

     
      // LOAD NEW ANIMATION
     

      for (let i = 1; i <= FRAME_COUNT_NEW; i++) {
        const img = new Image();
        img.src = `/frames4/frame_${String(i).padStart(4, "0")}.avif`;
        imagesNew.push(img);
      }

      
      // LOAD ANIMATION 2
     

      for (let i = 1; i <= FRAME_COUNT_2; i++) {
        const img = new Image();
        img.src = `/frames2/frame_${String(i).padStart(4, "0")}.avif`;
        images2.push(img);
      }

     
      // LOAD ANIMATION 3
      

      for (let i = 1; i <= FRAME_COUNT_3; i++) {
        const img = new Image();
        img.src = `/frames3/frame_${String(i).padStart(4, "0")}.avif`;
        images3.push(img);
      }

      
      // SET INITIAL FRAMES
     

      images1[0].onload = () => {
        if (imageRef1.current) imageRef1.current.src = images1[0].src;
      };
      imagesNew[0].onload = () => {
        if (imageRefNew.current) imageRefNew.current.src = imagesNew[0].src;
      };
      images2[0].onload = () => {
        if (imageRef2.current) imageRef2.current.src = images2[0].src;
      };
      images3[0].onload = () => {
        if (imageRef3.current) imageRef3.current.src = images3[0].src;
      };

     
      // PLAYHEADS
     

      const playhead1 = { frame: 0 };
      const playheadNew = { frame: 0 };
      const playhead2 = { frame: 0 };
      const playhead3 = { frame: 0 };

     
      
      gsap.set(".heroNew", {
        xPercent: 180,
   
        scale: 1.12,
        rotateZ: 5,
        opacity: 1,
        filter: "blur(14px)",
        transformOrigin: "50% 100%",
      });

     
      gsap.set(".hero2", {
        xPercent: -200,
        // yPercent: 200,
        scale: 1.12,
        // rotateZ: -5,
        opacity: 1,
        filter: "blur(14px)",
        transformOrigin: "50% 100%",
      });

      
      gsap.set(".hero3", {
        yPercent: 60,
        scale: 0.82,
        opacity: 0,
        filter: "blur(18px)",
        transformOrigin: "50% 50%",
      });

      // Animation 1 visible initially
      gsap.set(imageRef1.current, {
        opacity: 1,
        scale: 1,
      });

    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",

          // Total scroll distance
          end: 11000,

          pin: true,
          scrub: 1,
          anticipatePin: 1,

          // markers: true,
        },
        defaults: { ease: "none" },
      });

      
      tl.to(
        playhead1,
        {
          frame: FRAME_COUNT_1 - 1,
          snap: "frame",
          duration: 1,
          onUpdate: () => {
            const frame = Math.round(playhead1.frame);
            if (images1[frame] && imageRef1.current) {
              imageRef1.current.src = images1[frame].src;
            }
          },
        },
        0
      );

      tl.to(
        imageRef1.current,
        { scale: 1.08, ease: "sine.inOut", duration: 1 },
        0
      );

   

      tl.to(
        ".heroNew",
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          rotateZ: 0,
          filter: "blur(0px)",
          ease: "power3.out",
          duration: 0.4,
        },
        0.6
      );

     
      tl.to(
        imageRef1.current,
        {
          opacity: 0,
          scale: 1.16,
          filter: "blur(10px)",
          ease: "power2.in",
          duration: 0.3,
        },
        0.9
      );

      
      tl.to(
        playheadNew,
        {
          frame: FRAME_COUNT_NEW - 1,
          snap: "frame",
          duration: 0.8,
          onUpdate: () => {
            const frame = Math.round(playheadNew.frame);
            if (imagesNew[frame] && imageRefNew.current) {
              imageRefNew.current.src = imagesNew[frame].src;
            }
          },
        },
        0.8
      );

      tl.to(
        imageRefNew.current,
        { scale: 1.06, ease: "sine.inOut", duration: 0.8 },
        0.8
      );

      tl.to(
        ".hero2",
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          rotateZ: 0,
          filter: "blur(0px)",
          ease: "power3.out",
          duration: 0.4,
        },
        1.6
      );



      tl.to(
        ".heroNew",
        {
          xPercent: -14,
          yPercent: -8,
          scale: 0.94,
          opacity: 0,
          filter: "blur(10px)",
          ease: "power2.in",
          duration: 0.3,
        },
        1.6
      );

     
      tl.to(
        playhead2,
        {
          frame: FRAME_COUNT_2 - 1,
          snap: "frame",
          duration: 2.2,
          onUpdate: () => {
            const frame = Math.round(playhead2.frame);
            if (images2[frame] && imageRef2.current) {
              imageRef2.current.src = images2[frame].src;
            }
          },
        },
        1.8
      );

      tl.to(
        imageRef2.current,
        { scale: 1.06, ease: "sine.inOut", duration: 2.2 },
        1.8
      );

    
      tl.to(
        ".hero3",
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "expo.out",
          duration: 0.4,
        },
        2.6
      );

     
      tl.to(
        ".hero2",
        {
          xPercent: 14,
          yPercent: -8,
          scale: 0.94,
          opacity: 0,
          filter: "blur(10px)",
          ease: "power2.in",
          duration: 0.3,
        },
        2.6
      );


      tl.to(
        playhead3,
        {
          frame: FRAME_COUNT_3 - 1,
          snap: "frame",
          duration: 0.5,
          onUpdate: () => {
            const frame = Math.round(playhead3.frame);
            if (images3[frame] && imageRef3.current) {
              imageRef3.current.src = images3[frame].src;
            }
          },
        },
        2.6
      );

      tl.to(
        imageRef3.current,
        { scale: 1.06, ease: "sine.inOut", duration: 0.5 },
        2.6
      );

      return () => {
        tl.kill();
      };
    },
    {
      scope: container,
    }
  );

  return (
    <div ref={container}>
     
      <section className="hero relative w-full h-screen overflow-hidden">

       
        <img
          ref={imageRef1}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          alt="Animation 1"
        />

       
        <section
          className="heroNew absolute top-0 w-full h-screen z-10 overflow-hidden will-change-transform"
        >
          <img
            ref={imageRefNew}
            className="w-full h-full object-cover"
            alt="New Animation"
          />
        </section>

        
        <section
          className="hero2 absolute top-0 w-full h-screen z-20 overflow-hidden will-change-transform"
        >
          <img
            ref={imageRef2}
            className="w-full h-full object-cover"
            alt="Animation 2"
          />
        </section>

       
        <section
          className="hero3 absolute inset-0 w-full h-screen z-30 overflow-hidden will-change-transform"
        >
          <img
            ref={imageRef3}
            className="w-full h-full object-cover"
            alt="Animation 3"
          />
        </section>

      </section>
    </div>
  );
};

export default App;