// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const FRAME_COUNT_1 = 53;
// const FRAME_COUNT_NEW = 90; 
// const FRAME_COUNT_2 = 180;
// const FRAME_COUNT_3 = 40;

// const App = () => {
//   const container = useRef(null);

//   const imageRef1 = useRef(null);
//   const imageRefNew = useRef(null);
//   const imageRef2 = useRef(null);
//   const imageRef3 = useRef(null);

//   useGSAP(
//     () => {
//       // ==========================================
//       // IMAGE ARRAYS
//       // ==========================================

//       const images1 = [];
//       const imagesNew = [];
//       const images2 = [];
//       const images3 = [];

//       // ==========================================
//       // LOAD ANIMATION 1
//       // ==========================================

//       for (let i = 1; i <= FRAME_COUNT_1; i++) {
//         const img = new Image();

//         img.src = `/frames1/frame_${String(i).padStart(4, "0")}.avif`;

//         images1.push(img);
//       }

//       // ==========================================
//       // LOAD NEW ANIMATION
//       // ==========================================

//       for (let i = 1; i <= FRAME_COUNT_NEW; i++) {
//         const img = new Image();

//         img.src = `/frames4/frame_${String(i).padStart(4, "0")}.avif`;

//         imagesNew.push(img);
//       }

//       // ==========================================
//       // LOAD ANIMATION 2
//       // ==========================================

//       for (let i = 1; i <= FRAME_COUNT_2; i++) {
//         const img = new Image();

//         img.src = `/frames2/frame_${String(i).padStart(4, "0")}.avif`;

//         images2.push(img);
//       }

//       // ==========================================
//       // LOAD ANIMATION 3
//       // ==========================================

//       for (let i = 1; i <= FRAME_COUNT_3; i++) {
//         const img = new Image();

//         img.src = `/frames3/frame_${String(i).padStart(4, "0")}.avif`;

//         images3.push(img);
//       }

//       // ==========================================
//       // SET INITIAL FRAME 1
//       // ==========================================

//       images1[0].onload = () => {
//         if (imageRef1.current) {
//           imageRef1.current.src = images1[0].src;
//         }
//       };

//       // ==========================================
//       // SET INITIAL FRAME NEW ANIMATION
//       // ==========================================

//       imagesNew[0].onload = () => {
//         if (imageRefNew.current) {
//           imageRefNew.current.src = imagesNew[0].src;
//         }
//       };

//       // ==========================================
//       // SET INITIAL FRAME 2
//       // ==========================================

//       images2[0].onload = () => {
//         if (imageRef2.current) {
//           imageRef2.current.src = images2[0].src;
//         }
//       };

//       // ==========================================
//       // SET INITIAL FRAME 3
//       // ==========================================

//       images3[0].onload = () => {
//         if (imageRef3.current) {
//           imageRef3.current.src = images3[0].src;
//         }
//       };

//       // ==========================================
//       // PLAYHEADS
//       // ==========================================

//       const playhead1 = {
//         frame: 0,
//       };

//       const playheadNew = {
//         frame: 0,
//       };

//       const playhead2 = {
//         frame: 0,
//       };

//       const playhead3 = {
//         frame: 0,
//       };

//       // ==========================================
//       // INITIAL POSITIONS
//       // ==========================================

//       // New animation starts below screen
//       gsap.set(".heroNew", {
//         yPercent: 100,
//       });

//       // Animation 2 starts below screen
//       gsap.set(".hero2", {
//         yPercent: 100,
//       });

//       // Animation 3 starts below screen
//       gsap.set(".hero3", {
//         yPercent: 100,
//       });

//       // Animation 1 visible initially
//       gsap.set(imageRef1.current, {
//         opacity: 1,
//       });

//       // New animation visible when it enters
//       gsap.set(".heroNew", {
//         opacity: 1,
//       });

//       // Animation 2 visible when it enters
//       gsap.set(".hero2", {
//         opacity: 1,
//       });

//       // Animation 3 visible when it enters
//       gsap.set(".hero3", {
//         opacity: 1,
//       });

//       // ==========================================
//       // MASTER TIMELINE
//       // ==========================================

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".hero",
//           start: "top top",

//           // Total scroll distance
//           end: 11000,

//           pin: true,
//           scrub: 1,
//           anticipatePin: 1,

//           // markers: true,
//         },
//       });

//       // =====================================================
//       // ANIMATION 1
//       // =====================================================

//       tl.to(
//         playhead1,
//         {
//           frame: FRAME_COUNT_1 - 1,

//           snap: "frame",

//           ease: "none",

//           duration: 1,

//           onUpdate: () => {
//             const frame = Math.round(playhead1.frame);

//             if (images1[frame] && imageRef1.current) {
//               imageRef1.current.src = images1[frame].src;
//             }
//           },
//         },
//         0
//       );

//       // =====================================================
//       // NEW ANIMATION COMES FROM BOTTOM
//       // =====================================================

//       tl.to(
//         ".heroNew",
//         {
//           yPercent: 0,

