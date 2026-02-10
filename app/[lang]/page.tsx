import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import {
  getLandingCopy,
  isSupportedLanguage,
  type Language
} from "@/components/landing/content";

type PageProps = {
  params: {
    lang: Language;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const copy = getLandingCopy(params.lang);
  return {
    title: copy.seo.title,
    description: copy.seo.description
  };
}

export default function HomePage({ params }: PageProps) {
  if (!isSupportedLanguage(params.lang)) {
    notFound();
  }

  const copy = getLandingCopy(params.lang);

  return (
    <main className="landing">
      <HeroSection copy={copy} />
      <PhoneStackSection />
      <RewardsSection copy={copy.rewards} />
      <MoneyMattersSection copy={copy.money} />
      <ExperienceSection copy={copy.experience} />
      <ImageBreakSection />
      <SecuritySection copy={copy.security} />
      <TrustSection copy={copy.trust} />
      <RatingsSection copy={copy.ratings} />
      <SiteFooter copy={copy.footer} />
    </main>
  );
}
