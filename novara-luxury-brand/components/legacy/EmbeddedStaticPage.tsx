import Script from "next/script";

import { parseStaticHtmlSource } from "@/lib/parseStaticHtmlSource";

type EmbeddedStaticPageProps = {
  sourcePath: string;
};

export function EmbeddedStaticPage({ sourcePath }: EmbeddedStaticPageProps) {
  const { styles, bodyId, bodyHtml, scripts } = parseStaticHtmlSource(sourcePath);

  return (
    <>
      {styles ? <style dangerouslySetInnerHTML={{ __html: styles }} /> : null}
      <div id={bodyId} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script
        id="novara-form-action-normalizer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:
            "document.querySelectorAll('form').forEach(function (form) { if (!form.getAttribute('method')) form.setAttribute('method', 'POST'); if (!form.getAttribute('action')) form.setAttribute('action', '/api/lead'); });",
        }}
      />
      {scripts.map((script, index) => (
        <Script
          key={"static-script-" + index}
          id={"static-script-" + index}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: script }}
        />
      ))}
    </>
  );
}
