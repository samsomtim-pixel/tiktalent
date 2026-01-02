import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TikTalent - Gen Z Recruitment via TikTok',
  description: 'Vind Gen Z talent via TikTok recruitment campagnes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
