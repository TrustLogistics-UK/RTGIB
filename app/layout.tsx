import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Right Trajectory Global Investment Brokers (RTGIB)',
  description: 'Institutional-Grade Wealth Management and Multi-Jurisdictional Brokerage Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B192C] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
