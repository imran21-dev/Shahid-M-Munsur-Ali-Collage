// import { useRef, useState, useEffect } from "react";

// const M = 0.512286623256592433;

// function buildWavePath(w, h) {
//   const a = h / 4;
//   const y = h / 2;
//   const segments = [];
//   for (let i = 0; i < 14; i++) {
//     segments.push("s", -(1 - a) * M, a, a, a, "s", -(1 - a) * M, -a, a, -a);
//   }
//   return [
//     "M",
//     w * 0,
//     y + a / 2,
//     "c",
//     a * M,
//     0,
//     -(1 - a) * M,
//     -a,
//     a,
//     -a,
//     ...segments,
//   ].join(" ");
// }

// // Build a "flat" path with the same number of commands as the wave path
// // so SVG can interpolate smoothly between them
// function buildFlatPath(w, h) {
//   const y = h / 2;
//   const a = h / 4;
//   const segments = [];
//   for (let i = 0; i < 14; i++) {
//     segments.push("s", 0, 0, a, 0, "s", 0, 0, a, 0);
//   }
//   return ["M", w * 0, y, "c", a * M, 0, 0, 0, a, 0, ...segments].join(" ");
// }

// export default function App({ toggleAudio, isPlaying }) {
//   console.log("SoundWaveBtn rendered with isPlaying:", isPlaying);
//   const pathRef = useRef(null);
//   const animFrameRef = useRef(null);
//   const [isStraight, setIsStraight] = useState(false);

//   // Lerp between two path's numeric values
//   function lerpPaths(from, to, t) {
//     const fromNums = from.match(/-?\d+\.?\d*/g).map(Number);
//     const toNums = to.match(/-?\d+\.?\d*/g).map(Number);
//     let i = 0;
//     return from.replace(/-?\d+\.?\d*/g, () => {
//       const val = fromNums[i] + (toNums[i] - fromNums[i]) * t;
//       i++;
//       return +val.toFixed(4);
//     });
//   }

//   function easeInOut(t) {
//     return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//   }

//   function animatePath(fromPath, toPath, duration, onComplete) {
//     const start = performance.now();
//     if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

//     function step(now) {
//       const elapsed = now - start;
//       const raw = Math.min(elapsed / duration, 1);
//       const t = easeInOut(raw);
//       if (pathRef.current) {
//         pathRef.current.setAttribute("d", lerpPaths(fromPath, toPath, t));
//       }
//       if (raw < 1) {
//         animFrameRef.current = requestAnimationFrame(step);
//       } else {
//         onComplete?.();
//       }
//     }
//     animFrameRef.current = requestAnimationFrame(step);
//   }

//   useEffect(() => {
//     if (pathRef.current) {
//       pathRef.current.setAttribute("d", buildWavePath(90, 60));
//     }
//     return () => {
//       if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
//     };
//   }, []);

//   const handleClick = () => {
//     if (!pathRef.current) return;

//     const wavePath = buildWavePath(90, 60);
//     const flatPath = buildFlatPath(90, 60);

//     if (!isStraight) {
//       // wave → flat: stop CSS animation first, snapshot current visual d, then animate to flat
//       pathRef.current.style.animation = "none";
//       pathRef.current.style.transition = "none";
//       // get current rendered d (after stopping animation)
//       const currentD = pathRef.current.getAttribute("d") || wavePath;
//       animatePath(wavePath, flatPath, 600, () => {});
//     } else {
//       // flat → wave: animate to wave shape, then re-enable CSS scroll animation
//       animatePath(flatPath, wavePath, 600, () => {
//         if (pathRef.current) {
//           pathRef.current.style.animation =
//             "moveTheWave 8400ms linear infinite";
//         }
//       });
//     }
//     setIsStraight((p) => !p);
//   };

//   return (
//     <div>
//       <style>{`
//         @keyframes moveTheWave {
//           0% { stroke-dashoffset: 0; transform: translate3d(0,0,0); }
//           100% { stroke-dashoffset: -133; transform: translate3d(-90px,0,0); }
//         }
//         .wave-path { stroke-dasharray: 0 16 101 16; animation: moveTheWave 12000ms linear infinite; }
//         .wave-container:hover { opacity: .7; }
//         .wave-container { transition: opacity 0.2s; }
//       `}</style>

