import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test-pages/blog',
    component: ComponentCreator('/test-pages/blog', 'f2d'),
    exact: true
  },
  {
    path: '/test-pages/blog/archive',
    component: ComponentCreator('/test-pages/blog/archive', '4b4'),
    exact: true
  },
  {
    path: '/test-pages/blog/first-blog-post',
    component: ComponentCreator('/test-pages/blog/first-blog-post', 'e7a'),
    exact: true
  },
  {
    path: '/test-pages/blog/long-blog-post',
    component: ComponentCreator('/test-pages/blog/long-blog-post', '408'),
    exact: true
  },
  {
    path: '/test-pages/blog/mdx-blog-post',
    component: ComponentCreator('/test-pages/blog/mdx-blog-post', '15b'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags',
    component: ComponentCreator('/test-pages/blog/tags', '361'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags/docusaurus',
    component: ComponentCreator('/test-pages/blog/tags/docusaurus', '413'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags/facebook',
    component: ComponentCreator('/test-pages/blog/tags/facebook', 'e14'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags/hello',
    component: ComponentCreator('/test-pages/blog/tags/hello', 'a59'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags/hola',
    component: ComponentCreator('/test-pages/blog/tags/hola', '897'),
    exact: true
  },
  {
    path: '/test-pages/blog/welcome',
    component: ComponentCreator('/test-pages/blog/welcome', '1b6'),
    exact: true
  },
  {
    path: '/test-pages/markdown-page',
    component: ComponentCreator('/test-pages/markdown-page', '61b'),
    exact: true
  },
  {
    path: '/test-pages/docs',
    component: ComponentCreator('/test-pages/docs', 'cc6'),
    routes: [
      {
        path: '/test-pages/docs/category/tutorial---basics',
        component: ComponentCreator('/test-pages/docs/category/tutorial---basics', 'e8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/category/tutorial---extras',
        component: ComponentCreator('/test-pages/docs/category/tutorial---extras', 'e83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/intro',
        component: ComponentCreator('/test-pages/docs/intro', '022'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/congratulations', '009'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/create-a-blog-post', '847'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/create-a-document', '8da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/create-a-page', '155'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/deploy-your-site', '0e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/markdown-features', 'b8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/test-pages/docs/tutorial-extras/manage-docs-versions', 'c80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/test-pages/docs/tutorial-extras/translate-your-site', '8a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/test-pages/',
    component: ComponentCreator('/test-pages/', 'e6a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
