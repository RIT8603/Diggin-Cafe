# DIGGIN CAFE — Website Prototype

A responsive React + Vite sales-demo website for **DIGGIN CAFE, Delhi**.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in dist/
```

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
