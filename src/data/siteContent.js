/*
 * DIGGIN CAFE — editable site content
 * ------------------------------------------------------------
 * Everything the cafe owner may want to change lives in this file.
 *
 * VERIFIED (supplied for this prototype):
 *   name, category, Google rating + review count, phone, Google Maps link.
 *
 * UNVERIFIED / PLACEHOLDER (marked `verified: false` or with TODO):
 *   address, opening hours, menu items, descriptions, social links.
 *   Replace these with confirmed details before going live.
 *
 * IMAGES: all photos are royalty-free stock images from Unsplash used for
 * illustration only. They are NOT photos of DIGGIN CAFE. Swap in the
 * cafe's own photography before launch.
 */

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const business = {
  name: 'DIGGIN CAFE',
  category: 'Premium Cafe',
  city: 'Delhi',
  rating: 4.3,
  reviewCount: 16037,
  phoneDisplay: '+91 11 4080 0082',
  phoneHref: 'tel:+911140800082',
  mapsUrl: 'https://maps.google.com/?cid=11346086479872014922',
  // TODO: confirm full street address with the owner.
  address: { text: 'Delhi — see exact location on Google Maps', verified: false },
  // TODO: confirm opening hours with the owner.
  hours: { text: 'Opening hours to be confirmed — please call ahead', verified: false },
}

export const hero = {
  eyebrow: 'Premium Cafe · Delhi',
  headline: 'Good Food. Beautiful Moments.',
  subhead:
    'A leafy, laid-back escape in the heart of the city — made for long lunches, slow coffees and catching up with the people you love.',
  image: unsplash('photo-1554118811-1e0d58224f24', 2000),
}

export const intro = {
  eyebrow: 'Our Story',
  title: 'A garden table, waiting for you',
  // Placeholder copy — replace with the cafe's own story.
  paragraphs: [
    'DIGGIN CAFE is a much-loved Delhi favourite, rated 4.3 by more than sixteen thousand guests on Google.',
    'This section is a place for the cafe to tell its own story — how it started, what inspires the kitchen, and what makes an afternoon here feel special. The text you are reading is placeholder copy for the demo.',
  ],
  highlights: [
    { icon: 'leaf', title: 'Nature-inspired setting', text: 'Placeholder — describe the space, seating and greenery.' },
    { icon: 'cup', title: 'Coffee & conversations', text: 'Placeholder — describe the beverage programme.' },
    { icon: 'plate', title: 'Food made to share', text: 'Placeholder — describe the kitchen and its signatures.' },
  ],
  images: [
    unsplash('photo-1501339847302-ac426a4a7cbb', 900),
    unsplash('photo-1495474472287-4d71bcdd2085', 900),
  ],
}

/*
 * MENU — sample items for layout only.
 * Item names and descriptions are illustrative and prices are intentionally
 * omitted. Replace with the cafe's actual menu (add `price: '₹…'` per item
 * once confirmed and it will display automatically).
 */
export const menuCategories = [
  { id: 'all', label: 'All' },
  { id: 'breakfast', label: 'All-Day Breakfast' },
  { id: 'pizza', label: 'Pizza & Pasta' },
  { id: 'mains', label: 'Mains & Bowls' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Coffee & Drinks' },
]

export const menuItems = [
  { name: 'Fluffy Pancake Stack', category: 'breakfast', desc: 'Sample item — maple, berries, whipped butter.', veg: true, image: unsplash('photo-1567620905732-2d1ec7ab7445', 700) },
  { name: 'Avocado Sourdough Toast', category: 'breakfast', desc: 'Sample item — smashed avocado, chilli, seeds.', veg: true, image: unsplash('photo-1525351484163-7529414344d8', 700) },
  { name: 'Wood-fired Margherita', category: 'pizza', desc: 'Sample item — tomato, fior di latte, basil.', veg: true, image: unsplash('photo-1513104890138-7c749659a591', 700) },
  { name: 'Creamy Penne', category: 'pizza', desc: 'Sample item — parmesan cream, herbs.', veg: true, image: unsplash('photo-1621996346565-e3dbc646d9a9', 700) },
  { name: 'Garden Buddha Bowl', category: 'mains', desc: 'Sample item — grains, greens, roasted veg.', veg: true, image: unsplash('photo-1546069901-ba9599a7e63c', 700) },
  { name: 'Grilled Chicken Plate', category: 'mains', desc: 'Sample item — herb chicken, seasonal sides.', veg: false, image: unsplash('photo-1504674900247-0877df9cc836', 700) },
  { name: 'Chocolate Indulgence', category: 'desserts', desc: 'Sample item — rich chocolate, berries.', veg: true, image: unsplash('photo-1551024601-bec78aea704b', 700) },
  { name: 'Classic Cheesecake', category: 'desserts', desc: 'Sample item — baked, with fruit compote.', veg: true, image: unsplash('photo-1533134242443-d4fd215305ad', 700) },
  { name: 'Signature Cappuccino', category: 'drinks', desc: 'Sample item — double shot, silky foam.', veg: true, image: unsplash('photo-1509042239860-f550ce710b93', 700) },
  { name: 'Iced Cold Brew', category: 'drinks', desc: 'Sample item — slow-steeped, served over ice.', veg: true, image: unsplash('photo-1461023058943-07fcbe16d735', 700) },
  { name: 'Fresh Fruit Cooler', category: 'drinks', desc: 'Sample item — seasonal fruit, mint, soda.', veg: true, image: unsplash('photo-1544145945-f90425340c7e', 700) },
  { name: 'Pesto Pizza', category: 'pizza', desc: 'Sample item — basil pesto, cherry tomato.', veg: true, image: unsplash('photo-1565299624946-b28f40a0ae38', 700) },
]

export const gallery = [
  { src: unsplash('photo-1517248135467-4c7edcad34c4', 1400), alt: 'Warm cafe interior with wooden tables', type: 'ambience' },
  { src: unsplash('photo-1540189549336-e6e99c3679fe', 1000), alt: 'Colourful plated dishes', type: 'food' },
  { src: unsplash('photo-1555396273-367ea4eb4db5', 1400), alt: 'Outdoor seating under string lights', type: 'ambience' },
  { src: unsplash('photo-1497935586351-b67a49e012bf', 1000), alt: 'Latte art in a ceramic cup', type: 'food' },
  { src: unsplash('photo-1559339352-11d035aa65de', 1400), alt: 'Cosy dining room with plants', type: 'ambience' },
  { src: unsplash('photo-1565299624946-b28f40a0ae38', 1000), alt: 'Freshly baked pizza', type: 'food' },
  { src: unsplash('photo-1466978913421-dad2ebd01d17', 1400), alt: 'Bright cafe with large windows', type: 'ambience' },
  { src: unsplash('photo-1488477181946-6428a0291777', 1000), alt: 'Dessert with fresh berries', type: 'food' },
]

/*
 * SOCIAL — only links that are known to work are shown.
 * TODO: replace with the cafe's official handles once confirmed.
 */
export const social = [
  { id: 'instagram', label: 'Instagram (#diggincafe)', url: 'https://www.instagram.com/explore/tags/diggincafe/' },
  { id: 'google', label: 'Google Maps', url: business.mapsUrl },
  { id: 'phone', label: 'Call the cafe', url: business.phoneHref },
]
