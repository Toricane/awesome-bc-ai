// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // --- OPTION 2: Default GitHub Pages Subpath ---
  // Use these lines while hosted at bc-ai-ecosystem.github.io/awesome-bc-ai/
  site: 'https://bc-ai-ecosystem.github.io',
  base: '/awesome-bc-ai',
  // ----------------------------------------------

  // --- OPTION 1: Custom Domain (awesome.bc-ai.ca) ---
  // TODO: When DNS is ready and custom domain is added to GitHub Pages settings,
  // uncomment the line below and delete/comment out OPTION 2 above.
  // site: 'https://awesome.bc-ai.ca',
  // --------------------------------------------------

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});