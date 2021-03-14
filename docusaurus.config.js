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
          to: "docs/users/user",
          activeBasePath: "docs/users/user",
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
        "docs/users/user": {
          sidebarPath: require.resolve("./sidebarss.js"),
          editUrl: "https://github.com/hisptz/hris-api-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/preset-classic",
      {
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};
