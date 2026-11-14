import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Right Trajectory Global Investment Brokers (RTGIB)',
  description: 'International Financial and Investment Brokerage Services Across the Americas and Caribbean',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
