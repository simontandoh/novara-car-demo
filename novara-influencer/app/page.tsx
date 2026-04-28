import { EmbeddedStaticPage } from "@/components/legacy/EmbeddedStaticPage";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  if (!siteConfig.staticSourcePath) {
    throw new Error("staticSourcePath is required for this demo.");
  }

  return <EmbeddedStaticPage sourcePath={siteConfig.staticSourcePath} />;
}
