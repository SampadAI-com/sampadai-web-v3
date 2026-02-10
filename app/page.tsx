import ExperienceSection from "@/components/landing/ExperienceSection";
import HeroSection from "@/components/landing/HeroSection";
import ImageBreakSection from "@/components/landing/ImageBreakSection";
import MoneyMattersSection from "@/components/landing/MoneyMattersSection";
import PhoneStackSection from "@/components/landing/PhoneStackSection";
import RatingsSection from "@/components/landing/RatingsSection";
import RewardsSection from "@/components/landing/RewardsSection";
import SecuritySection from "@/components/landing/SecuritySection";
import SiteFooter from "@/components/landing/SiteFooter";
import TrustSection from "@/components/landing/TrustSection";

export default function HomePage() {
  return (
    <main className="landing">
      <HeroSection />
      <PhoneStackSection />
      <RewardsSection />
      <MoneyMattersSection />
      <ExperienceSection />
      <ImageBreakSection />
      <SecuritySection />
      <TrustSection />
      <RatingsSection />
      <SiteFooter />
    </main>
  );
}
