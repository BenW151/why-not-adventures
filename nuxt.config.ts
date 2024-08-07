// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  site: {
    url: "https://whynotadventures.co.uk/",
    name: "Why Not Adventures",
  },

  devtools: { enabled: true },

  alias: {
    assets: "/<rootDir>/assets",
  },

  css: ["~/assets/main.css"],

  modules: [
    "nuxt-lucide-icons",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-swiper",
    "@nuxtjs/sitemap",
  ],

  image: {
    format: ["webp"],
  },

  googleFonts: {
    families: {
      "Roboto Slab": {
        wght: [300, 400, 500, 600, 700],
        ital: [100, 400],
      },
      "Roboto Flex": {
        wght: [100, 300, 400, 500, 700, 900],
        ital: [400],
      },
    },
    display: "swap",
  },

  plugins: ["~/plugins/rellax.client.js"],

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  app: {
    pageTransition: { name: "page", appear: true },
    head: {
      title: "Why Not Adventures",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          hid: "description",
          name: "description",
          content:
            "Why Not Adventures offers affordable tours to off the beaten track destinations, delivering expertly crafted itineraries and authentic adventures.",
        },
        {
          name: "keywords",
          content:
            "Affordable Tours, Less Traveled Destinations, Hidden Gems, Budget Travel, Why Not Adventures, Adventure Travel, Off the Beaten Path, Unique Destinations, Travel Deals, Adventure Tours, Explore the Unseen, Travel on a Budget, Discount Travel, Eco-Friendly Travel, Sustainable Tourism, Adventure Seekers, Unexplored Places, Travel Packages, Custom Travel Plans, Travel Itineraries",
        },
        { name: "theme-color", content: "#f2f3f4" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
        {
          property: "og:title",
          content: "Why Not Adventures | Adventure Tours",
        },
        {
          property: "og:description",
          content:
            "Why Not Adventures offers affordable tours to off the beaten track destinations, delivering expertly crafted itineraries and authentic adventures.",
        },
        {
          property: "og:image",
          content: "https://whynotadventures.co.uk/cover.png",
        },
        { property: "og:url", content: "https://whynotadventures.co.uk/" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          property: "og:site_name",
          content: "Why Not Adventures",
        },
        {
          property: "og:locale",
          content: "en_GB",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Why Not Adventures",
            url: "https://whynotadventures.co.uk",
            logo: "https://whynotadventures.co.uk/branding/why-not-adventures-logo-rectangle.png",
            sameAs: [
              "https://www.facebook.com/whynotadventures_",
              "https://www.instagram.com/whynotadventures_",
              // Add more social media profiles here if available
            ],
            description:
              "Why Not Adventures offers affordable tours to off the beaten track destinations, delivering expertly crafted itineraries and authentic adventures.",
          },
        },
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://whynotadventures.co.uk/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Destinations",
                item: "https://whynotadventures.co.uk/destinations",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Contact",
                item: "https://whynotadventures.co.uk/contact",
              },
              // Add more breadcrumbs as needed
            ],
          },
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
  },

  compatibilityDate: "2024-07-05",
});
