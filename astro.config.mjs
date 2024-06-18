import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx({
      shikiConfig: {
        themes: {
          light: "one-light",
          dark: "one-dark-pro",
        },

        transformers: [
          transformerNotationDiff(),
          transformerNotationHighlight(),
          transformerNotationWordHighlight(),
          transformerNotationFocus(),
        ],
      },
    }),
    sitemap(),
  ],
});
