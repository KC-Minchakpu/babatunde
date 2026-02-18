import Hero from "@/components/Hero/Hero";
import Values from "@/components/Values/Values";
import Story from "@/components/Story/Story";
import Categories from "@/components/Categories/Categories";
import WhyChooseUs from "@/components/Why/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";


export default function Home() {
  return (
    <>
     <main>
      <Hero />
      <Values />
      <Story />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
     </main>
    </>
  );
}
