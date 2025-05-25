import Hero from "./_components/Hero";
import Instructions from "./_components/Instructions";
import Services from "./_components/Services";

export default function HomePage() {
  return (
    <main className="font-montserrat pt-20 flex justify-center items-center gap-5 flex-col">
      <Hero/>
      <Services/>
      <Instructions/>
    </main>
  );
}
