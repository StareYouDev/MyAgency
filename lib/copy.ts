/* Section-level copy transcribed from the reference (outer.html).
   Data arrays (checklist, faqs, stats, …) live in ./content.ts. */

export const hero = {
  badge: "Official Framer Expert",
  eyebrow: "ONE Plan. ONE site. Done right.",
  heading: "Your Website, Handled.",
  description:
    "A custom-built site, live in two weeks. No freelancers. No AI design. No hassles, and no more sending people to your Instagram bio and hoping for the best.",
  cta: "Reserve your spot",
  guarantee: "100% Money-Back Guarantee",
  annotation: ["Who wouldn\u2019t want", "a site like this?!"],
} as const;

/** Rotated polaroid cards scattered around the hero, with their captions. */
export const heroCards = [
  { caption: "Arx Crates", left: "27.31%", top: "17%", rotate: 7, size: "sm" },
  { caption: "Winston Moore", left: "11.32%", top: "48.65%", rotate: -11, size: "md" },
  { caption: "Golden Hour", left: "87.2%", top: "32.34%", rotate: 38, size: "lg" },
  { caption: "Afternoon Adventures", left: "23.88%", top: "80%", rotate: -33, size: "lg" },
  { caption: "Clover Coach", left: "84.62%", top: "80%", rotate: -14, size: "md" },
] as const;

export const problem = {
  eyebrow: "Sound Familiar?",
  heading: "Your Website Shouldn\u2019t Feel Like a Never-Ending Check List",
} as const;

export const solution = {
  eyebrow: "One decision and you\u2019re done.",
  heading: "We Make Launching a Custom Website Insanely Simple.",
  cta: "Start your StareYou",
} as const;

export const process = {
  eyebrow: "Backed by a studio who\u2019s served 160+ businesses globally",
  headingA: "Meet Project",
  headingMark: "One",
  description:
    "We build it, we host it, we handle it. Our bulletproof, 6-step process gives you a site you can\u2019t wait to show off. All done in just two weeks, without the back-and-forth meetings.",
  annotation: ["All this in a", "2 week timeframe!"],
  pills: [
    "Custom Designed. No Template",
    "Live in 14 days. No Exceptions",
    "Copy & Design by a Real Human",
    "100% Money-Back Guarantee",
  ],
} as const;

export const pricing = {
  eyebrow: "Get your message across",
  heading: "One Purposeful Page That Says Everything You Need It To",
  description:
    "A site that clearly tells your customers who you are, what you do, why you\u2019re good at it, and how to reach you.",
  heading2: "One Price. One Plan",
  description2: "We build it, we host it, you own it. Everything included.",
  scarcity: "Only 1 Spot Left This Month",
  planLabel: "The one plan",
  price: "300",
  currencyNote: "USD",
  cadence: "Per month for 12 months",
  cta: "Reserve your spot",
  questionsLead: "Got Questions?",
  questionsLink: "Book a Call",
  includedTitle: "what\u2019s included:",
  careLabel: "Framer Care+ Plan",
  carePrice: "+$50",
  careCurrency: "USD",
  careCadence: "p/m",
  careBody:
    "Add at checkout. Get instant access to our dev team from day one of going live.",
  careNote:
    "At the end of the payment cycle, it\u2019s your choice. Take ownership of your site and go. We\u2019ll transfer it to your Framer account, no questions asked. Or renew for another cycle, and we\u2019ll redesign and build your site from scratch. Your business will have grown. Your site should too.",
  workTitle: "See Work",
  workSub: "Live sites built by us, for people like you.",
} as const;

export const currencies = ["USD", "EUR", "CAD", "GBP"] as const;

/** Converted prices for the currency selector (the reference only ships USD). */
export const prices: Record<string, string> = {
  USD: "300",
  EUR: "275",
  CAD: "410",
  GBP: "235",
};

/** Decorative mockups floating either side of the pricing headline. */
export const pricingImages = [
  "https://framerusercontent.com/images/7OKY0OwsFvEDENRXJLJ2pgNctQM.png",
  "https://framerusercontent.com/images/JefYm2BbuZNQiksfIBqZy7ib7tk.png",
  "https://framerusercontent.com/images/Kg148fI8G685YznZe3uUIve7c0.webp",
] as const;

/** Inline avatar used inside the trust paragraph. */
export const jamieAvatar =
  "https://framerusercontent.com/images/I6xkrOPsi1sACSuTbGin3CIQ41I.png";

