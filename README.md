

## Run locally
1. Install Node.js 18 or later.
2. Extract this ZIP.
3. Open a terminal in this folder.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (normally http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Included routes
- `/` — Home
- `/puppies` — Puppy listing with breed, location and text filters
- `/puppies/:id` — Puppy details, gallery controls and WhatsApp enquiry
- `/happy-families`
- `/how-it-works`
- `/delivery`
- `/faq`
- `/contact` — Contact form opens a pre-filled WhatsApp message

## Important notes
- This is a clean-room frontend recreation, not the original site's source code.
- The image URLs are remote illustrative puppy photos. Replace them with approved original puppy photographs to achieve a closer visual match. Images require an internet connection.
- Puppy inventory, availability, health records, delivery terms, address and contact details are demo content based on publicly visible reference copy. Verify every operational detail before publishing.
- The contact form uses WhatsApp deep linking; it does not store submissions or send email to a backend.
- No private backend, original CMS, analytics, payment service or proprietary assets are included.
- For a true pixel-perfect match, compare screenshots at the same viewport size and replace fonts, image crops, spacing and assets with verified originals where licensed/available.

## Structure
```
src/
  components/   Header, Footer, PuppyCard, SectionHeading
  data/         Puppy, family and FAQ demo data
  pages/        Home, listing, detail and content pages
  App.jsx
  main.jsx
  styles.css
public/
  images/       Place local approved assets here
```
