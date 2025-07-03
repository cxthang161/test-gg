import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://test-gg-seven.vercel.app',
  integrations: [
    react({
      include: ['**/react/*'],
    }),
    sitemap(),
  ],
  output: 'server',
  adapter: vercel(),
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});
