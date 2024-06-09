import type {Metadata} from 'next';
import './globals.css';
import {type_second_spectral} from '@/functions/fonts';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second_spectral.variable}>
        {children}
      </body>
    </html>
  );
}
