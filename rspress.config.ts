// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'gulp',
  description: 'About gulp',
  icon: '/favicon.ico',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    footer: {
      message: `Copyright © 2020-${new Date().getFullYear()} My Project, Inc. Built with Rspress`,
    },
    hideNavbar: 'auto',
    search: false,
    sidebar: {
      '/': [
        {
          text: 'What is gulp?',
          link: '/index',
        },
        {
          text: 'Intro',
          link: '/intro',
        },
        {
          text: 'Getting Started',
          collapsible: false,
          items: [
            {
              text: 'Quick Start',
              link: '/getting-started/quick-start',
            },
            {
              text: 'JavaScript and Gulpfiles',
              link: '/getting-started/javascript-and-gulpfiles',
            },
            {
              text: 'Creating Tasks',
              link: '/getting-started/creating-tasks',
            },
            {
              text: 'Async Completion',
              link: '/getting-started/async-completion',
            },
            {
              text: 'Working with Files',
              link: '/getting-started/working-with-files',
            },
            {
              text: 'Explaining Globs',
              link: '/getting-started/explaining-globs',
            },
            {
              text: 'Using Plugins',
              link: '/getting-started/using-plugins',
            },
            {
              text: 'Watching Files',
              link: '/getting-started/watching-files',
            },
          ],
        },
        {
          text: 'Advanced',
          collapsible: false,
          items: [
            {
              text: 'Creating Custom Registries',
              link: '/advanced/creating-custom-registries',
            },
          ],
        },
        {
          text: 'Recipes',
          collapsible: false,
          items: [
            {
              text: 'Automate Releases',
              link: '/recipes/automate-releases',
            },
          ],
        },
        {
          text: 'API',
          collapsible: false,
          items: [
            {
              text: 'Concepts',
              link: '/api/concepts',
            },
            {
              text: 'src()',
              link: '/api/src',
            },
            {
              text: 'registry()',
              link: '/api/registry',
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/gulpjs/gulp',
      },
    ],
  },
  markdown: {
    // checkDeadLinks: true,
    showLineNumbers: true,
  },
});
