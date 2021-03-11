module.exports = {
  title: "HRHIS",
  tagline:
    "Documentation for collection, collation, storage of Human resource for health Information software.",
  url: "https://hisptz.github.io/hris-api-docs/",
  baseUrl: "/hris-api-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "hisptz", // Usually your GitHub org/user name.
  projectName: "hris-api-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "HRHIS",
      logo: {
        alt: "HRHIS Logo",
        src: "img/favicon.png",
      },
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Developer",
          position: "left",
        },
        {
          to: "users",
          activeBasePath: "docs",
          label: "User Manual",
          position: "left",
        },
        {
          href: "https://github.com/hisptz/hris-api-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "GitHub",
          items: [
            /*
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },*/
          ],
        },
        {
          title: "Contact",
          items: [
            /*
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },*/
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UDSM-DHIS2`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/hisptz/hris-api-docs/blob/main/",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/hisptz/hris-api-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
