import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test-pages/blog',
    component: ComponentCreator('/test-pages/blog', '035'),
    exact: true
  },
  {
    path: '/test-pages/blog/archive',
    component: ComponentCreator('/test-pages/blog/archive', '9e5'),
    exact: true
  },
  {
    path: '/test-pages/blog/first-blog-post',
    component: ComponentCreator('/test-pages/blog/first-blog-post', '366'),
    exact: true
  },
  {
    path: '/test-pages/blog/long-blog-post',
    component: ComponentCreator('/test-pages/blog/long-blog-post', '21e'),
    exact: true
  },
  {
    path: '/test-pages/blog/mdx-blog-post',
    component: ComponentCreator('/test-pages/blog/mdx-blog-post', '96c'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags',
    component: ComponentCreator('/test-pages/blog/tags', '557'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags/docusaurus',
    component: ComponentCreator('/test-pages/blog/tags/docusaurus', '64e'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags/facebook',
    component: ComponentCreator('/test-pages/blog/tags/facebook', 'f66'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags/hello',
    component: ComponentCreator('/test-pages/blog/tags/hello', '3d7'),
    exact: true
  },
  {
    path: '/test-pages/blog/tags/hola',
    component: ComponentCreator('/test-pages/blog/tags/hola', 'bab'),
    exact: true
  },
  {
    path: '/test-pages/blog/welcome',
    component: ComponentCreator('/test-pages/blog/welcome', 'a7a'),
    exact: true
  },
  {
    path: '/test-pages/markdown-page',
    component: ComponentCreator('/test-pages/markdown-page', '358'),
    exact: true
  },
  {
    path: '/test-pages/docs',
    component: ComponentCreator('/test-pages/docs', '221'),
    routes: [
      {
        path: '/test-pages/docs/category/tutorial---basics',
        component: ComponentCreator('/test-pages/docs/category/tutorial---basics', '2e3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/category/tutorial---extras',
        component: ComponentCreator('/test-pages/docs/category/tutorial---extras', 'dac'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/intro',
        component: ComponentCreator('/test-pages/docs/intro', 'ad6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/congratulations', '5f1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/create-a-blog-post', 'c4b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/create-a-document', 'be6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/create-a-page', 'f43'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/deploy-your-site', '7b4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/test-pages/docs/tutorial-basics/markdown-features', '013'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/test-pages/docs/tutorial-extras/manage-docs-versions', '100'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test-pages/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/test-pages/docs/tutorial-extras/translate-your-site', 'f80'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/test-pages/',
    component: ComponentCreator('/test-pages/', 'cbc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
