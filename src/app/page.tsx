import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LogoTicker from "@/components/LogoTicker";
import BentoGrid from "@/components/BentoGrid";
import OpenSource from "@/components/OpenSource";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="border-x border-t border-sky-400/30 min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <LogoTicker />
      <BentoGrid />
      <OpenSource />
      <Footer />
    </div>
  );
}
