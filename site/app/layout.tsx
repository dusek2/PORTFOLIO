import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { ChatbotScript } from '@/components/chat';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Content Creator to Software Engineer',
  description: 'Journey from content creation to software engineering, showcasing projects, skills, and experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <ChatbotScript />
        </ThemeProvider>
      </body>
    </html>
  );
}

interface Window {
  __ow: {
    organizationId: string;
    template_id: string;
    integration_name: string;
    product_name: string;
  };
  OpenWidget: any;
}