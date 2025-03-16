import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DataRepo - Encuentra fuentes de datos abiertos para tus proyectos",
  description:
    "Descubre y explora una colección de fuentes de datos abiertos para proyectos de Data Science, Machine Learning y análisis de datos. Encuentra datasets de salud, economía, medio ambiente y más en DataRepo.es.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta name="keywords" content="datasets, open data, fuentes de datos, ciencia de datos, machine learning, big data, data science, análisis de datos, API de datos" />
        <meta name="author" content="DataRepo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
