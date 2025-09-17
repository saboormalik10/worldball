This is a [Next.js](https://nextjs.org) + **Tailwind CSS 4** TypeScript starter.

## Getting Started

First, install dependencies (Yarn only) and run the dev server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Tailwind CSS

Tailwind v4 is enabled via the PostCSS plugin `@tailwindcss/postcss` and the `@import "tailwindcss";` directive inside `src/app/globals.css`.

Config file: `tailwind.config.ts` (extend theme, add plugins, etc.)

Add utility classes directly to your JSX. Example:

```tsx
<button className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium shadow">Click</button>
```

Create components in `src/components`. Example provided: `Callout`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

Recommended: Vercel. Build command (auto-detected): `yarn build`.
Production start (if self-hosting): `yarn start` after `yarn build`.
# worldball
