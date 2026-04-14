import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jelujr17.github.io',
  integrations: [tailwind()],
  output: 'static',
});
