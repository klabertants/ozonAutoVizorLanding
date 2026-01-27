import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import YandexMetrika from "@/components/YandexMetrika";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Автосканер AUTOVIZOR ELM327 — диагностика авто в смартфоне",
  description: "Подключите к авто, откройте приложение — и через 5 минут узнаете реальное состояние машины. Без СТО, без переплат. Подходит для 99% автомобилей с 1996 года.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}
