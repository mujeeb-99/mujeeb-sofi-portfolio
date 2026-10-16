# Mujeeb Sofi — Developer Portfolio

A responsive React + Vite portfolio with a dark glassmorphism aesthetic, mobile navigation, skill cards, project cards, and a contact form that opens the visitor's email application.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open the terminal in this folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
- Replace `mujeeb.sofi@example.com` in `src/main.jsx` with your real email address.
- Replace GitHub and LinkedIn homepage links with your profile URLs.
- Replace each project `link` with the correct repository/demo URL.
- Add your real CV as `public/mujeeb-sofi-cv.pdf` and add a Download CV link in the header if needed.
- Update skills and project descriptions to reflect your current experience accurately.

## Styling note
The layout is custom CSS. Tailwind CSS and PostCSS configuration are included for adding utility classes as you extend the design. The current stylesheet includes Tailwind directives; if your environment uses Tailwind v4, adapt the PostCSS setup to the v4 plugin (`@tailwindcss/postcss`) or use Tailwind v3 for this config.
