// import React, { useEffect, useRef, useState } from "react";
// import animation from "./assets/animation4.mp4";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";


// gsap.registerPlugin(ScrollTrigger, useGSAP);


// const App = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const container = useRef(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const state = {
//       target: 1,
//     };

//     let ticker;
//     let trigger;

//     const start = () => {
//       if (!video.duration || Number.isNaN(video.duration)) return;

//       trigger = ScrollTrigger.create({
//         trigger: ".hero",
//         start: "top top",
//         end: "+=800",
//         scrub: 0.1,
//         pin: true,
//         anticipatePin: 1,

//         onUpdate: (self) => {
//           state.target = self.progress * video.duration;
//         },
//       });

//       ticker = () => {
//         const delta = state.target - video.currentTime;

//         if (video.readyState >= 2 && Math.abs(delta) > 0.001) {
//           video.currentTime += delta * 0.12;
//         }
//       };

//       gsap.ticker.add(ticker);
//     };

//     video.addEventListener("loadedmetadata", start);

//     if (video.readyState >= 1) {
//       start();
//     }

//     return () => {
//       video.removeEventListener("loadedmetadata", start);

//       if (ticker) gsap.ticker.remove(ticker);

//       if (trigger) trigger.kill();
//     };
//   }, []);

//   return (
//   <div ref={container} className="bg-[#1B1E23] text-white min-h-screen">

//     <section id="chapter1" className="hero relative h-screen overflow-hidden">

//       <video
//         ref={videoRef}
//         src={animation}
//         className="hero-video absolute inset-0 w-full h-full object-cover"
//         muted
//         playsInline
//         preload="auto"
//       />

//       <div className="absolute inset-0 bg-black/40"></div>

//     </section>
     
      
//   </div>
// );
// };

// export default App;



// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import vedio from "/home/mohit/Desktop/VKM/Zenith_India/public/vedio.mp4"

// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const setupScroll = () => {
//       // Make sure video metadata is loaded
//       if (!video.duration) return;

//       gsap.to(video, {
//         currentTime: video.duration,
//         ease: "none",

//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=3000",
//           scrub: true,
//           pin: true,
//         },
//       });
//     };

//     if (video.readyState >= 1) {
//       setupScroll();
//     } else {
//       video.addEventListener("loadedmetadata", setupScroll);
//     }

//     return () => {
//       video.removeEventListener("loadedmetadata", setupScroll);
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         height: "100vh",
//         width: "100%",
//         overflow: "hidden",
//         background: "black",
//       }}
//     >
//       <video
//         ref={videoRef}
//         src={vedio}
//         muted
//         playsInline
//         preload="auto"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//       />
//     </section>
//   );
// };

// export default App;



// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const NAV_LINKS = ["About", "Products", "Services", "Team", "Contact", "More"];
// const FRAME_COUNT = 125;
// const App = () => {
 
//   const container = useRef(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

 
//   useGSAP(
//     () => {
//       const tl = gsap.timeline();

//       tl.from(".navbar", {
//         y: -120,
//         opacity: 0,
//         duration: 0.9,
//         ease: "power4.out",
//       })
//         .from(
//           ".logo",
//           {
//             x: -60,
//             opacity: 0,
//             duration: 0.8,
//             ease: "power3.out",
//           },
//           "-=0.5"
//         )
//       tl.from(".navlink",{
//         y:-50,
//         stagger:0.06,
//         duration:0.35,
//         opacity:0,
//         ease:"power4.out"
//       },"-=0.4")
        
//     },
//     { scope: container }
//   );

  

//   const imageRef = useRef(null);

//   useEffect(() => {
//     const images = [];


//     for (let i = 1; i <= FRAME_COUNT; i++) {
//       const img = new Image();
//       img.src = `/frames/frame_${String(i).padStart(3, "0")}.avif`;
//       images.push(img);
//     }