/** The four award badges rendered as one SVG in the footer. */
export const awardBadges =
  "https://framerusercontent.com/images/PO8ujJJVN3awV3yvWhMoXXMWq4.svg";

export const comparison = {
  eyebrow: "Why partner with us?",
  heading: "The Smarter Way to Get Online.",
  description:
    "Whether you\u2019re comparing freelancers, DIY builders or a traditional agency, StareYou removes the delays, uncertainty and overhead that usually come with building a website.",
  annotation: ["It\u2019s a no-brainer,", "why wouldn\u2019t you?!"],
  columns: ["StareYou", "Agency", "Freelancer", "Do it yourself"],
  cta: "Reserve your spot",
} as const;

export const trust = {
  eyebrow: "Transforming Brands Globally Since 2020",
  heading: "Why Trust Us with Your First Impression?",
  body: "StareYou is a sub-brand of an award-winning design studio, KHULA\u00ae, founded by {Jamie Windell}. We\u2019ve worked with everyone from solo founders and small businesses, to organizations investing $100k+ in their online presence.",
} as const;

export const about = {
  heading: ["Because the Small Guys", "Deserve", "Great Design", "Too."],
  headingLead: "Because the Small Guys",
  headingMark: "Deserve",
  headingTail: "Great Design Too.",
  subheadingA: "Meet the talented",
  subheadingB: "(and lovely)team!",
  bodyA:
    "We created StareYou because we keep seeing incredible small business owners doing outstanding work, but being held back by a website that doesn\u2019t do them justice.",
  bodyB:
    "When your brand perception matches the quality of what you actually deliver, everything shifts. Your confidence, your pricing, your credibility, and the clients you attract.",
  cta: "Reserve your spot",
} as const;

export const testimonials = {
  eyebrow: "Real results, real fast",
  heading: "What our clients say about working with us",
  reviewLabel: "Google review",
} as const;

export const faq = {
  heading: "FAQs",
  askHeading: "Ask AI Why Us?",
  askLinks: [
    {
      label: "Ask ChatGPT",
      href: "https://chatgpt.com/?q=Why%20should%20I%20choose%20StareYou%20to%20build%20my%20business%20website%3F",
    },
    {
      label: "Ask Claude",
      href: "https://claude.ai/new?q=Why%20should%20I%20choose%20StareYou%20to%20build%20my%20business%20website%3F",
    },
    {
      label: "Ask Perplexity",
      href: "https://www.perplexity.ai/search?q=Why%20should%20I%20choose%20StareYou%20to%20build%20my%20business%20website%3F",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Got questions? Reach out to us!",
  heading: "Your Site Won\u2019t Build Itself. Good Thing We Will.",
  description:
    "One plan. One site. Zero excuses left. Sign up today and get your professional, dream professional website up and live within weeks, not months.",
  formHeading: "Contact Us",
  fields: {
    name: "Name*",
    email: "Email*",
    message: "Got questions about pricing, payment or what\u2019s included? Ask away, no pressure.",
  },
  submit: "Submit",
} as const;

export const giving = {
  eyebrow: "Giving Back",
  heading: "One Site, Many Lives Impacted.",
  bodyA: "For every StareYou site we launch, $100 goes directly to ",
  bodyLink: "Hungry For Life",
  bodyB: ", known for their 100% model: where every dollar donated to projects goes directly to the projects. Just one more family with clean water, food or shelter because you chose to show up online.",
  cta: "Visit Site",
  href: "https://www.hungryforlife.org/",
  images: [
    "https://framerusercontent.com/images/VJsBaLEbHvX441nngvBJdS2tN64.webp",
    "https://framerusercontent.com/images/x1Lhg0TCfOk3BilHgTFZaz42Nk.png",
    "https://framerusercontent.com/images/LXJb53LyoL0pdwW1LV4Ww7HfE.webp",
    "https://framerusercontent.com/images/DY0q3H4CbcafNomPIHSVDN0yIw.webp",
  ],
} as const;

export const footer = {
  blurbLead: "StareYou is a sub-brand of KHULA®",
  blurb: "Proudly founded and based in Chilliwack, BC. Serving founders worldwide.",
  cta: "Reserve your spot",
  navTitle: "Navigation",
  socialsTitle: "Socials",
  copyright: "© 2026 StareYou. All Rights Reserved",
  resources: ["Privacy Policy", "Refund Policy", "Refer & Earn", "Resources"],
  crafted: "Crafted with ❤️ in Framer",
  powered: "Powered by KHULA®",
} as const;
