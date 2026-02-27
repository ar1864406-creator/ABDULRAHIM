
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { SmoothScroll } from "@/components/ui/smooth-scroll"

export const metadata: Metadata = {
  title: 'Abdul Rahim | Web UI/UX Designer & Frontend Developer',
  description: 'Portfolio of Abdul Rahim, a passionate Web UI/UX Designer with 2 years of experience creating modern, conversion-focused landing pages.',
  icons: {
    icon: '/ChatGPT Image Feb 27, 2026, 06_41_14 PM.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <SmoothScroll>
          <CustomCursor />
          {children}
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}
