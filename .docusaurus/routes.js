import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: 'test-pages/blog',
    component: ComponentCreator('test-pages/blog', '4d7'),
    exact: true
  },
  {
    path: 'test-pages/blog/archive',
    component: ComponentCreator('test-pages/blog/archive', '5f8'),
    exact: true
  },
  {
    path: 'test-pages/blog/first-blog-post',
    component: ComponentCreator('test-pages/blog/first-blog-post', 'c95'),
    exact: true
  },
  {
    path: 'test-pages/blog/long-blog-post',
    component: ComponentCreator('test-pages/blog/long-blog-post', 'af7'),
    exact: true
  },
  {
    path: 'test-pages/blog/mdx-blog-post',
    component: ComponentCreator('test-pages/blog/mdx-blog-post', '847'),
    exact: true
  },
  {
    path: 'test-pages/blog/tags',
    component: ComponentCreator('test-pages/blog/tags', 'b6a'),
    exact: true
  },
  {
    path: 'test-pages/blog/tags/docusaurus',
    component: ComponentCreator('test-pages/blog/tags/docusaurus', '428'),
    exact: true
  },
  {
    path: 'test-pages/blog/tags/facebook',
    component: ComponentCreator('test-pages/blog/tags/facebook', '768'),
    exact: true
  },
  {
    path: 'test-pages/blog/tags/hello',
    component: ComponentCreator('test-pages/blog/tags/hello', 'b91'),
    exact: true
  },
  {
    path: 'test-pages/blog/tags/hola',
    component: ComponentCreator('test-pages/blog/tags/hola', '35a'),
    exact: true
  },
  {
    path: 'test-pages/blog/welcome',
    component: ComponentCreator('test-pages/blog/welcome', '60d'),
    exact: true
  },
  {
    path: 'test-pages/markdown-page',
    component: ComponentCreator('test-pages/markdown-page', 'e58'),
    exact: true
  },
  {
    path: 'test-pages/docs',
    component: ComponentCreator('test-pages/docs', '75b'),
    routes: [
      {
        path: 'test-pages/docs/category/tutorial---basics',
        component: ComponentCreator('test-pages/docs/category/tutorial---basics', '6aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/category/tutorial---extras',
        component: ComponentCreator('test-pages/docs/category/tutorial---extras', '3aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/intro',
        component: ComponentCreator('test-pages/docs/intro', '829'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/tutorial-basics/congratulations',
        component: ComponentCreator('test-pages/docs/tutorial-basics/congratulations', 'dfb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('test-pages/docs/tutorial-basics/create-a-blog-post', 'bd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('test-pages/docs/tutorial-basics/create-a-document', '785'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('test-pages/docs/tutorial-basics/create-a-page', 'b10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('test-pages/docs/tutorial-basics/deploy-your-site', 'bfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('test-pages/docs/tutorial-basics/markdown-features', '383'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('test-pages/docs/tutorial-extras/manage-docs-versions', 'bfb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'test-pages/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('test-pages/docs/tutorial-extras/translate-your-site', '3e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: 'test-pages/',
    component: ComponentCreator('test-pages/', '5de'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
