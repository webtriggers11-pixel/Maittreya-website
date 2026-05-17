import './globals.css';
import { Nav, Footer } from '@/components/shared';

export const metadata = {
  title: {
    default: 'Maittreya Digital Services — Digital Marketing & Web Development',
    template: '%s | Maittreya Digital Services',
  },
  description:
    'Get measurable business growth with strategic digital marketing services including SEO, Google Ads, social media marketing, website development, and logo design.',
  metadataBase: new URL('https://maittreya.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Maittreya Digital Services',
  },
  keywords: [
    'digital marketing',
    'SEO services',
    'Google Ads management',
    'social media marketing',
    'website development',
    'logo design',
    'content writing',
    'video editing',
    'Mumbai digital agency',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
