import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';

export const metadata = {
  title: 'Modern Portfolio',
  description: 'A modern portfolio with theme switching',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="min-h-screen bg-surface text-text">
        <ThemeProvider>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