//     images[0].onload = () => {
//       imageRef.current.src = images[0].src;
//     };

//     const playhead = {
//       frame: 0,
//     };

//     gsap.to(playhead, {
//       frame: FRAME_COUNT - 1,
//       snap: "frame",
//       ease: "none",

//       scrollTrigger: {
//         trigger: ".hero",
//         start: "top top",
//         end: "+=3500",
//         pin: true,
//         scrub: 1,
//       },

//       onUpdate: () => {
//         imageRef.current.src = images[playhead.frame].src;
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);




//   return (
//   <div ref={container} className="bg-[#1B1E23] text-white min-h-screen">

   
//     <nav className="navbar bg-tansparent fixed top-0 left-0 w-full z-50 bg-[#1B1E23]/95 backdrop-blur-md border-b border-white/10">

//       <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">

       
//         <div className="logo flex items-center gap-3">

//           <div className="w-11 h-11 rounded-xl bg-white text-[#1B1E23] flex items-center justify-center font-bold text-xl">
//             Z
//           </div>

//           <div>
//             <h1 className="text-2xl font-bold leading-none">
//               Zenith India
//             </h1>            
//           </div>

//         </div>

        
//         <ul className="nav-links flex items-center gap-8 font-medium text-gray-300">

//           {NAV_LINKS.map((link) => (
//             <li
//               key={link}
//               className="navlink cursor-pointer hover:text-white "
//             >
//               {link}
//             </li>
//           ))}

//         </ul>

       
//         <div className="nav-buttons hidden items-center gap-4">

//           <button className="px-5 py-3 rounded-xl bg-[#36384A] hover:bg-[#474A5A] transition">
//             Apply for Internship
//           </button>

//           <button className="px-5 py-3 rounded-xl bg-[#2B2D39] hover:bg-[#3A3D4C] transition">
//             Login
//           </button>

//           <button className="px-5 py-3 rounded-xl bg-[#454A52] hover:bg-[#5A6068] transition">
//             Sign Up
//           </button>

//         </div>

       
//         <button
//           className="lg:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           ☰
//         </button>

//       </div>

//       {isMenuOpen && (
//         <div className="lg:hidden bg-[#1B1E23] px-6 pb-6">

//           <ul className="flex flex-col gap-5 text-gray-300 mb-6">

//             {NAV_LINKS.map((link) => (
//               <li key={link}>{link}</li>
//             ))}

//           </ul>

//           <div className="flex flex-col gap-3">

//             <button className="px-5 py-3 rounded-xl bg-[#36384A]">
//               Apply for Internship
//             </button>

//             <button className="px-5 py-3 rounded-xl bg-[#2B2D39]">
//               Login
//             </button>

//             <button className="px-5 py-3 rounded-xl bg-[#454A52]">
//               Sign Up
//             </button>

//           </div>

//         </div>
//       )}

//     </nav>

    
//     <section className="hero">
//       <img
//         ref={imageRef}
//         className="hero-image w-full h-screen"
//         alt=""
//       />
//     </section>
//       <div className="w-full h-screen bg-black">

//       </div>
//   </div>
// )
// }

// export default App;






// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// // const NAV_LINKS = [
// //   "About",
// //   "Products",
// //   "Services",
// //   "Team",
// //   "Contact",
// //   "More",
// // ];

// const FRAME_COUNT_1 = 125;
// const FRAME_COUNT_2 = 180;

// const App = () => {
//   const container = useRef(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Navbar animation
//   // useGSAP(
//   //   () => {
//   //     const tl = gsap.timeline();

