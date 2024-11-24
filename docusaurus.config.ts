import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AutoParams - Test Data Generator in Java and Kotlin.',
  tagline: 'Enhance your TDD experience!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://autoparams.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'AutoParams', // Usually your GitHub org/user name.
  projectName: 'autoparams.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
      },
      ko: {
        htmlLang: 'ko',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'description', content: 'AutoParams is a versatile test data generator designed for parameterized tests in Java and Kotlin, drawing inspiration from AutoFixture.' },
      { name: 'google-site-verification', content: 'JTQC3Qse5xJxBr7GLaV4aYsN43IKAOO0pUhBayPB0wk'},
    ],
    navbar: {
      title: 'AutoParams',
      logo: {
        alt: 'AutoParams Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/AutoParams/AutoParams',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} AutoParams contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oceanicNext,
      darkTheme: prismThemes.gruvboxMaterialDark,
      additionalLanguages: ['java', 'kotlin', 'gradle'],
    },
  } satisfies Preset.ThemeConfig,
  future: {
    // Disabled because hot reload fails in Korean
    // experimental_faster: true,
  }
};

export default config;
