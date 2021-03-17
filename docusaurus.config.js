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
      hideOnScroll: false,
      //style: "primary",
      logo: {
        alt: "HRHIS Logo",
        src: "img/favicon.png",
      },
      items: [
        {
          to: "docs/users/user",
          label: "User Manual",
          position: "left",
        },
        {
          to: "docs/developers/basics",
          label: "Developer",
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
    respectPrefersColorScheme: true,
    switchConfig: {
      darkIcon: "🌚",
    },
    announcementBar: {
      id: "info",
      content:
        "Discover the power of HRHIS through user and developer documentation",
      backgroundColor: "light-green",
      textColor: "white",
      isCloseable: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.json"),
          editUrl: "https://github.com/hisptz/hris-api-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
