import { defineConfig } from 'astro/config';


import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [],
    resolve: {
      alias: {
        '$': path.resolve(__dirname, './src')
      }
    },  
  }
});
