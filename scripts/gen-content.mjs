// One-off generator: reads extracted JSON + hardcoded structural data from the
// reference (outer.html) and emits lib/content.ts. Run: node scripts/gen-content.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const TMP = process.env.TMPDIR || "C:/Users/firas/AppData/Local/Temp/opencode";

// PowerShell's Set-Content -Encoding UTF8 emits a BOM; strip it before parsing.
const readJson = (name) =>
  JSON.parse(readFileSync(resolve(TMP, name), "utf8").replace(/^\uFEFF/, ""));

const faq = readJson("faq.json");
const checklist = readJson("checklist.json");
const painPoints = readJson("pains.json");

const CDN = "https://framerusercontent.com/images/";
const img = (f) => CDN + f;

/* Structural data read out of the reference DOM (order preserved). */
const heroImages = [
  "8xVmGK7f9xtP5S8LtY2XocRQ6l4.png",
  "l0bFMTod1Z2Sz9U75y9ETJQsg.png",
  "CkDSdnpP6nyjykUd4sjn7k0feZM.png",
  "9DhMWpMUFbzHFbed9tmYIqYXM.jpg",
  "F4taTXX7iKB9oJ7MN5NdC1qpSZA.png",
].map(img);

const heroRotations = [-33, 3, -11, 38, 7];

const workProjects = [
  ["KW BUILDING DESIGN", "PPSPy50GbJrl3GvVpWQ1RAOGs.jpg"],
  ["CAREY JONES", "IXDnODoJDsxaHuFUkigIH5bk.jpg"],
  ["ALLARD STUDIO", "4Fxb5styWIDC5Gt0vzuoL2KanMg.png"],
  ["Steven Moyes", "3QWv7m4X6mJ79HLQTrbhYaOuWw.png"],
  ["AFTERNOON ADVENTURES", "dZGrrThqiHAihT78uOu8z7RDPc.jpg"],
  ["WINSTON MOORE", "wLkJg7RtzszvvoVupH0VmP12jVU.jpg"],
  ["KAELAN HANSLO", "EzyKR0lyohxcnkMXrJwioZSPCU.jpg"],
  ["WAKE UP CAFE", "SEkMCRTSGiWDJMgdjYMyTNpb0.jpg"],
  ["GOLDEN HOUR", "qnhgtUjvJkhIDCUNOhgwHDa8DwM.jpg"],
  ["CLOVER COACH", "gZhJDPBdC80IckdnyR2vcEQh3aQ.jpg"],
  ["LEAF & LEGACY", "RAmSClroJouQ8Rxr5MK5ape8FY.jpg"],
].map(([name, file]) => ({ name, image: img(file) }));

const team = [
  ["Jamie", "Co-Founder & PM", "KN5964b1OzIlasioDuFiJ8ZJE.png"],
  ["Cal", "Co-Founder & CD", "ztx49A1sVUtL2XL4QMSr4E7F3s8.png"],
  ["Jill", "Senior Copywriter", "0CpsLtu9R6A8gy0bT3bs97MlI.png"],
  ["Dave", "Senior UI Designer", "0BSrOWyrB46diimufyDTwIyPDU.png"],
  ["AJ", "Framer Expert", "nEdE6ljLntlr49r5kQeud6WotM.png"],
  ["Vanessa", "Project Manager", "dvqrfEdmocgpgfEPcrJvhBpl8.png"],
  ["Angela", "QA Manager", "2ZWp2C6Mqp3x7VuPrulxBRBhFjQ.png"],
].map(([name, role, file]) => ({ name, role, image: img(file) }));

const stats = [
  {
    value: "16x",
    suffix: "",
    label: "Prestige Awards Won",
    detail: "Recognition from the design community",
    image: img("TzI2RXhAluxrWCsTLYtzypNt9B8.jpg"),
  },
  {
    value: "100",
    suffix: "+",
    label: "Custom Sites Launched",
    detail: "Each one built from scratch, not templates",
    image: img("ttvmLo6JcW4PRA5PqL4ER8Wb02A.webp"),
  },
  {
    value: "10",
    suffix: "k+",
    label: "Hours QA-ing websites",
    detail: "We know what looks good, and what doesn't",
    image: img("RQMzpdYIeuYKYEbj7VFXlLNhJsw.jpg"),
  },
  {
    value: "160",
    suffix: "+",
    label: "Brands transformed",
    detail: "From solopreneurs to established companies",
    image: img("z3DA2hule0j2tgzOAZMi3bfceak.webp"),
  },
];

const gallery = [
  "kiXQHI5pic4MdW4VRf7goUicRhs.png",
  "jgOmHf10vKcrE7Vw3MqS9hpA.webp",
  "A9ZkpsWys2ylV2ZzARA68Beqc0Q.webp",
  "mbCIN3XVCR7iBxD7YipquQkAd0.png",
  "N81GoX3cIBUvVU2bioXaiNdo6jw.jpg",
  "5HurvsFCxQYYhPNJYVwCVbrGg.webp",
  "zZNhGelEX6L2iHbUVRzaZCDTpE.png",
  "mErY3up5EbHlqgAKMDzJx7hew.png",
].map(img);

