import './globals.css';
import { Nav, Footer } from '@/components/shared';

export const metadata = {
  title: {
    default: 'Maittreya Digital Services',
    template: '%s | Maittreya Digital Services',
  },
  description:
    'Digital marketing and product development for startups in India and the US — senior-led, transparent, and built to convert.',
  metadataBase: new URL('https://maittreya.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Maittreya Digital Services',
  },
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
