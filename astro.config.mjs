import { defineConfig } from 'astro/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import mdx from '@astrojs/mdx';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [],
    resolve: {
      alias: {
        $: path.resolve(__dirname, './src')
      }
    }
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'css-variables' },
    gfm: true
  },
  integrations: [mdx()]
});
