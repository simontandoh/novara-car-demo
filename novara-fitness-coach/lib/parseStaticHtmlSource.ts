import fs from "node:fs";
import path from "node:path";

export type ParsedStaticHtml = {
  styles: string;
  bodyId: string | undefined;
  bodyHtml: string;
  scripts: string[];
};

export function parseStaticHtmlSource(relativePath: string): ParsedStaticHtml {
  const sourcePath = path.join(/* turbopackIgnore: true */ process.cwd(), relativePath);
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
