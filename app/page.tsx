import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import HorizontalScroll from "@/components/Services/HorizontalScroll";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";

import SmoothScroll from "@/context/SmoothScroll";
export default function page() {
  return (
    <div>
      <div id="smooth-container">
        <SmoothScroll />
        <Banner />
        <Skills />
        <Projects />
        {/* <Services /> */}
        <HorizontalScroll />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
