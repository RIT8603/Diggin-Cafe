/*
<<<<<<< HEAD
 * DIGGIN — editable site content
 * ------------------------------------------------------------
 * Everything the owner may want to change lives in this file.
 *
 * SOURCES
 *   - Outlets, phone numbers, map links, social links, menu items and the
 *     brand description come from the current site, www.diggin.co.in
 *     (checked 19 Oct 2026).
 *   - Google rating + review count come from the Google listing supplied for
 *     this prototype (cid 11346086479872014922).
 *
 * STILL TO CONFIRM WITH THE OWNER (marked TODO):
 *   street addresses, opening hours, prices, the pizza & pasta menu,
 *   which number is on WhatsApp, and the outlet behind the Google listing.
 *
 * IMAGES: royalty-free Unsplash stock photos for illustration only. They
 * are NOT photos of DIGGIN. Replace them with DIGGIN's own photography.
=======
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
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
 */

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const business = {
<<<<<<< HEAD
  name: 'DIGGIN',
  fullName: 'DIGGIN CAFE',
  category: 'Italian & Continental Cafe',
  region: 'Delhi NCR',
  rating: 4.3,
  reviewCount: 16037,
  googleUrl: 'https://maps.google.com/?cid=11346086479872014922',
  // Main reservation line, as listed on diggin.co.in
  phoneDisplay: '+91 90900 63232',
  phoneHref: 'tel:+919090063232',
  // TODO: set to e.g. '919090063232' once the owner confirms this number is on WhatsApp.
  whatsapp: null,
  instagram: 'https://www.instagram.com/diggincafe',
  facebook: 'https://www.facebook.com/diggincafe/',
  // TODO: confirm opening hours per outlet.
  hoursNote: 'Opening hours to be confirmed. Please call ahead.',
}

const DIGGIN_PHONE = { display: '+91 90900 63232', href: 'tel:+919090063232' }
const GARDIN_PHONE = { display: '+91 96469 63696', href: 'tel:+919646963696' }

/* Outlets as listed on diggin.co.in. TODO: add street address + hours for each. */
export const outlets = [
  { id: 'anand-lok', name: 'Diggin', area: 'Anand Lok', city: 'New Delhi', mapsUrl: 'https://maps.app.goo.gl/eCAYaq5tw71NVZmL9', phone: DIGGIN_PHONE, image: unsplash('photo-1555396273-367ea4eb4db5', 900) },
  { id: 'chanakyapuri', name: 'Diggin', area: 'Chanakyapuri', city: 'New Delhi', mapsUrl: 'https://maps.app.goo.gl/m65d8gfG5YmJHctY7', phone: DIGGIN_PHONE, image: unsplash('photo-1466978913421-dad2ebd01d17', 900) },
  { id: 'bikaner-house', name: 'Diggin', area: 'Bikaner House', city: 'New Delhi', mapsUrl: 'https://maps.app.goo.gl/eFaKtWVS4qxJudS29', phone: DIGGIN_PHONE, image: unsplash('photo-1517248135467-4c7edcad34c4', 900) },
  { id: 'connaught-place', name: 'Diggin', area: 'Connaught Place', city: 'New Delhi', mapsUrl: 'https://maps.app.goo.gl/XE1oymPsbpDdesYM7', phone: DIGGIN_PHONE, image: unsplash('photo-1559339352-11d035aa65de', 900) },
  { id: 'gardin', name: 'Gardin by Diggin', area: 'Anand Lok', city: 'New Delhi', mapsUrl: 'https://maps.app.goo.gl/BbKGQsnuR9SQXZm98', phone: GARDIN_PHONE, image: unsplash('photo-1501339847302-ac426a4a7cbb', 900), sister: true },
  // Shown as "coming soon" on diggin.co.in, so it can't be booked yet.
  { id: 'tagore-garden', name: 'Diggin', area: 'Tagore Garden', city: 'New Delhi', mapsUrl: 'https://maps.app.goo.gl/8yfbsEFKoXDrkgyt8', phone: DIGGIN_PHONE, image: unsplash('photo-1554118811-1e0d58224f24', 900), comingSoon: true },
]

export const hero = {
  eyebrow: 'Italian & Continental · Across Delhi',
  subhead:
    'Fairy lights, lush greens and the warmth of a European café. Handcrafted pastas, stone-baked pizzas and desserts made to linger over.',
=======
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
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
  image: unsplash('photo-1554118811-1e0d58224f24', 2000),
}

export const intro = {
<<<<<<< HEAD
  eyebrow: 'All About Diggin',
  title: 'An escape wrapped in fairy lights',
  // Paraphrased from the "All About Diggin" section on diggin.co.in.
  paragraphs: [
    'Step into Diggin and the city fades away: fairy lights, leafy greens and the easy warmth of a European café, with every corner made for good conversation.',
    'The kitchen cooks comforting Italian and continental classics, from handcrafted pastas and stone-baked pizzas to desserts made in-house by our pastry chef.',
  ],
  highlights: [
    { icon: 'leaf', title: 'Garden-café setting', text: 'Lush greens and fairy lights across our outlets.' },
    { icon: 'plate', title: 'Italian & continental', text: 'Pastas, pizzas, soups and fresh salads.' },
    { icon: 'cup', title: 'In-house desserts', text: 'Baked fresh by our own pastry chef.' },
=======
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
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
  ],
  images: [
    unsplash('photo-1501339847302-ac426a4a7cbb', 900),
    unsplash('photo-1495474472287-4d71bcdd2085', 900),
  ],
}

