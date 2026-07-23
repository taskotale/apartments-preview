/**
 * Mockup content for both sites (English).
 * In Phase 2 this moves into content collections (Montenegrin source,
 * generated translations); for CP1 it is hardcoded here.
 *
 * NOTE: contact numbers/emails are PLACEHOLDERS — the real ones are not
 * published anywhere; Tasko supplies them.
 */

export interface AreaSpot { dist: string; name: string; text: string }
export interface Quote { quote: string; guest: string }
export interface GalleryItem { file: string; caption: string }

export interface SiteData {
  id: 'mare' | 'dolce';
  theme: string;
  name: string;
  nameSub: string;
  favicon: string;
  metaDescription: string;
  tagline: string;
  location: string;
  heroFile: string;
  stats: { value: string; label: string }[];
  welcomeTitle: string;
  welcome: string[];
  amenities: { icon: string; label: string }[];
  gallery: GalleryItem[];
  aptPhotos: [string, string];
  quotes: Quote[];
  reviewCount: string;
  area: AreaSpot[];
  mapsUrl: string;
  practical: { label: string; value: string }[];
  contact: { phone: string; phoneHref: string; whatsapp: string; viber: string; email: string };
  bookingUrl: string;
  instagramUrl: string;
  sister: { name: string; text: string; url: string };
}

