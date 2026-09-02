import { BlogPost, GalleryImage, EventItem, Testimonial, TeamMember, Coupon, Review } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "b1", slug: "art-of-the-perfect-pour-over",
    title: "The Art of the Perfect Pour-Over",
    excerpt: "Water temperature, bloom time, and grind size — the three variables that separate a good cup from a great one.",
    content: "Water temperature, bloom time, and grind size are the three variables that separate a good cup from a great one. At Brew & Bean, our baristas train for weeks before they're allowed to pour for guests. Start with water at 92-96°C, bloom your grounds for 30-45 seconds to release CO2, then pour in slow concentric circles. The result: a clean, layered cup that reveals every note in the bean.",
    category: "Brewing Guides", tags: ["pour-over", "brewing", "technique"],
    author: { name: "Arjun Rao", role: "Head Barista", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    publishedAt: "2026-06-12", readTimeMinutes: 6,
  },
  {
    id: "b2", slug: "chikmagalur-coffee-farms-story",
    title: "From Chikmagalur to Your Cup: Our Sourcing Story",
    excerpt: "A journey through the shade-grown coffee estates of Karnataka's Western Ghats that supply our single-origin beans.",
    content: "Every March, our sourcing team travels to the misty hills of Chikmagalur to hand-select the season's finest lots. We work directly with three family-owned estates practicing shade-grown, bird-friendly cultivation. This direct-trade relationship means better prices for farmers and fresher, more traceable coffee for you.",
    category: "Sourcing", tags: ["sourcing", "sustainability", "single-origin"],
    author: { name: "Priya Menon", role: "Founder", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80",
    publishedAt: "2026-05-28", readTimeMinutes: 8,
  },
  {
    id: "b3", slug: "five-mocktail-recipes-summer",
    title: "5 Mocktail Recipes to Beat the Vijayawada Heat",
    excerpt: "Our bartenders share house recipes you can recreate at home, from the Blue Lagoon Fizz to Watermelon Basil Cooler.",
    content: "Summer in Vijayawada calls for something cold and refreshing. Here are five of our most-loved mocktail recipes, straight from our bar menu, that you can make at home with fresh, simple ingredients.",
    category: "Recipes", tags: ["mocktails", "summer", "recipes"],
    author: { name: "Karthik Iyer", role: "Beverage Director", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=1200&q=80",
    publishedAt: "2026-05-14", readTimeMinutes: 5,
  },
  {
    id: "b4", slug: "latte-art-basics-for-beginners",
    title: "Latte Art Basics: Your First Rosetta",
    excerpt: "Our head barista breaks down the milk-steaming and pouring technique behind the classic rosetta pattern.",
    content: "Latte art starts long before the pour — with properly steamed microfoam. Aim for a glossy, paint-like texture with tiny, uniform bubbles. From there, it's about wrist control and confidence.",
    category: "Brewing Guides", tags: ["latte-art", "technique", "barista"],
    author: { name: "Arjun Rao", role: "Head Barista", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=1200&q=80",
    publishedAt: "2026-04-30", readTimeMinutes: 4,
  },
  {
    id: "b5", slug: "sustainable-cafe-practices",
    title: "How We're Reducing Our Environmental Footprint",
    excerpt: "Compostable packaging, spent-grounds composting, and our journey toward a zero-waste café.",
    content: "From compostable takeaway cups to donating spent coffee grounds to local urban farms, sustainability is baked into every part of our operations. Here's an inside look at our environmental commitments.",
    category: "Sustainability", tags: ["sustainability", "eco-friendly"],
    author: { name: "Priya Menon", role: "Founder", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80",
    publishedAt: "2026-04-10", readTimeMinutes: 7,
  },
  {
    id: "b6", slug: "behind-the-scenes-open-mic-nights",
    title: "Behind the Scenes: Our Thursday Open Mic Nights",
    excerpt: "How a small idea turned into Vijayawada's most-loved weekly gathering for musicians, poets, and storytellers.",
    content: "What started as a quiet Thursday experiment two years ago has become the heartbeat of our café's week. Local musicians, poets and comedians take the small stage in our courtyard every Thursday at 7pm.",
    category: "Events", tags: ["events", "community", "open-mic"],
    author: { name: "Karthik Iyer", role: "Beverage Director", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    publishedAt: "2026-03-22", readTimeMinutes: 5,
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Café interior with warm lighting", category: "interior", width: 800, height: 1000 },
  { id: "g2", src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", alt: "Barista pouring latte art", category: "coffee", width: 800, height: 600 },
  { id: "g3", src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80", alt: "Cozy seating area", category: "interior", width: 800, height: 1100 },
  { id: "g4", src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=800&q=80", alt: "Coffee beans close up", category: "coffee", width: 800, height: 800 },
  { id: "g5", src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80", alt: "Latte with foam art", category: "coffee", width: 800, height: 950 },
  { id: "g6", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Pastry display counter", category: "food", width: 800, height: 700 },
  { id: "g7", src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80", alt: "Fresh croissants", category: "food", width: 800, height: 850 },
  { id: "g8", src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80", alt: "Filter coffee pour", category: "coffee", width: 800, height: 1000 },
  { id: "g9", src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80", alt: "Live music evening", category: "events", width: 800, height: 600 },
  { id: "g10", src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80", alt: "Friends enjoying coffee", category: "people", width: 800, height: 950 },
  { id: "g11", src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", alt: "Pancake stack", category: "food", width: 800, height: 800 },
  { id: "g12", src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80", alt: "Café outdoor seating", category: "interior", width: 800, height: 700 },
  { id: "g13", src: "https://images.unsplash.com/photo-1524350876685-274059332603?w=800&q=80", alt: "Latte close up", category: "coffee", width: 800, height: 1000 },
  { id: "g14", src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80", alt: "Barista at work", category: "people", width: 800, height: 900 },
  { id: "g15", src: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=800&q=80", alt: "Coffee shop counter", category: "interior", width: 800, height: 800 },
  { id: "g16", src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80", alt: "Iced coffee glass", category: "coffee", width: 800, height: 1050 },
];

export const events: EventItem[] = [
  { id: "e1", slug: "acoustic-live-music-friday", title: "Acoustic Live Music Night", type: "Live Music", date: "2026-07-31", time: "7:00 PM – 9:30 PM", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80", description: "An evening of soulful acoustic covers and originals from local Vijayawada artists on our courtyard stage.", price: 0, seatsLeft: 24 },
  { id: "e2", slug: "thursday-open-mic", title: "Open Mic Thursdays", type: "Open Mic", date: "2026-08-06", time: "7:00 PM – 10:00 PM", image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80", description: "Musicians, poets, and storytellers take the mic. Sign-ups open at 6:30 PM, first-come first-served.", price: 0, seatsLeft: 12 },
  { id: "e3", slug: "standup-comedy-showcase", title: "Standup Comedy Showcase", type: "Stand-up Comedy", date: "2026-08-14", time: "8:00 PM – 9:30 PM", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&q=80", description: "A curated lineup of Andhra's rising comedy talent for a night of laughs over coffee and dessert.", price: 299, seatsLeft: 40 },
  { id: "e4", slug: "corporate-offsite-package", title: "Corporate Offsite & Team Meetups", type: "Corporate", date: "Flexible", time: "9:00 AM – 6:00 PM", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&q=80", description: "Private dining hall booking with AV setup, curated catering menus, and dedicated event coordination.", price: 0, seatsLeft: 0 },
  { id: "e5", slug: "birthday-celebration-package", title: "Birthday Celebration Packages", type: "Birthday", date: "Flexible", time: "Any time slot", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80", description: "Themed decor, custom cakes, and a reserved private dining corner for birthday celebrations of all sizes.", price: 0, seatsLeft: 0 },
  { id: "e6", slug: "latte-art-workshop", title: "Latte Art Workshop", type: "Workshop", date: "2026-08-09", time: "11:00 AM – 1:00 PM", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80", description: "Learn to pour hearts, rosettas, and tulips from our head barista in this hands-on 2-hour workshop.", price: 799, seatsLeft: 8 },
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Sneha Reddy", role: "Regular since 2023", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80", rating: 5, quote: "The filter coffee here rivals anything I've had in Chikmagalur itself. This is my Sunday ritual now." },
  { id: "t2", name: "Vikram Chowdary", role: "Food Blogger", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", rating: 5, quote: "Brew & Bean brought a genuinely international café experience to Vijayawada. The ambience alone is worth the visit." },
  { id: "t3", name: "Ananya Krishnan", role: "Local Entrepreneur", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80", rating: 5, quote: "I've hosted three client meetings here. The private dining space and service are simply top-tier." },
  { id: "t4", name: "Rahul Varma", role: "College Student", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", rating: 4, quote: "Great wifi, comfortable seating, and the cold brew is unbeatable. My go-to study spot." },
  { id: "t5", name: "Meera Suresh", role: "Home Baker", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80", rating: 5, quote: "Their pastry counter changed my standards for what a café bakery should taste like. The cinnamon rolls are perfection." },
];

export const teamMembers: TeamMember[] = [
  { id: "m1", name: "Priya Menon", role: "Founder & CEO", bio: "A former specialty coffee roaster in Bengaluru, Priya founded Brew & Bean in 2021 to bring direct-trade, single-origin coffee culture to Vijayawada.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80" },
  { id: "m2", name: "Arjun Rao", role: "Head Barista", bio: "A two-time regional latte art champion, Arjun leads our barista training program and coffee quality standards.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
  { id: "m3", name: "Karthik Iyer", role: "Beverage Director", bio: "Karthik crafts our seasonal mocktail and smoothie menus, blending Andhra flavours with global techniques.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80" },
  { id: "m4", name: "Divya Shankar", role: "Executive Chef", bio: "Trained in Continental and Pan-Asian cuisine, Divya designs our all-day food menu with a focus on fresh, local ingredients.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80" },
];

export const coupons: Coupon[] = [
  { code: "WELCOME50", description: "50% off on your first order (up to ₹150)", discountPercent: 50, minOrderValue: 300, expiresAt: "2026-12-31" },
  { code: "BREW20", description: "20% off on orders above ₹500", discountPercent: 20, minOrderValue: 500, expiresAt: "2026-12-31" },
  { code: "WEEKEND15", description: "15% off weekend orders", discountPercent: 15, minOrderValue: 400, expiresAt: "2026-12-31" },
];

export const reviews: Review[] = [
  { id: "r1", menuItemId: "item-1", userName: "Sneha Reddy", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80", rating: 5, comment: "Exactly like the filter coffee my grandmother makes. Incredible.", photos: [], date: "2026-06-01", verified: true },
  { id: "r2", menuItemId: "item-1", userName: "Rahul Varma", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", rating: 4, comment: "Great flavour, wish it came in a bigger size option.", photos: [], date: "2026-05-20", verified: true },
  { id: "r3", menuItemId: "item-30", userName: "Meera Suresh", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80", rating: 5, comment: "The lava cake is dangerously good. Order it warm!", photos: [], date: "2026-06-10", verified: true },
];
