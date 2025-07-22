import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection";
import InfoSection from "@/components/InfoSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import EventsSection from "@/components/EventsSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MissionSection />
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
