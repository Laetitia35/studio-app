import Navbar from '../components/studio/Navbar';
import HeroSection from '../components/studio/HeroSection';
import ProblemsSection from '../components/studio/ProblemsSection';
import SolutionSection from '../components/studio/SolutionSection';
import ServicesSection from '../components/studio/ServicesSection';
import PricingSection from '../components/studio/PricingSection';
import WhySection from '../components/studio/WhySection';
import ContactSection from '../components/studio/ContactSection';
import Footer from '../components/studio/Footer';

const HERO_IMAGE = 'https://media.base44.com/images/public/69e88dad450d027b3da893fb/70a71c751_generated_b7b290a1.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <ProblemsSection />
      <SolutionSection />
      <ServicesSection />
      <PricingSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
