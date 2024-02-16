import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="w-[1200px] mx-auto px-10">
        <Header />
        <Hero />
        <Pricing />
        <Features />
      </div>

      <div className="bg-black">
        <div className="w-[1200px] mx-auto px-10">
          <Footer/> 
        </div>
      </div>
    </main>
  );
}
