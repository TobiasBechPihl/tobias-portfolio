import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tobias Pihl | Portfolio',
  description: 'Tobias Pihl — software development, technical training and interactive experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
