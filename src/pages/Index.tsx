import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/AboutUsSection";
import TeamSection from "@/components/TeamSection";
import InfoSection from "@/components/InfoSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import EventsSection from "@/components/EventsSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import AboutUsSection from "@/components/AboutUsSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <InfoSection />
      <TeamSection />
      <ActivitiesSection />
      <EventsSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
