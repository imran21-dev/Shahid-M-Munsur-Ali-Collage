import Banner from "@/components/Banner/Banner";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import SmoothScroll from "@/context/SmoothScroll";
export default function page() {
  return (
    <div>
      <div id="smooth-container">
        <SmoothScroll />
        <Banner />
        <Skills />
        <Projects />
        <Services />
      </div>
    </div>
  );
}
