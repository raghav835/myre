import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import RoyalEnfieldHeroCard from "./sections/RoyalEnfieldHeroCard.jsx";
import MotorcycleCustomizer from "./sections/MotorcycleCustomizer.jsx";
import MotorcycleHero from "./sections/MotorcycleHero.jsx";
import MobilePWALayout from "./pages/index.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      {/* Add unique IDs to each section */}
      <Header />
      <section id="Hero">
        <RoyalEnfieldHeroCard />
      </section>
      <section id="MIY">
        <MotorcycleCustomizer />
      </section>
      <section id="Motorcycle">
        <MotorcycleHero />
      </section>
      <section id="Ride">
        <MobilePWALayout />
      </section>
   
    </main>
  );
};

export default App;
