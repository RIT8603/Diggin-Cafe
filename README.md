# DIGGIN CAFE: Website Redesign Demo

A responsive React + Vite redesign demo for **Diggin**, Delhi (5 outlets plus Tagore Garden coming soon), built as a sales pitch alongside an audit of the current site, www.diggin.co.in.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in dist/
```

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
