// app/layout.tsx
import React from 'react';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Idli Shop</title>
        <meta name="description" content="The best Idli shop in town!" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}