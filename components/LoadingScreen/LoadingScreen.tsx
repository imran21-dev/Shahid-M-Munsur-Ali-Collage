// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import Image from "next/image";
// import logo from "@/images/logo.png";

// const statusMessages = [
//   "Initializing...",
//   "Loading assets...",
//   "Preparing portfolio...",
//   "Almost ready...",
// ];

// export default function LoadingScreen() {
//   const [done, setDone] = useState(false);
//   const [statusIdx, setStatusIdx] = useState(0);

//   useEffect(() => {
//     // Cycle messages every 700ms
//     const msgInterval = setInterval(() => {
//       setStatusIdx((i) => Math.min(i + 1, statusMessages.length - 1));
//     }, 700);

//     let windowLoaded = false;
//     let minTimePassed = false;

//     const tryFinish = () => {
//       if (windowLoaded && minTimePassed) {
//         clearInterval(msgInterval);
//         setStatusIdx(statusMessages.length - 1);
//         setTimeout(() => setDone(true), 400);
//       }
//     };

//     // Minimum display time: 4 messages × 700ms = ~2.8s
//     const minTimer = setTimeout(() => {
//       minTimePassed = true;
//       tryFinish();
//     }, statusMessages.length * 700);

//     // Wait for real window load too
//     const onLoad = () => {
//       windowLoaded = true;
//       tryFinish();
//     };

//     if (document.readyState === "complete") {
//       windowLoaded = true;
//     } else {
//       window.addEventListener("load", onLoad);
//     }

//     return () => {
//       clearInterval(msgInterval);
//       clearTimeout(minTimer);
//       window.removeEventListener("load", onLoad);
//     };
//   }, []);

//   return (
//     <AnimatePresence>
//       {!done && (
//         <motion.div
//           key="loader"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7, ease: "easeInOut" }}
//           className="fixed inset-0 z-50 flex flex-col items-center justify-center"
//           style={{ backgroundColor: "#080808" }}
//         >
//           <div className="relative flex flex-col items-center h-screen justify-center">
//             <Image
//               src={logo}
//               alt="Imran Logo"
//               width={1000}
//               height={1000}
//               className="animate-pulse w-12 md:w-16"
//               priority
//             />

//             <h3 className="text-xl md:text-2xl absolute bottom-10">
//               Dev<span className="opacity-50">Imran</span>.
//             </h3>

//             <div className="flex items-center gap-1.5 md:gap-3 absolute w-max bottom-4">
//               <motion.span
//                 className="block w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/50"
//                 animate={{ opacity: [1, 0.15, 1] }}
//                 transition={{
//                   duration: 1,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />

//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={statusIdx}
//                   initial={{ opacity: 0, y: 5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -5 }}
//                   transition={{ duration: 0.25 }}
//                   className="text-white/30 text-[10px] md:text-xs uppercase"
//                   style={{
//                     letterSpacing: "0.15em",
//                     fontFamily: "'DM Sans', sans-serif",
//                   }}
//                 >
//                   {statusMessages[statusIdx]}
//                 </motion.span>
//               </AnimatePresence>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import logo from "@/images/logo.png";
import { useAppContext } from "@/context/ContextApi";

const statusMessages = [
  "Initializing...",
  "Loading assets...",
  "Preparing portfolio...",
  "Almost ready...",
];

export default function LoadingScreen() {
  const { setIsLoading } = useAppContext();
  const [done, setDone] = useState(false);
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setStatusIdx((i) => Math.min(i + 1, statusMessages.length - 1));
    }, 700);

    let windowLoaded = false;
    let minTimePassed = false;

    const tryFinish = () => {
      if (windowLoaded && minTimePassed) {
        clearInterval(msgInterval);
        setStatusIdx(statusMessages.length - 1);
        setTimeout(() => {
          setDone(true);
          setIsLoading(false); // tell the rest of the app loading is done
        }, 400);
      }
    };

    const minTimer = setTimeout(() => {
      minTimePassed = true;
      tryFinish();
    }, statusMessages.length * 700);

    const onLoad = () => {
      windowLoaded = true;
      tryFinish();
    };

    if (document.readyState === "complete") {
      windowLoaded = true;
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      clearInterval(msgInterval);
      clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#080808" }}
        >
          <div className="relative flex flex-col items-center h-screen justify-center">
            <Image
              src={logo}
              alt="Imran Logo"
              width={1000}
              height={1000}
              className="animate-pulse w-12 md:w-16"
              priority
            />
            <h3 className="text-xl md:text-2xl absolute bottom-10">
              Dev<span className="opacity-50">Imran</span>.
            </h3>
            <div className="flex items-center gap-1.5 md:gap-3 absolute w-max bottom-4">
              <motion.span
                className="block w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/50"
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={statusIdx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="text-white/30 text-[10px] md:text-xs uppercase"
                  style={{
                    letterSpacing: "0.15em",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {statusMessages[statusIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