//           ease: "none",

//           duration: 0.2,
//         },
//         0.6
//       );

//       // =====================================================
//       // ANIMATION 1 FADES OUT
//       // =====================================================

//       tl.to(
//         imageRef1.current,
//         {
//           opacity: 0,

//           ease: "none",

//           duration: 0.2,
//         },
//         1.0
//       );

//       // =====================================================
//       // NEW ANIMATION FRAME ANIMATION
//       // =====================================================

//       tl.to(
//         playheadNew,
//         {
//           frame: FRAME_COUNT_NEW - 1,

//           snap: "frame",

//           ease: "none",

//           duration: 0.8,

//           onUpdate: () => {
//             const frame = Math.round(playheadNew.frame);

//             if (imagesNew[frame] && imageRefNew.current) {
//               imageRefNew.current.src = imagesNew[frame].src;
//             }
//           },
//         },
//         0.8
//       );

//       // =====================================================
//       // ANIMATION 2 COMES FROM BOTTOM
//       // =====================================================

//       tl.to(
//         ".hero2",
//         {
//           yPercent: 0,

//           ease: "none",

//           duration: 0.2,
//         },
//         1.6
//       );

//       // =====================================================
//       // NEW ANIMATION FADES OUT
//       // =====================================================

//       tl.to(
//         ".heroNew",
//         {
//           opacity: 0,

//           ease: "none",

//           duration: 0.2,
//         },
//         1.6
//       );

//       // =====================================================
//       // ANIMATION 2 FRAME ANIMATION
//       // =====================================================

//       tl.to(
//         playhead2,
//         {
//           frame: FRAME_COUNT_2 - 1,

//           snap: "frame",

//           ease: "none",

//           duration: 2.2,

//           onUpdate: () => {
//             const frame = Math.round(playhead2.frame);

//             if (images2[frame] && imageRef2.current) {
//               imageRef2.current.src = images2[frame].src;
//             }
//           },
//         },
//         1.8
//       );

//       // =====================================================
//       // ANIMATION 3 COMES FROM BOTTOM
//       // =====================================================

//       tl.to(
//         ".hero3",
//         {
//           yPercent: 0,

//           ease: "none",

//           duration: 0.2,
//         },
//         2.6
//       );

//       // =====================================================
//       // ANIMATION 2 FADES OUT
//       // =====================================================

//       tl.to(
//         ".hero2",
//         {
//           opacity: 0,

//           ease: "none",

//           duration: 0.2,
//         },
//         2.6
//       );

//       // =====================================================
//       // ANIMATION 3 FRAME ANIMATION
//       // =====================================================

//       tl.to(
//         playhead3,
//         {
//           frame: FRAME_COUNT_3 - 1,

//           snap: "frame",

//           ease: "none",

//           duration: 0.5,

//           onUpdate: () => {
//             const frame = Math.round(playhead3.frame);

//             if (images3[frame] && imageRef3.current) {
//               imageRef3.current.src = images3[frame].src;
//             }
//           },
//         },
//         2.6
//       );

//       // ==========================================
//       // CLEANUP
//       // ==========================================

//       return () => {
//         tl.kill();
//       };
//     },
//     {
//       scope: container,
//     }
//   );

//   return (
//     <div ref={container}>
//       {/* ==========================================
//           MAIN PINNED AREA
//       ========================================== */}

//       <section className="hero relative w-full h-screen overflow-hidden">

//         {/* ========================================
//             ANIMATION 1
//         ======================================== */}

//         <img
//           ref={imageRef1}
//           className="absolute inset-0 w-full h-full object-cover"
//           alt="Animation 1"
//         />

//         {/* ========================================
//             NEW ANIMATION
//         ======================================== */}

//         <section
//           className="heroNew absolute top-0 w-full h-screen z-10 overflow-hidden"
//         >
//           <img
//             ref={imageRefNew}
//             className="w-full h-full object-cover"
//             alt="New Animation"
//           />
//         </section>

//         {/* ========================================
//             ANIMATION 2
//         ======================================== */}

//         <section
//           className="hero2 absolute top-0 w-full h-screen z-20 overflow-hidden"
//         >
//           <img
//             ref={imageRef2}
//             className="w-full h-full object-cover"
//             alt="Animation 2"
//           />
//         </section>

//         {/* ========================================
//             ANIMATION 3
//         ======================================== */}

//         <section
//           className="hero3 absolute inset-0 w-full h-screen z-30 overflow-hidden"
//         >
//           <img
//             ref={imageRef3}
//             className="w-full h-full object-cover"
//             alt="Animation 3"
//           />
//         </section>

//       </section>
//     </div>
//   );
// };

