import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import "../globals.css";
import Header from "@/src/components/layout/Header/Header";
import Footer from "@/src/components/layout/Footer/Footer";
import CookieConsent from "@/src/shared/ui/CookieConsent";
import { GoogleAnalytics } from "@next/third-parties/google";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "OpenFly - Tools for Conscious Living",
    template: "%s | OpenFly",
  },
  description:
    "OpenFly is a vibrant community building innovative apps and services to help people live balanced, fulfilling lives. Discover WeTrack and Dokker Space.",
  keywords: [
    "OpenFly",
    "WeTrack",
    "Dokker Space",
    "productivity",
    "mood tracking",
    "legal documents",
    "conscious living",
    "community",
  ],
  authors: [{ name: "OpenFly Team" }],
  creator: "OpenFly",
  publisher: "OpenFly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://openfly.tech"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ru: "/ru",
    },
  },
  openGraph: {
    title: "OpenFly - Tools for Conscious Living",
    description:
      "OpenFly is a vibrant community building innovative apps and services to help people live balanced, fulfilling lives. Discover WeTrack and Dokker Space.",
    url: "https://openfly.tech",
    siteName: "OpenFly",
    images: [
      {
        url: "/brand/logo_horizontal.svg",
        width: 1200,
        height: 630,
        alt: "OpenFly Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenFly - Tools for Conscious Living",
    description:
      "Discover innovative apps for balanced living built by the OpenFly community.",
    images: ["/brand/logo_horizontal.svg"],
    creator: "@openfly",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <GoogleAnalytics gaId="G-4J60CTF0JC" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OpenFly",
              url: "https://openfly.tech",
              logo: "https://openfly.tech/brand/logo_horizontal.svg",
              description:
                "A vibrant community building innovative apps and services to help people live balanced, fulfilling lives.",
              foundingDate: "2025",
              founders: [
                {
                  "@type": "Organization",
                  name: "OpenFly Team",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "team@openfly.tech",
                contactType: "customer service",
              },
              sameAs: ["https://github.com/openfly"],
              knowsAbout: [
                "Software Development",
                "Productivity Apps",
                "Legal Technology",
                "Mood Tracking",
                "Task Management",
              ],
            }),
          }}
        />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
