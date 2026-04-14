// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [{ 
    provider: fontProviders.fontsource(),
    name: "Roboto",
    cssVariable: "--font-roboto",
    fallbacks: ["sans-serif"],
    weights: [400, 500, 600, 700, 800, 900],
    styles: ["normal", "italic"],
  }],
  vite: {
    plugins: [tailwindcss()]
  }
});