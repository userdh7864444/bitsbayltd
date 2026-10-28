import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import prerender from '@prerenderer/rollup-plugin'

const routes = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/technologies',
  '/contact',
  '/blog',
  '/privacy-policy',
  '/404',

  // Service Hubs & Details
  '/services/app-development',
  '/services/web-applications',
  '/services/product-engineering',
  '/services/trending-technologies',
  '/services/amazon',
  '/services/amazon-services',
  '/services/ad-services',
  '/services/staff-augmentation',
  '/services/android-app-development',
  '/services/ios-app-development',
  '/services/cross-platform-mobile-app-development',
  '/services/custom-web-app',
  '/services/progressive-web-apps',
  '/services/front-end-development-services',
  '/services/saas-application-development',
  '/services/custom-application-development',
  '/services/iot-development',
  '/services/chatbot-development',
  '/services/augmented-reality-app-development',
  '/services/learn-product-development',

  // Products
  '/products/listing-integrity',

  // Projects
  '/projects/seized',
  '/projects/courier-label',
  '/projects/ecommsync',
  '/projects/skusnap',
  '/projects/a5',
  '/projects/myship',
  '/projects/automaz',
  '/projects/novoplaza',
  '/projects/taskii',
  '/projects/team-connection',
  '/projects/snippy',

  // Blog Posts
  '/blog/sp-api-the-ultimate-solution-for-e-commerce-development',
  '/blog/impact-of-artificial-intelligence-on-everyday-life',
  '/blog/what-can-we-achieve-by-merging-ai-and-cryptocurrency',
  '/blog/amazon-tools',
  '/blog/integrating-e-commerce',
  '/blog/the-power-of-analytics',
  '/blog/how-much-does-a-custom-web-app-cost-in-2026',
  '/blog/how-to-fix-amazon-listing-suppression',
  '/blog/react-vs-nextjs-for-saas-mvp',
]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      routes,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterDocumentEvent: 'app-rendered',
        maxConcurrentRoutes: 1,
        // Prerender at a desktop width so responsive state that is set after
        // mount (e.g. the testimonials carousel's cards per view) matches the
        // first client render, which lets the prerendered markup hydrate cleanly.
        viewport: { width: 1280, height: 900 },
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
        skipThirdPartyRequests: true,
        navigationOptions: {
          waitUntil: 'domcontentloaded',
          timeout: 60000,
        },
      },
    }),
  ],
  server: { port: 5173 },
})