//   //     tl.from(".navbar", {
//   //       y: -120,
//   //       opacity: 0,
//   //       duration: 0.9,
//   //       ease: "power4.out",
//   //     })
//   //       .from(
//   //         ".logo",
//   //         {
//   //           x: -60,
//   //           opacity: 0,
//   //           duration: 0.8,
//   //           ease: "power3.out",
//   //         },
//   //         "-=0.5"
//   //       )
//   //       .from(
//   //         ".navlink",
//   //         {
//   //           y: -50,
//   //           stagger: 0.06,
//   //           duration: 0.35,
//   //           opacity: 0,
//   //           ease: "power4.out",
//   //         },
//   //         "-=0.4"
//   //       );
//   //   },
//   //   { scope: container }
//   // );

//   // =========================
//   // FRAME ANIMATION 1
//   // =========================

//   const imageRef1 = useRef(null);

//   useEffect(() => {
//     const images = [];

//     for (let i = 1; i <= FRAME_COUNT_1; i++) {
//       const img = new Image();

//       img.src = `/frames/frame_${String(i).padStart(3, "0")}.avif`;

//       images.push(img);
//     }

//     images[0].onload = () => {
//       if (imageRef1.current) {
//         imageRef1.current.src = images[0].src;
//       }
//     };

//     const playhead = {
//       frame: 0,
//     };

//     const animation = gsap.to(playhead, {
//       frame: FRAME_COUNT_1 - 1,

//       snap: "frame",

//       ease: "none",

//       scrollTrigger: {
//         trigger: ".hero",
//         start: "top top",
//         end: "+=4000",
//         pin: true,
//         scrub: 1,
//       },

//       onUpdate: () => {
//         const frame = Math.round(playhead.frame);

//         if (images[frame] && imageRef1.current) {
//           imageRef1.current.src = images[frame].src;
//         }
//       },
//     });

//     return () => {
//       animation.kill();
//     };
//   }, []);

//   // =========================
//   // FRAME ANIMATION 2
//   // =========================

//   const imageRef2 = useRef(null);

//   useEffect(() => {
//     const images = [];

//     for (let i = 1; i <= FRAME_COUNT_2; i++) {
//       const img = new Image();

//       img.src = `/frames2/frame_${String(i).padStart(4, "0")}.avif`;

//       images.push(img);
//     }

//     images[0].onload = () => {
//       if (imageRef2.current) {
//         imageRef2.current.src = images[0].src;
//       }
//     };

//     const playhead = {
//       frame: 0,
//     };

//     const animation = gsap.to(playhead, {
//       frame: FRAME_COUNT_2 - 1,

//       snap: "frame",

//       ease: "none",

//       scrollTrigger: {
//         trigger: ".hero2",
//         start: "top top",
//         markers:true,
//         end: "+=4000",
//         pin: true,
        
//         scrub: 1,
//       },

//       onUpdate: () => {
//         const frame = Math.round(playhead.frame);

//         if (images[frame] && imageRef2.current) {
//           imageRef2.current.src = images[frame].src;
//         }
//       },
//     });

//     return () => {
//       animation.kill();
//     };
//   }, []);

//   return (
//     <div ref={container} className="bg-[#1B1E23]">

//       {/* ================= NAVBAR ================= */}

//       {/* <nav className="navbar bg-tansparent fixed top-0 left-0 w-full z-50 bg-[#1B1E23]/95 backdrop-blur-md border-b border-white/10">

//        <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">

       
//          <div className="logo flex items-center gap-3">

//            <div className="w-11 h-11 rounded-xl bg-white text-[#1B1E23] flex items-center justify-center font-bold text-xl">
//              Z
//            </div>

//           <div>
//          <h1 className="text-2xl font-bold leading-none">
//              Zenith India
//             </h1>            
//          </div>

//         </div>

        
//         <ul className="nav-links flex items-center gap-8 font-medium text-gray-300">

//          {NAV_LINKS.map((link) => (
//             <li
//               key={link}
//               className="navlink cursor-pointer hover:text-white "
//             >
//               {link}
//             </li>
//           ))}

//         </ul>

       
//         <div className="nav-buttons hidden items-center gap-4">