export const mare: SiteData = {
  id: 'mare',
  theme: 'theme-mare',
  name: 'Mare e Monti',
  nameSub: 'Antivari · Bar',
  favicon: '🌅',
  metaDescription:
    'Mare e Monti — a brand-new one-bedroom apartment in the K Residence, in the center of Bar, Montenegro. Sea & mountain views, sleeps 4. Book directly with the host.',
  tagline:
    'A bright new apartment above the rooftops of Bar — sea on one side, mountains on the other, sunsets included.',
  location: 'K Residence · Bar, Montenegro',
  heroFile: 'hero-sunset.jpg',
  stats: [
    { value: '50 m²', label: 'one-bedroom' },
    { value: '4', label: 'guests' },
    { value: '10.0', label: 'on Booking.com' },
    { value: '13 min', label: 'walk to the beach' },
  ],
  welcomeTitle: 'Sea and mountains, from the very center of Bar',
  welcome: [
    '**Mare e Monti** — “sea and mountains” — is exactly what you see from the balcony: the Adriatic on one side, the hills above Bar on the other. The apartment is brand new, in the K Residence building in the very center of town — modern and bright, with retro details.',
    'There is a record player waiting, a bottle of wine to welcome you, and the kind of sunset that keeps guests on the balcony long after dinner. Supermarkets, the green market, cafés and restaurants are all within a couple of minutes on foot.',
  ],
  amenities: [
    { icon: 'bed', label: 'Double bed + sofa bed' },
    { icon: 'ac', label: 'Air conditioning' },
    { icon: 'kitchen', label: 'Full kitchen & dishwasher' },
    { icon: 'coffee', label: 'Coffee machine' },
    { icon: 'washer', label: 'Washer & dryer' },
    { icon: 'wifi', label: 'Fast Wi-Fi' },
    { icon: 'tv', label: 'Streaming TV + PS4' },
    { icon: 'balcony', label: 'Sea-view balcony' },
    { icon: 'parking', label: 'Free parking nearby' },
    { icon: 'elevator', label: 'Elevator building' },
  ],
  gallery: [
    { file: 'hero-sunset.jpg', caption: 'The sunset, straight from the balcony' },
    { file: 'living-room.jpg', caption: 'Living room with sofa bed' },
    { file: 'kitchen.jpg', caption: 'The sage-green kitchen' },
    { file: 'view-sea-city.jpg', caption: 'Sea and city from above' },
    { file: 'bedroom.jpg', caption: 'Bedroom with a queen bed' },
    { file: 'kitchen-dining.jpg', caption: 'Kitchen and dining corner' },
    { file: 'balcony.jpg', caption: 'Morning coffee spot' },
    { file: 'turntable.jpg', caption: 'A retro detail — the record player' },
    { file: 'welcome-wine.jpg', caption: 'A small welcome from your hosts' },
    { file: 'balcony-view.jpg', caption: 'The balcony' },
    { file: 'mountains-stari-bar.jpg', caption: 'The mountains behind Bar' },
    { file: 'bar-by-night.jpg', caption: 'Bar by night, from the apartment' },
  ],
  aptPhotos: ['living-room.jpg', 'kitchen-dining.jpg'],
  quotes: [
    {
      quote:
        'The host was incredibly kind, welcoming and attentive… the flat is new, spotless — we were even welcomed with a bottle of wine.',
      guest: 'Olga',
    },
    {
      quote:
        'New, tastefully furnished, airy and bright — immaculately clean, in a new building in the very center of town.',
      guest: 'Guest from Montenegro',
    },
  ],
  reviewCount: 'guest reviews on Booking.com',
  area: [
    { dist: '13 min walk', name: 'Topolica beach', text: 'The town beach with its long seafront promenade — an easy stroll away.' },
    { dist: '5 min walk', name: 'Center of Bar', text: 'Cafés, restaurants, the green market and supermarkets, all around the corner.' },
    { dist: '15 min drive', name: 'Stari Bar', text: 'The old town under Rumija mountain — stone streets, fortress ruins and the best ćevapi around.' },
    { dist: '10 min drive', name: 'Stara Maslina', text: 'One of the oldest olive trees on Earth — about 2,240 years old and still growing.' },
  ],
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=42.0979,19.1020',
  practical: [
    { label: 'Check-in', value: 'from 15:00' },
    { label: 'Check-out', value: 'by 11:00' },
    { label: 'Parking', value: 'free, next to the building' },
    { label: 'Pets', value: 'not allowed' },
    { label: 'Smoking', value: 'non-smoking' },
    { label: 'Rates', value: 'message us for dates & prices' },
  ],
  contact: {
    phone: '+382 67 667 313',
    phoneHref: 'tel:+38267667313',
    whatsapp: 'https://wa.me/38267667313?text=Hello!%20I%27m%20interested%20in%20Mare%20e%20Monti.',
    viber: 'viber://chat?number=%2B38267667313',
    email: 'contact@mareemonti.me',
  },
  bookingUrl: 'https://www.booking.com/hotel/me/mare-e-monti-bar.html',
  instagramUrl: 'https://www.instagram.com/mare_e_monti_antivari/',
  sister: {
    name: 'Dolce dimora',
    text: 'Dates already taken? Our sister apartment is a one-minute walk away, in the same residence — same family, its own sweet character.',
    url: 'https://dolcedimora.me/',
  },
};

