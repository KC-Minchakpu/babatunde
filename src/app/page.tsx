import Hero from "@/components/Hero/Hero";
import Values from "@/components/Values/Values";
import Story from "@/components/Story/Story";
import Categories from "@/components/Categories/Categories";
import WhyChooseUs from "@/components/Why/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import HomeGallery from "@/components/Gallery/HomeGallery";


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
      <HomeGallery />
      <Contact />
     </main>
    </>
  );
}
