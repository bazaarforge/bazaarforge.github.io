// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BazaarForge',
  tagline: 'Shopify Innovations Tailored for Real-World Challenges',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://bazaarforge.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        as: 'image',
        href: '/img/hero/left.webp',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        as: 'image',
        href: '/img/hero/right.webp',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/smp-logo.svg',
      navbar: {
        title: 'BazaarForge',
        logo: {
          alt: 'BazaarForge Logo',
          src: 'img/smp-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'smartCollectionProSidebar',
            position: 'left',
            label: 'Smart collection pro',
          },
        ],
      },
    }),
};

export default config;
