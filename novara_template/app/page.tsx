import { TemplatePlaceholder } from "@/components/template-placeholder";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return <TemplatePlaceholder config={siteConfig} />;
}