export const dolce: SiteData = {
  id: 'dolce',
  theme: 'theme-dolce',
  name: 'Dolce dimora',
  nameSub: 'Bar · Montenegro',
  favicon: '🍬',
  metaDescription:
    'Dolce dimora — a sweet, brand-new one-bedroom apartment with a private entrance in Bar, Montenegro. Green kitchen, pink bedroom, sea views. Book directly with the host.',
  tagline:
    'Your sweet home by the Adriatic — a brand-new apartment with a green kitchen, a pink bedroom and a courtyard fountain that glows at night.',
  location: 'K Residence · Bar, Montenegro',
  heroFile: 'hero-sunset-sea.jpg',
  stats: [
    { value: '50 m²', label: 'one-bedroom' },
    { value: '4', label: 'guests' },
    { value: '10.0', label: 'on Booking.com' },
    { value: '14 min', label: 'walk to the beach' },
  ],
  welcomeTitle: 'La dolce vita, five minutes from the center',
  welcome: [
    '**Dolce dimora** means “sweet dwelling” — and it lives up to the name. The apartment is brand new, with its own private entrance, an emerald-green kitchen, a soft pink bedroom and a balcony looking toward the sea.',
    'Downstairs, palm trees and a fountain light up the courtyard in the evening. The center of Bar is five minutes away on foot, the beach fourteen — close enough for everything, calm enough to sleep with the windows open.',
  ],
  amenities: [
    { icon: 'bed', label: 'Double bed + sofa bed' },
    { icon: 'door', label: 'Private entrance' },
    { icon: 'ac', label: 'Air conditioning' },
    { icon: 'kitchen', label: 'Full kitchen & dishwasher' },
    { icon: 'coffee', label: 'Dolce Gusto coffee' },
    { icon: 'washer', label: 'Washing machine' },
    { icon: 'wifi', label: 'Fast Wi-Fi' },
    { icon: 'tv', label: 'Streaming TV' },
    { icon: 'balcony', label: 'Sea-view balcony' },
    { icon: 'parking', label: 'Free parking nearby' },
  ],
  gallery: [
    { file: 'hero-sunset-sea.jpg', caption: 'The sun going down over the Adriatic' },
    { file: 'kitchen-green.jpg', caption: 'The emerald kitchen' },
    { file: 'living-sofa.jpg', caption: 'The living room' },
    { file: 'bedroom-pink.jpg', caption: 'The pink bedroom' },
    { file: 'dining-view.jpg', caption: 'Breakfast with a view' },
    { file: 'wine-evening.jpg', caption: 'Evenings in' },
    { file: 'balcony.jpg', caption: 'The balcony' },
    { file: 'fountain-night.jpg', caption: 'The courtyard fountain at night' },
    { file: 'bedroom-pink-2.jpg', caption: 'Soft colors, new everything' },
    { file: 'aperitivo.jpg', caption: 'A little aperitivo' },
    { file: 'sea-view.jpg', caption: 'The sea from the window' },
    { file: 'courtyard-palms.jpg', caption: 'Palms in the residence courtyard' },
  ],
  aptPhotos: ['kitchen-green.jpg', 'bedroom-pink.jpg'],
  quotes: [
    {
      quote: 'A very beautiful, magical apartment — truly nothing to fault.',
      guest: 'Guest from Germany',
    },
    {
      quote:
        'Location in the very center, the apartment completely new, hosts kind and available at every moment. A heartfelt recommendation.',
      guest: 'Guest from Montenegro',
    },
  ],
  reviewCount: 'guest reviews on Booking.com',
  area: [
    { dist: '14 min walk', name: 'Topolica beach', text: 'The town beach and seafront promenade — a flat, easy walk.' },
    { dist: '5 min walk', name: 'Center of Bar', text: 'Shops, cafés and the green market, just around the corner.' },
    { dist: '15 min drive', name: 'Stari Bar', text: 'The old town under Rumija mountain — stone streets and fortress views.' },
    { dist: '10 min drive', name: 'Stara Maslina', text: 'A 2,240-year-old olive tree, one of the oldest trees in the world.' },
  ],
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=42.0975,19.1014',
  practical: [
    { label: 'Check-in', value: '15:00 – 18:00' },
    { label: 'Check-out', value: 'by 11:00' },
    { label: 'Parking', value: 'free, next to the building' },
    { label: 'Pets', value: 'not allowed' },
    { label: 'Smoking', value: 'non-smoking' },
    { label: 'Rates', value: 'message us for dates & prices' },
  ],
  contact: {
    phone: '+382 67 315 398',
    phoneHref: 'tel:+38267315398',
    whatsapp: 'https://wa.me/38267315398?text=Hello!%20I%27m%20interested%20in%20Dolce%20dimora.',
    viber: 'viber://chat?number=%2B38267315398',
    email: 'contact@dolcedimora.me',
  },
  bookingUrl: 'https://www.booking.com/hotel/me/dolce-dimora.html',
  instagramUrl: 'https://www.instagram.com/rentstannadanbar/',
  sister: {
    name: 'Mare e Monti',
    text: 'Dates already taken? Our sister apartment is a one-minute walk away, in the same residence — same family, its own retro soul.',
    url: 'https://mareemonti.me/',
  },
};

