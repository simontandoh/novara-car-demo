import fs from "node:fs";
import path from "node:path";

import Script from "next/script";

function extractStaticSource() {
  const sourcePath = path.join(process.cwd(), "index.html");
  const html = fs.readFileSync(sourcePath, "utf8");

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const bodyIdMatch = html.match(/<body[^>]*id=["']([^"']+)["'][^>]*>/i);

  const rawBody = bodyMatch ? bodyMatch[1] : html;
  const scripts = [...rawBody.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);
  const bodyHtml = rawBody.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").trim();

  return {
    styles: styleMatch ? styleMatch[1].trim() : "",
    bodyId: bodyIdMatch ? bodyIdMatch[1] : undefined,
    bodyHtml,
    scripts,
  };
}

export default function HomePage() {
  const { styles, bodyId, bodyHtml, scripts } = extractStaticSource();

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
