"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import logo from "@/images/logo.png";

import Image from "next/image";
import { CodeXml } from "lucide-react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    github: string;
    idx: number;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] bg-background py-40 overflow-hidden  antialiased relative z-20 flex flex-col self-auto perspective-[1000px] transform-3d"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.idx}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.idx}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.idx}
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          rotateZ,
          opacity,
        }}
        className="w-full  h-max absolute top-1/4 left-0  -z-10 "
      >
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className="w-96 mx-auto opacity-20 object-cover pointer-events-none select-none"
        />
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="px-[18.3%] relative mx-auto py-20 md:py-40  w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-foreground">
        The Ultimate
        <br /> development studio
      </h1>

      <p className="max-w-2xl text-base md:text-xl mt-8 text-foreground/80">
        I build beautiful, high-performance web experiences using modern
        technologies and frameworks. Passionate about clean code and thoughtful
        design, I turn ideas into impactful digital products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    github: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-120 relative shrink-0"
    >
      <a
        target="_blank"
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="1000"
          width="1000"
          className=" absolute object-cover  h-full  w-full inset-0 "
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>

      {product.github && (
        <a
          target="_blank"
          href={product.github}
          className="absolute bottom-4 right-4 opacity-0 group-hover/product:opacity-100 text-white cursor-pointer hover:opacity-70 transition duration-200 px-4 py-2 flex items-center gap-2 rounded-xl text-sm"
        >
          <CodeXml className="w-5" /> View Code
        </a>
      )}
    </motion.div>
  );
};
