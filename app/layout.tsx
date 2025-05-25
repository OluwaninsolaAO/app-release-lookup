import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AppLookup',
  description:
    'The App Release Lookup is a focused utility designed to provide a quick, unified way to check the latest version details of your mobile applications on both the Google Play Store and Apple App Store.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/brand/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="shortcut icon" href="/brand/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/brand/apple-touch-icon.png"
        />
        <link rel="manifest" href="/brand/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-slate-50 h-dvh content-center mx-2">{children}</div>
      </body>
    </html>
  );
}
