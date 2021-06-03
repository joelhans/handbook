/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Athens Research Handbook',
  tagline: 'Dinosaurs are cool',
  url: 'https://handbook.',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'athensresearch', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Athens Research Handbook',
      logo: {
        alt: 'Athens Research',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'main-stuff/using-athens-product/README',
          position: 'left',
          label: 'Using Athens',
        },
        {
          type: 'doc',
          docId: 'main-stuff/contributing',
          position: 'left',
          label: 'Contribute',
        },
        {
          type: 'doc',
          docId: 'main-stuff/learning-at-athens-academy-education/README',
          position: 'left',
          label: 'Athens Academy',
        },
        {
          type: 'doc',
          docId: 'main-stuff/athens-research-governance-and-operations/README',
          position: 'left',
          label: 'Athens Research',
        },
        {
          type: 'doc',
          docId: 'help/contact-us',
          position: 'left',
          label: 'Help',
        },
        {
          href: 'https://github.com/athensresearch/athens',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Using Athens',
              to: 'main-stuff/using-athens-product/getting-started',
            },
            {
              label: 'Contribute',
              to: 'main-stuff/contributing',
            },
            {
              label: 'Athens Academy',
              to: 'main-stuff/learning-at-athens-academy-education/README',
            },
            {
              label: 'Athens Research',
              to: 'main-stuff/athens-research-governance-and-operations/README',
            },
            {
              label: 'Help',
              to: 'help/contact-us',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Blog',
              href: 'https://athensresearch.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/athensresearch/athens',
            },
            {
              label: 'Athens Research',
              href: 'https://athensresearch.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    // 'docusaurus-tailwindcss-loader',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/athensresearch/handbook/edit/main/',
        },
        docsHelp: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/athensresearch/handbook/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
