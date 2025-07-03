import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // hoặc 'edge'
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://test-gg-seven.vercel.app/',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react({
      include: ['**/react/*'],
    }),
    sitemap(),
  ],
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
