import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InventorySection from "./components/InventorySection";
import ShowroomSection from "./components/ShowroomSection";
import FinanceSection from "./components/FinanceSection";
import SupportSection from "./components/SupportSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ position: 'relative', background: 'black', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <HeroSection />
      <InventorySection />
      <ShowroomSection />
      <FinanceSection />
      <SupportSection />
      <Footer />
    </main>
  );
}
