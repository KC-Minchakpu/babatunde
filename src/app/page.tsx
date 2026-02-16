import Hero from "@/components/Hero/Hero";
import Values from "@/components/Values/Values";
import Story from "@/components/Story/Story";
import Categories from "@/components/Categories/Categories";


export default function Home() {
  return (
    <>
     <main>
      <Hero />
      <Values />
      <Story />
      <Categories />
     </main>
    </>
  );
}
