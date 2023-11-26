import { merge } from "lume/core/utils.ts";
import { getHighlighter } from "npm:shiki@0.14.5";
import type Site from "lume/core/site.ts";
import type { Page } from "lume/core/file.ts";

export interface Options {
  /** The list of file extensions this plugin applies to */
  extensions?: string[];

  /** The css selector to apply shiki */
  cssSelector?: string;

  /** Shiki Theme */
  theme?: string;
}

// Default options
export const defaults: Options = {
  extensions: [".html"],
  cssSelector: "pre code",
  theme: "nord",
};

const languageRegex = /\blanguage-([\w-]+)\b/i;

export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Site) => {
    site.process(options.extensions, (page) => shiki(page));

    async function shiki(page: Page) {
      const highlighter = await getHighlighter({ theme: options.theme });

      page.document!.querySelectorAll<HTMLElement>(options.cssSelector!)
        .forEach((element: Element) => {
          const lang: string = element.className.match(languageRegex)?.[1];

          if (lang !== null) {
            const tempElement = page.document!.createElement("div");
            tempElement.innerHTML = highlighter.codeToHtml(
              element.textContent,
              { lang: "ts" },
            );

            element.parentNode.replaceWith(tempElement.firstChild);
          }
        });
    }
  };
}
