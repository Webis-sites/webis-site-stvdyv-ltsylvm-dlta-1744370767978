import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

// Define the Rubik font with Hebrew subset
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: ['300', '400', '500', '700'],
});

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'סטודיו לצילום דלתא | סטודיו לצילום אופנה מקצועי',
  description: 'אנחנו סטודיו לצילום מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
  keywords: 'סטודיו לצילום, צילום אופנה, צילום מקצועי, סטודיו דלתא, צילום בישראל',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.delta-studio.co.il',
    title: 'סטודיו לצילום דלתא | סטודיו לצילום אופנה מקצועי',
    description: 'אנחנו סטודיו לצילום מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    siteName: 'סטודיו לצילום דלתא',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
        width: 1200,
        height: 630,
        alt: 'סטודיו לצילום דלתא',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'סטודיו לצילום דלתא | סטודיו לצילום אופנה מקצועי',
    description: 'אנחנו סטודיו לצילום מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    images: ['https://images.unsplash.com/photo-1542038784456-1ea8e935640e'],
  },
  alternates: {
    canonical: 'https://www.delta-studio.co.il',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add custom meta tags for RTL support */}
        <meta property="og:locale" content="he_IL" />
        <meta httpEquiv="Content-Language" content="he" />
      </head>
      <body className="bg-neutral-50 text-right min-h-screen">
        <div id="root-layout" className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}