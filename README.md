# Changelog

Our open-source changelog. Forked from [June's changelog](https://github.com/juneHQ/changelog).

## Getting started

The easiest way to try this starter is to run it locally on your computer.

You will need to clone the repository, and copy the `.env.example` file as `.env`.

Then install dependencies and start the Next.js server:

```bash
# Using yarn
yarn install
yarn dev

# Using npm
npm install
npm run dev
```

If you want to change the default environment variables, create a `.env.local` file like this:

```
cp .env.local.example .env.local
```

## Deploying

You can deploy your blog to any hosting provider that supports Next.js. We recommend [Vercel](https://vercel.com), as it is the easiest way to deploy Next.js apps.

## Routes

- `/pages/:pageNumber` - displays paginated articles
- `/` - redirects to `/pages/0`
- `/changelogs/:id` - displays one article

## File structure

```bash

bin             # Scripts
components      # Reusable components
├─ core
├─ mdx-layout.tsx
└─ ...
lib              # Types, theme, utilities, services
pages
├─ changelogs    # MDX articles
├─ page
│  └─ [page].tsx # Paginated articles
├─ _app.tsx
└─ _middleware.ts
...
```

## Writing articles

To write a new blog post, create a new `.mdx` file in the `/pages/changelogs` directory.

### Anatomy of an MDX article

MDX is a superset of markdown that lets you write JSX directly in your markdown files. It is a powerful way to add dynamic interactivity and embed components within your content, helping you to bring your pages to life.

![mdx-preview](/mdx-preview.png)

Learn more 👉 [Next.js: Using MDX](https://nextjs.org/docs/advanced-features/using-mdx), [Using MDX](https://mdxjs.com/docs/using-mdx/)

## Branding customization

Most of the branding elements can be found in `<Navbar>` and `<Footer>` components. To customize these components, update the code in these directories:

- [`components/core/navbar/index.tsx`](https://github.com/CrowdDotDev/changelog/tree/master/components/core/navbar)
- [`components/core/footer/index.tsx`](https://github.com/CrowdDotDev/changelog/tree/master/components/core/footer)
