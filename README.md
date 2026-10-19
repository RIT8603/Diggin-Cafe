<<<<<<< HEAD
# DIGGIN CAFE: Website Redesign Demo

A responsive React + Vite redesign demo for **Diggin**, Delhi (5 outlets plus Tagore Garden coming soon), built as a sales pitch alongside an audit of the current site, www.diggin.co.in.
=======
# DIGGIN CAFE — Website Prototype

A responsive React + Vite sales-demo website for **DIGGIN CAFE, Delhi**.
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in dist/
```

<<<<<<< HEAD
To show the owner on their own phone, upload the `dist/` folder to any static host (for example Netlify Drop) and share that link.

## Audit report

`audit/diggin-website-review.html` is the review of diggin.co.in. It covers Lighthouse scores compared with this demo, 12 ranked issues, and screenshot evidence. The screenshots are in the same folder.

## Editing content

All content lives in **`src/data/siteContent.js`**.

| Content | Source / status |
| --- | --- |
| Outlets, map links, phone numbers, Instagram, Facebook | From diggin.co.in |
| Menu items and descriptions (Soups, Salads, Desserts) | From diggin.co.in/menu. Confirm the desserts are current |
| Pizza & Pasta | Not listed on their site yet, so the demo shows a "coming soon" panel |
| Prices | Left out on purpose (their site shows template prices). Add `price: '₹…'` per item |
| Google rating 4.3 / 16,037 reviews | Google listing cid 11346086479872014922. Confirm which outlet it belongs to |
| Street addresses, opening hours | **To confirm** |
| WhatsApp booking | Coded but off. Set `business.whatsapp` once a WhatsApp number is confirmed |
| Photos | **Unsplash stock**, not Diggin's photos. Replace before launch |

## Demo limitations

- Booking requests are validated and confirmed on screen, but **nothing is sent**. Connect `onSubmit` in `src/components/Reservation.jsx` to email, WhatsApp or a booking tool before launch.
- No guest reviews are reproduced. The rating links to Google.
=======
## Editing content

All business content lives in **`src/data/siteContent.js`** and can be changed there without touching any components.

| Content | Status |
| --- | --- |
| Name, category, rating (4.3), review count (16,037), phone, Google Maps link | Supplied for this prototype |
| Street address, opening hours | **Placeholder**: confirm with owner |
| Story / intro copy and highlights | **Placeholder**: replace with the cafe's own story |
| Menu items | **Samples for layout only**. No prices are shown. Add `price: '₹…'` to an item and it will display |
| Photos | **Unsplash stock images**, not photos of DIGGIN CAFE. Replace before launch |
| Social links | Instagram hashtag page only. Add the official handles once confirmed |

## Demo limitations

- The reservation form validates input and shows a success message, but **nothing is sent**. Before launch, connect it to email, WhatsApp Business, or a booking tool (see `onSubmit` in `src/components/Reservation.jsx`).
- No customer testimonials are reproduced. The reviews section links to the Google profile instead.
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