/*
<<<<<<< HEAD
 * MENU: items and descriptions as published on diggin.co.in/menu.
 * veg: true = vegetarian, false = non-vegetarian, null = not stated.
 * Prices are left out on purpose; the live site only shows template values.
 * Add `price: '₹…'` to any item once confirmed and it will display.
 */
export const menu = [
  {
    id: 'soups',
    label: 'Soups',
    image: unsplash('photo-1547592166-23ac45744acd', 1000),
    items: [
      { name: 'Minestrone', veg: true, desc: 'Classic Italian soup with mixed vegetables and pasta in a fresh tomato broth, lifted with garlic, herbs and parmesan.' },
      { name: 'Smoked Mushroom Soup', veg: true, desc: 'Cream of mushroom with a rich, smoky depth of flavour.' },
      { name: 'Smoked Chicken Soup', veg: false, desc: 'Smoked chicken simmered with vegetables.' },
      { name: 'Prawn Soup', veg: false, desc: 'A light broth with prawns, vegetables and angel hair pasta.' },
    ],
  },
  {
    id: 'salads',
    label: 'Salads',
    image: unsplash('photo-1512621776951-a57141f2eefd', 1000),
    items: [
      { name: 'Caesar Salad', veg: true, desc: 'Crisp leaves, sun-dried tomato, olives, parmesan and croutons in a classic Caesar dressing.' },
      { name: 'Citrus Chicken Salad', veg: false, desc: 'Smoked chicken, orange segments and cherry tomato with an orange vinaigrette on crisp lettuce.' },
      { name: 'Diggin Special Salad', veg: true, desc: 'Apple, olives, cherry tomato and roasted beetroot with a honey, chilli and mint vinaigrette, topped with feta.' },
      { name: 'Smoked Chicken & Sun-dried Tomato Salad', veg: false, desc: 'Lettuce, smoked chicken and sun-dried tomato in balsamic vinaigrette, finished with parmesan.' },
      { name: 'Artichoke, Corn & Broccoli Salad', veg: true, desc: 'Lettuce, artichoke, baby corn and broccoli in orange vinaigrette with parmesan shavings and pine nuts.' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    note: 'Made in-house by our pastry chef.',
    image: unsplash('photo-1551024601-bec78aea704b', 1000),
    items: [
      { name: 'Sticky Date & Ice Cream', veg: null, desc: 'With vanilla ice cream, toffee sauce and a peanut crumble.' },
      { name: 'Classic Cheesecake', veg: null, desc: 'Topped with raspberry jam and sliced strawberries.' },
      { name: 'Lemon Meringue Pie', veg: null, desc: 'Zesty lemon meringue, pistachio crumble and chantilly cream.' },
      { name: 'Chocolate Mousse', veg: null, desc: 'Our delicate yet rich signature chocolate mousse. Single or double serve.' },
      { name: 'Carrot Cake', veg: null, desc: 'Lightly spiced, layered with cream cheese frosting.' },
      { name: 'Brownie', veg: null, desc: 'Fresh from the oven, with dark chocolate chips and walnuts.' },
    ],
  },
  {
    // The homepage promotes pizzas and pastas, but the online menu doesn't list them yet.
    id: 'pizza-pasta',
    label: 'Pizza & Pasta',
    image: unsplash('photo-1513104890138-7c749659a591', 1000),
    pending: true,
    items: [],
  },
=======
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
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
]

export const gallery = [
  { src: unsplash('photo-1517248135467-4c7edcad34c4', 1400), alt: 'Warm cafe interior with wooden tables', type: 'ambience' },
  { src: unsplash('photo-1540189549336-e6e99c3679fe', 1000), alt: 'Colourful plated dishes', type: 'food' },
  { src: unsplash('photo-1555396273-367ea4eb4db5', 1400), alt: 'Outdoor seating under string lights', type: 'ambience' },
  { src: unsplash('photo-1497935586351-b67a49e012bf', 1000), alt: 'Latte art in a ceramic cup', type: 'food' },
  { src: unsplash('photo-1559339352-11d035aa65de', 1400), alt: 'Cosy dining room with plants', type: 'ambience' },
  { src: unsplash('photo-1565299624946-b28f40a0ae38', 1000), alt: 'Freshly baked pizza', type: 'food' },
  { src: unsplash('photo-1466978913421-dad2ebd01d17', 1400), alt: 'Bright cafe with large windows', type: 'ambience' },
<<<<<<< HEAD
  { src: unsplash('photo-1621996346565-e3dbc646d9a9', 1000), alt: 'Creamy pasta', type: 'food' },
]

export const social = [
  { id: 'instagram', label: 'Instagram @diggincafe', url: business.instagram },
  { id: 'facebook', label: 'Facebook', url: business.facebook },
  { id: 'google', label: 'Google reviews', url: business.googleUrl },
=======
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
>>>>>>> 2c11efdc0b9544df9bdca3c6db5136757d8d5cfe
]
