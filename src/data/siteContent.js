/*
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
 */

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const business = {
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
  image: unsplash('photo-1554118811-1e0d58224f24', 2000),
}

export const intro = {
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
  ],
  images: [
    unsplash('photo-1501339847302-ac426a4a7cbb', 900),
    unsplash('photo-1495474472287-4d71bcdd2085', 900),
  ],
}

/*
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
]

export const gallery = [
  { src: unsplash('photo-1517248135467-4c7edcad34c4', 1400), alt: 'Warm cafe interior with wooden tables', type: 'ambience' },
  { src: unsplash('photo-1540189549336-e6e99c3679fe', 1000), alt: 'Colourful plated dishes', type: 'food' },
  { src: unsplash('photo-1555396273-367ea4eb4db5', 1400), alt: 'Outdoor seating under string lights', type: 'ambience' },
  { src: unsplash('photo-1497935586351-b67a49e012bf', 1000), alt: 'Latte art in a ceramic cup', type: 'food' },
  { src: unsplash('photo-1559339352-11d035aa65de', 1400), alt: 'Cosy dining room with plants', type: 'ambience' },
  { src: unsplash('photo-1565299624946-b28f40a0ae38', 1000), alt: 'Freshly baked pizza', type: 'food' },
  { src: unsplash('photo-1466978913421-dad2ebd01d17', 1400), alt: 'Bright cafe with large windows', type: 'ambience' },
  { src: unsplash('photo-1621996346565-e3dbc646d9a9', 1000), alt: 'Creamy pasta', type: 'food' },
]

export const social = [
  { id: 'instagram', label: 'Instagram @diggincafe', url: business.instagram },
  { id: 'facebook', label: 'Facebook', url: business.facebook },
  { id: 'google', label: 'Google reviews', url: business.googleUrl },
]
