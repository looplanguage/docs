// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Loop Language",
    tagline: "A modern dynamic type-safe, programming language.",
    url: "https://looplang.org/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "looplanguage", // Usually your GitHub org/user name.
    projectName: "looplanguage.github.io", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/looplanguage/looplanguage.github.io/edit/main",
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl: "https://github.com/looplanguage/looplanguage.github.io/edit/main/blog",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          apiKey: "YOUR_API_KEY",
          indexName: "YOUR_INDEX_NAME",

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: see doc section below
          appId: "YOUR_APP_ID",

          // Optional: Algolia search parameters
          searchParameters: {},

          //... other Algolia params
        },
        navbar: {
          title: "Loop",
          logo: {
            alt: "Loop Logo",
            src: "img/logo.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Docs",
            },
            {
              to: "/blog",
              label: "Updates",
              position: "left",
            },
            {
              href: "https://github.com/looplanguage",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Introduction",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Twitter",
                  href: "https://twitter.com/kanersps",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Updates",
                  to: "/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/looplanguage",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Loop Language`,
        },
        prism: {
          theme: undefined,
        },
      }),
  }
);
