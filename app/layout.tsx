import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ARVACORE: IoT-Based Irrigation Monitoring & Water Management for Rice Cultivation',
  description:
    'An interactive agricultural engineering whitepaper on IoT-based smart irrigation monitoring and water management in Barangay Silang, Lopez, Quezon. Polytechnic University of the Philippines, 2026.',
  keywords: [
    'ArvaCore',
    'Smart Irrigation',
    'Water Management',
    'IoT Agriculture',
    'Rice Cultivation',
    'Sensor Monitoring',
    'Polytechnic University of the Philippines',
    'Lopez Quezon',
  ],
  authors: [
    { name: 'Gladwin Ferdz I. Del Rosario' },
    { name: 'Jenice Nicole C. Ramirez' },
    { name: 'Pranz Gabrielle N. Capucion' },
  ],
  openGraph: {
    title: 'ARVACORE: IoT-Based Irrigation Monitoring for Rice Cultivation',
    description:
      'Engineering whitepaper and interactive simulation of an IoT-based agricultural monitoring system for lowland rice agriculture.',
    type: 'article',
    locale: 'en_PH',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#080e0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