// export default App;






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
      // ==========================================
      // IMAGE ARRAYS
      // ==========================================

      const images1 = [];
      const imagesNew = [];
      const images2 = [];
      const images3 = [];

      // ==========================================
      // LOAD ANIMATION 1
      // ==========================================

      for (let i = 1; i <= FRAME_COUNT_1; i++) {
        const img = new Image();
        img.src = `/frames1/frame_${String(i).padStart(4, "0")}.avif`;
        images1.push(img);
      }

      // ==========================================
      // LOAD NEW ANIMATION
      // ==========================================

      for (let i = 1; i <= FRAME_COUNT_NEW; i++) {
        const img = new Image();
        img.src = `/frames4/frame_${String(i).padStart(4, "0")}.avif`;
        imagesNew.push(img);
      }

      // ==========================================
      // LOAD ANIMATION 2
      // ==========================================

      for (let i = 1; i <= FRAME_COUNT_2; i++) {
        const img = new Image();
        img.src = `/frames2/frame_${String(i).padStart(4, "0")}.avif`;
        images2.push(img);
      }

      // ==========================================
      // LOAD ANIMATION 3
      // ==========================================

      for (let i = 1; i <= FRAME_COUNT_3; i++) {
        const img = new Image();
        img.src = `/frames3/frame_${String(i).padStart(4, "0")}.avif`;
        images3.push(img);
      }

      // ==========================================
      // SET INITIAL FRAMES
      // ==========================================

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

      // ==========================================
      // PLAYHEADS
      // ==========================================

      const playhead1 = { frame: 0 };
      const playheadNew = { frame: 0 };
      const playhead2 = { frame: 0 };
      const playhead3 = { frame: 0 };

      // ==========================================
      // INITIAL POSITIONS
      // Each panel gets its own entrance "signature" —
      // a distinct direction, tilt, scale and focus-pull —
      // so the four beats don't all read as the same move.
      // ==========================================

      // New animation: rises from bottom-RIGHT, tilted in, soft focus
      gsap.set(".heroNew", {
        xPercent: 180,
        // yPercent: 100,
        scale: 1.12,
        rotateZ: 5,
        opacity: 1,
        filter: "blur(14px)",
        transformOrigin: "50% 100%",
      });

      // Animation 2: rises from bottom-LEFT, mirrored tilt
      gsap.set(".hero2", {
        xPercent: -200,
        // yPercent: 200,
        scale: 1.12,
        // rotateZ: -5,
        opacity: 1,
        filter: "blur(14px)",
        transformOrigin: "50% 100%",
      });

      // Animation 3: rises straight up out of a soft zoom "portal"
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

      // ==========================================
      // MASTER TIMELINE
      // ==========================================

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

      // =====================================================
      // ANIMATION 1 — frame playback + slow Ken Burns push-in
      // =====================================================

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

      // =====================================================
      // NEW ANIMATION ENTERS
      // Diagonal rise from bottom-right — untilts and comes
      // into focus as it settles, instead of a flat slide-up
      // =====================================================

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

      // =====================================================
      // ANIMATION 1 EXITS — pushes back and softens focus
      // =====================================================

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

      // =====================================================
      // NEW ANIMATION FRAME PLAYBACK + Ken Burns push-in
      // =====================================================

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

      // =====================================================
      // ANIMATION 2 ENTERS
      // Diagonal rise from bottom-left, mirrored tilt so this
      // beat reads as a distinct move from the previous one
      // =====================================================

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

      // =====================================================
      // NEW ANIMATION EXITS — drifts up-left and defocuses
      // =====================================================

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

      // =====================================================
      // ANIMATION 2 FRAME PLAYBACK + Ken Burns push-in
      // =====================================================

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

      // =====================================================
      // ANIMATION 3 ENTERS
      // Rises straight up out of a soft zoom "portal" — the
      // most dramatic of the three arrivals, reserved for last
      // =====================================================

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

      // =====================================================
      // ANIMATION 2 EXITS — drifts up-right and defocuses
      // =====================================================

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

      // =====================================================
      // ANIMATION 3 FRAME PLAYBACK + Ken Burns push-in
      // =====================================================

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

      // ==========================================
      // CLEANUP
      // ==========================================

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
      {/* ==========================================
          MAIN PINNED AREA
      ========================================== */}

      <section className="hero relative w-full h-screen overflow-hidden">

        {/* ========================================
            ANIMATION 1
        ======================================== */}

        <img
          ref={imageRef1}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          alt="Animation 1"
        />

        {/* ========================================
            NEW ANIMATION — enters diagonally from bottom-right
        ======================================== */}

        <section
          className="heroNew absolute top-0 w-full h-screen z-10 overflow-hidden will-change-transform"
        >
          <img
            ref={imageRefNew}
            className="w-full h-full object-cover"
            alt="New Animation"
          />
        </section>

        {/* ========================================
            ANIMATION 2 — enters diagonally from bottom-left
        ======================================== */}

        <section
          className="hero2 absolute top-0 w-full h-screen z-20 overflow-hidden will-change-transform"
        >
          <img
            ref={imageRef2}
            className="w-full h-full object-cover"
            alt="Animation 2"
          />
        </section>

        {/* ========================================
            ANIMATION 3 — rises out of a zoomed "portal"
        ======================================== */}

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