const testimonials = [
  {
    quote: "They took my site from \u201cok\u201d to \u201cOMG\u201d",
    name: "Chris Klop",
    company: "Kerkhoff Engineering",
    image: img("xRb2pOFMtM24V0I37lh56igcm6I.png"),
  },
  {
    quote: "Outstanding quality. Don't even shop around.",
    name: "Jill Felty",
    company: "Felty & Co.",
    image: img("tTRgJa0bRFBrtoTrqIbPgWWqTk.png"),
  },
  {
    quote: "Getting this right was critical for my business.",
    name: "Dan Moore",
    company: "PROCAD Designs",
    image: img("LE8zbaF7vOjKyPW9VJfnUdkgmyg.png"),
  },
  {
    quote: "Results beyond what I could have imagined.",
    name: "Katrina Miller",
    company: "Evoke HR",
    image: img("9osIXKy1J6iRG6Ows1WXm2V98.png"),
  },
  {
    quote: "If you've had unpleasant experiences in the past, try these guys!",
    name: "Syd Martin",
    company: "Fern & Fellow",
    image: img("cvU4Lk1lMt6UycRkBang9H7c.png"),
  },
];

const processSteps = [
  {
    n: 1,
    title: "Onboarding",
    body: "You share the details of your business and a moodboard of how you want the site to look. We do the rest.",
  },
  {
    n: 2,
    title: "We Build",
    body: "Design, copy, build. You don't lift a finger. We handle the whole thing.",
  },
  {
    n: 3,
    title: "First Look",
    body: "You see the first draft. Flag anything. This is also your guarantee checkpoint.",
  },
  {
    n: 4,
    title: "Revisions",
    body: "We apply your feedback in one focused pass. Polished and ready.",
  },
  {
    n: 5,
    title: "Framer Development",
    body: "We turn the design into a seamless site that just works. We handle the technical details. You sit back and relax.",
  },
  {
    n: 6,
    title: "Launch",
    body: "Your site goes live. You share the link. The internet finally knows you exist.",
  },
];

const timelineTabs = [
  "INITIAL DISCOVERY",
  "MOODBOARD & WIREFRAME",
  "UI DESIGN & FEEDBACK",
  "FRAMER BUILD, SEO & QA",
  "GO LIVE!",
];

const badgeMarquee = [
  "100% Money-Back Guarantee",
  "One Site",
  "Hosting included",
  "Senior Designers",
  "framer experts",
  "one plan",
];

const solutionBullets = [
  "One team of designers and developers",
  "One strategic business and sales homepage",
  "One point of contact for the whole process",
  "One round of revisions and no back-and-forth",
  "One simple, affordable monthly fee",
];

const includedFeatures = [
  "Custom-built, One-page Site",
  "Expert Copywriting & Design",
  "Built in Framer, easy to update",
  "SEO & AEO Fundamentals Baked in",
  "Hosting Included for all 12 months",
  "Async communication over email",
  "one revision round",
  "100% money-back guarantee",
];

const carePlusFeatures = [
  "Instant access to monthly support",
  "24hr response turnaround",
  "Update text and images",
  "Add new sections and features",
  "Monthly site health check",
];

const comparisonRows = [
  {
    label: "Timeline",
    diy: "If You Find The Time",
    freelancer: "4-12 Weeks",
    agency: "3-6+ Months",
    projectone: "Live in 14 Days",
  },
  {
    label: "Price",
    diy: "Your Time & Sanity",
    freelancer: "$3k-$8k Upfront",
    agency: "$10k-30k+ Upfront",
    projectone: "$300 USD Per Month",
  },
  {
    label: "custom design",
    diy: "Templates Only",
    freelancer: "Depends Who You Hire",
    agency: "Yes",
    projectone: "Always Custom",
  },
  {
    label: "Copy & Hosting",
    diy: "All On You",
    freelancer: "Rarely Included",
    agency: "Almost Always Extra",
    projectone: "Copy & Hosting",
  },
  {
    label: "guarantee",
    diy: "No Refund on Lost Time",
    freelancer: "Rarely",
    agency: "Rarely",
    projectone: "100% Money Back",
  },
];

const navLinks = [
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
];

const footerNav = [
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ's", href: "#faqs" },
];

const footerResources = [
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Refer & Earn", href: "#" },
];

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
const j = (v) => JSON.stringify(v, null, 2);

const file = `/* eslint-disable */
// AUTO-GENERATED from the reference (outer.html) by scripts/gen-content.mjs
// All copy, imagery URLs and ordering are transcribed from the source document.

export const cdn = "https://framerusercontent.com/images/";

export const navLinks = ${j(navLinks)} as const;

export const heroImages = ${j(heroImages)};
export const heroRotations = ${j(heroRotations)} as const;
export const heroAnnotation = 'Who wouldn\\u2019t want a site like this?!';

export const painPoints = ${j(painPoints)};
export const checklist = ${j(checklist)};

export const solutionBullets = ${j(solutionBullets)};

export const timelineTabs = ${j(timelineTabs)};
export const processSteps = ${j(processSteps)};
export const badgeMarquee = ${j(badgeMarquee)};

export const includedFeatures = ${j(includedFeatures)};
export const carePlusFeatures = ${j(carePlusFeatures)};

export const workProjects = ${j(workProjects)};

export const comparisonRows = ${j(comparisonRows)};

export const stats = ${j(stats)};
export const gallery = ${j(gallery)};

export const team = ${j(team)};

export const testimonials = ${j(testimonials)};

export const faqs = ${j(faq.map((f) => ({ q: f.q, a: f.a })))};

export const footerNav = ${j(footerNav)};
export const footerResources = ${j(footerResources)};
`;

writeFileSync(resolve(process.cwd(), "lib/content.ts"), file, "utf8");
console.log("wrote lib/content.ts");
