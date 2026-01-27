import Banner from "@/components/Banner/Banner";
import Skills from "@/components/Skills/Skills";

export default function page() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section className="px-[18.3%] bg-foreground ">
        <Skills />
      </section>
    </div>
  );
}
