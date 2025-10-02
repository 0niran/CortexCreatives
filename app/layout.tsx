import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cortexcreative.ca';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cortex Creative - IT Consulting & Digital Solutions",
    template: "%s | Cortex Creative"
  },
  description: "Transforming businesses through exceptional web & mobile design, cutting-edge product development, and strategic branding. Expert IT consulting services delivering data-driven digital solutions.",
  keywords: ["IT consulting", "web design", "mobile design", "product design", "UI/UX design", "branding", "digital marketing", "product development", "digital transformation", "strategic design", "Cortex Creative", "software development", "app design", "brand strategy"],
  authors: [{ name: "Cortex Creative", url: "https://cortexcreative.ca" }],
  creator: "Cortex Creative",
  publisher: "Cortex Creative",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Cortex Creative - IT Consulting & Digital Solutions",
    description: "Transforming ideas into digital reality. Exceptional web & mobile design, product development, and strategic branding. Coming soon.",
    url: "https://cortexcreative.ca",
    siteName: "Cortex Creative",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cortex Creative - Design that drives results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Creative - IT Consulting & Digital Solutions",
    description: "Transforming ideas into digital reality. Coming soon.",
    images: ["/og-image.png"],
    creator: "@cortexcreative",
  },
  alternates: {
    canonical: "https://cortexcreative.ca",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cortex Creative",
    url: siteUrl,
    logo: `${siteUrl}/Cortex Creative-logo/vector/default-monochrome-black.svg`,
    description: "Transforming businesses through exceptional web & mobile design, cutting-edge product development, and strategic branding.",
    email: "hello@cortexcreative.ca",
    foundingDate: "2025",
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA"
    },
    serviceType: [
      "Web Design",
      "Mobile Design",
      "Product Development",
      "Brand Strategy",
      "Digital Marketing",
      "IT Consulting"
    ]
  };

  return (
    <html lang="en">
      <head>
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
