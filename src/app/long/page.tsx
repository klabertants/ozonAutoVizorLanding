import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ErrorCategoriesSection from "@/components/ErrorCategoriesSection";
import ComparisonTableSection from "@/components/ComparisonTableSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import CTASection from "@/components/CTASection";

export default function LongLanding() {
  return (
    <main>
      <HeroSection />
      <PainPointsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ErrorCategoriesSection />
      <ComparisonTableSection />
      <CompatibilitySection />
      <CTASection />
    </main>
  );
}
