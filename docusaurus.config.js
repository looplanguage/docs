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
          apiKey: "eec66f8bd25976fb30cae8cd3918edc0",
          indexName: "looplang",

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: see doc section below
          appId: "BH4D9OD16A",

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
                  label: "Installation",
                  to: "/docs/usage/installation",
                },
                {
                  label: "First App",
                  to: "/docs/usage/first-app",
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
                {
                  label: "GitHub",
                  href: "https://github.com/looplanguage",
                },
                {
                  label: "Discord",
                  href: "https://discord.gg/Q8uwtTMD",
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
                  label: "Contributor Guidelines",
                  to: "/contributor_guidelines"
                },
                {
                  label: "Development Guidelines",
                  href: "https://github.com/looplanguage/.github/issues/1"
                },
              ],
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Code of Conduct",
                  to: "/conduct",
                },
                {
                  label: "Privacy",
                  to: "/privacy",
                },
                {
                  label: "This site is powered by Netlify",
                  href: "https://www.netlify.com/",
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