//       <div className="wave-container  cursor-pointer" onClick={handleClick}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="35px"
//           className=""
//           viewBox="5 0 80 60"
//           style={{ overflow: "hidden" }}
//         >
//           <path
//             ref={pathRef}
//             className="wave-path stroke-foreground/80"
//             fill="none"
//             strokeWidth={4}
//             strokeLinecap="round"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }
import { useRef, useEffect } from "react";

const M = 0.512286623256592433;

function buildWavePath(w, h) {
  const a = h / 4;
  const y = h / 2;
  const segments = [];
  for (let i = 0; i < 14; i++) {
    segments.push("s", -(1 - a) * M, a, a, a, "s", -(1 - a) * M, -a, a, -a);
  }
  return [
    "M",
    w * 0,
    y + a / 2,
    "c",
    a * M,
    0,
    -(1 - a) * M,
    -a,
    a,
    -a,
    ...segments,
  ].join(" ");
}

function buildFlatPath(w, h) {
  const y = h / 2;
  const a = h / 4;
  const segments = [];
  for (let i = 0; i < 14; i++) {
    segments.push("s", 0, 0, a, 0, "s", 0, 0, a, 0);
  }
  return ["M", w * 0, y, "c", a * M, 0, 0, 0, a, 0, ...segments].join(" ");
}

export default function SoundWaveBtn({ toggleAudio, isPlaying }) {
  const pathRef = useRef(null);
  const animFrameRef = useRef(null);

  function lerpPaths(from, to, t) {
    const fromNums = from.match(/-?\d+\.?\d*/g).map(Number);
    const toNums = to.match(/-?\d+\.?\d*/g).map(Number);
    let i = 0;
    return from.replace(/-?\d+\.?\d*/g, () => {
      const val = fromNums[i] + (toNums[i] - fromNums[i]) * t;
      i++;
      return +val.toFixed(4);
    });
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animatePath(fromPath, toPath, duration, onComplete) {
    const start = performance.now();
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    function step(now) {
      const elapsed = now - start;
      const raw = Math.min(elapsed / duration, 1);
      const t = easeInOut(raw);
      if (pathRef.current) {
        pathRef.current.setAttribute("d", lerpPaths(fromPath, toPath, t));
      }
      if (raw < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        onComplete?.();
      }
    }
    animFrameRef.current = requestAnimationFrame(step);
  }

  // Initialize path
  useEffect(() => {
    if (pathRef.current) {
      pathRef.current.setAttribute("d", buildFlatPath(90, 60));
    }
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // React to isPlaying changes
  useEffect(() => {
    if (!pathRef.current) return;

    const wavePath = buildWavePath(90, 60);
    const flatPath = buildFlatPath(90, 60);

    if (isPlaying) {
      // flat → wave, then enable scroll animation
      animatePath(flatPath, wavePath, 600, () => {
        if (pathRef.current) {
          pathRef.current.style.animation =
            "moveTheWave 8400ms linear infinite";
        }
      });
    } else {
      // wave → flat, stop scroll animation
      if (pathRef.current) {
        pathRef.current.style.animation = "none";
      }
      animatePath(wavePath, flatPath, 600, () => {});
    }
  }, [isPlaying]);

  return (
    <div className="relative">
      <style>{`
        @keyframes moveTheWave {
          0% { stroke-dashoffset: 0; transform: translate3d(0,0,0); }
          100% { stroke-dashoffset: -133; transform: translate3d(-90px,0,0); }
        }
        .wave-path { stroke-dasharray: 0 16 101 16; }
        .wave-container { transition: opacity 0.2s; }
      `}</style>

      <div className="wave-container cursor-pointer" onClick={toggleAudio}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="5 0 80 60"
          style={{ overflow: "hidden" }}
          className="w-7 md:w-9"
        >
          <path
            ref={pathRef}
            className="wave-path stroke-foreground/70 "
            fill="none"
            strokeWidth={4}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
