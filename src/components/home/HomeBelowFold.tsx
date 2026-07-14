import { BusinessSection } from "./BusinessSection";
import { StatementBand } from "./StatementBand";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { CompanySpotlightSection } from "./CompanySpotlightSection";
import { StrengthSection } from "./StrengthSection";
import { AreaSection } from "./AreaSection";
import { CompanyProfileSection } from "./CompanyProfileSection";
import { AccessSection } from "./AccessSection";
import { NewsSection } from "./NewsSection";
import { CTASection } from "./CTASection";

export function HomeBelowFold() {
  return (
    <>
      <BusinessSection />
      <StatementBand />
      <CaseStudiesSection />
      <CompanySpotlightSection />
      <StrengthSection />
      <AreaSection />
      <CompanyProfileSection />
      <AccessSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