//           <button className="px-5 py-3 rounded-xl bg-[#36384A] hover:bg-[#474A5A] transition">
//             Apply for Internship
//           </button>

//           <button className="px-5 py-3 rounded-xl bg-[#2B2D39] hover:bg-[#3A3D4C] transition">
//             Login
//           </button>

//           <button className="px-5 py-3 rounded-xl bg-[#454A52] hover:bg-[#5A6068] transition">
//             Sign Up
//           </button>

//         </div>

       
//         <button
//           className="lg:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           ☰
//         </button>

//       </div>

//       {isMenuOpen && (
//         <div className="lg:hidden bg-[#1B1E23] px-6 pb-6">

//           <ul className="flex flex-col gap-5 text-gray-300 mb-6">

//             {NAV_LINKS.map((link) => (
//               <li key={link}>{link}</li>
//             ))}

//           </ul>

//           <div className="flex flex-col gap-3">

//             <button className="px-5 py-3 rounded-xl bg-[#36384A]">
//               Apply for Internship
//             </button>

//             <button className="px-5 py-3 rounded-xl bg-[#2B2D39]">
//               Login
//             </button>

//             <button className="px-5 py-3 rounded-xl bg-[#454A52]">
//               Sign Up
//             </button>

//           </div>

//         </div>
//       )}

//     </nav> */}


     

//       <section className="hero w-full h-screen">

//         <img
//           ref={imageRef1}
//           className="w-full h-screen object-cover"
//           alt=""
//         />

//       </section>



//       <section className="hero2 w-full h-screen">

//         <img
//           ref={imageRef2}
//           className="w-full h-screen object-cover"
//           alt=""
//         />

//       </section>


     

//     </div>
//   );
// };

// export default App;







import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


const FRAME_COUNT_1 = 125;
const FRAME_COUNT_2 = 180;

const App = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const imageRef1 = useRef(null);

  useEffect(() => {
    const images = [];

    for (let i = 1; i <= FRAME_COUNT_1; i++) {
      const img = new Image();

      img.src = `/frames/frame_${String(i).padStart(3, "0")}.avif`;

      images.push(img);
    }

    images[0].onload = () => {
      if (imageRef1.current) {
        imageRef1.current.src = images[0].src;
      }
    };

    const playhead = {
      frame: 0,
    };

    const animation = gsap.to(playhead, {
      frame: FRAME_COUNT_1 - 1,

      snap: "frame",

      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 2,
      },

      onUpdate: () => {
        const frame = Math.round(playhead.frame);

        if (images[frame] && imageRef1.current) {
          imageRef1.current.src = images[frame].src;
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, []);


  const imageRef2 = useRef(null);

  useEffect(() => {
    const images = [];

    for (let i = 1; i <= FRAME_COUNT_2; i++) {
      const img = new Image();

      img.src = `/frames2/frame_${String(i).padStart(4, "0")}.avif`;

      images.push(img);
    }

    images[0].onload = () => {
      if (imageRef2.current) {
        imageRef2.current.src = images[0].src;
      }
    };

    const playhead = {
      frame: 0,
    };

    const animation = gsap.to(playhead, {
      frame: FRAME_COUNT_2 - 1,

      snap: "frame",

      ease: "none",

      scrollTrigger: {
        trigger: ".hero2",
        start: "top top",
        end: "+=3500",
        pin: true,
        scrub: 3,
      },

      onUpdate: () => {
        const frame = Math.round(playhead.frame);

        if (images[frame] && imageRef2.current) {
          imageRef2.current.src = images[frame].src;
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={container} className="bg-[#1B1E23]">


      <section className="hero w-full h-screen">

        <img
          ref={imageRef1}
          className="w-full h-screen object-cover"
          alt=""
        />

      </section>



      <section className="hero2 w-full h-screen">

        <img
          ref={imageRef2}
          className="w-full h-screen object-cover"
          alt=""
        />

      </section>


     

    </div>
  );
};

export default App;