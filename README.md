# Dreamy Pixel Studio

A production-ready, single-page React + Vite + TypeScript website for Dreamy Pixel Studio, using Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Responsive sticky navigation with mobile menu
- Hero section with local CSS/SVG website mockup
- Four service packages and service-to-contact preselection
- Portfolio gallery with category filters and clearly labelled demo concepts
- Four-step process, pricing, about, expectations, FAQ, contact, and footer sections
- Accessible accordions, focus states, form validation, reduced-motion support
- Email-based contact fallback using `mailto:` (no fake backend)
- Optional WhatsApp CTA controlled by `VITE_WHATSAPP_NUMBER`
- SEO metadata and Open Graph metadata
- No fabricated reviews, client logos, awards, or achievements

## Local development

```bash
npm install
npm run dev
```

## Production check/build

```bash
npm run check
npm run build
npm run preview
```

## Optional WhatsApp configuration

Copy `.env.example` to `.env` and set:

```text
VITE_WHATSAPP_NUMBER=919876543210
```

Use digits only in international format. Leave it blank to keep WhatsApp hidden.

## Contact form limitation

There is intentionally no backend or form service in the base project. The contact form validates the fields and opens the user's email client with an encoded subject/body addressed to `dreamypixel1504@gmail.com`. This is an honest fallback rather than pretending submissions are stored.

For real server-side submissions, connect the form to a service such as Formspree, Resend, EmailJS, a serverless function, or your own backend and update the form handler accordingly. Add any required secret keys through environment variables rather than committing them.

## Vercel deployment

1. Push the project to GitHub/GitLab/Bitbucket.
2. Import the repository into Vercel.
3. Vercel should detect Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add `VITE_WHATSAPP_NUMBER` only if a real WhatsApp number is available.
7. Deploy.

Because this is a single-page site without client-side routing, no rewrite rule is required.
