import type { Metadata } from "next";
import { Inter, Sedgwick_Ave } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
    { path: "../public/fonts/Satoshi-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sedgwick = Sedgwick_Ave({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sedgwick",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StareYou — Custom Business Website, Live in Two Weeks",
  description:
    "StareYou builds custom, done-for-you websites for small businesses: one price, one plan, no freelancers, no AI templates, live in just two weeks.",
  openGraph: {
    title: "StareYou — Custom Business Website, Live in Two Weeks",
    description:
      "Custom, done-for-you business websites designed, written, built in Framer, and launched in two weeks.",
    type: "website",
    url: "https://www.projectone.website/",
    images: [
      {
        url: "https://framerusercontent.com/assets/fTPtS9EOZdtCyqKKGtg3HkG9b50.jpg",
        width: 1200,
        height: 630,
        alt: "StareYou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StareYou — Custom Business Website, Live in Two Weeks",
    description:
      "Custom, done-for-you business websites designed, written, built in Framer, and launched in two weeks.",
    images: ["https://framerusercontent.com/assets/fTPtS9EOZdtCyqKKGtg3HkG9b50.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.projectone.website/#organization",
      name: "StareYou",
      url: "https://www.projectone.website/",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.projectone.website/#service",
      name: "StareYou Custom Websites",
      url: "https://www.projectone.website/",
      image: "https://framerusercontent.com/images/hQEyW6K2BOCJmGGLXMXT5W80isQ.png",
      description:
        "Custom, done-for-you business websites designed, written, built in Framer, and launched in two weeks.",
      serviceType: "Custom website design and Framer development",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable} ${sedgwick.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
