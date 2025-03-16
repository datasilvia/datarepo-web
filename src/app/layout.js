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
    "Explora una colección de fuentes de datos abiertos para proyectos de Data Science, Machine Learning y análisis de datos. Encuentra datasets sobre salud, economía, medio ambiente y más en DataRepo.es.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        {/* ✅ Meta descripción SEO */}
        <meta name="keywords" content="datasets, open data, fuentes de datos, ciencia de datos, machine learning, big data, data science, análisis de datos, API de datos" />
        <meta name="author" content="DataRepo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Open Graph para WhatsApp, Facebook y LinkedIn */}
        <meta property="og:title" content="DataRepo - Encuentra fuentes de datos abiertos para tus proyectos" />
        <meta property="og:description" content="Explora datasets abiertos de salud, economía, medio ambiente y más para Data Science, Machine Learning y análisis de datos." />
        <meta property="og:image" content="https://datarepo.es/meta-image.jpg" /> 
        <meta property="og:url" content="https://datarepo.es" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Cards para compartir en Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DataRepo - Encuentra fuentes de datos abiertos" />
        <meta name="twitter:description" content="Explora datasets abiertos de salud, economía, medio ambiente y más para Data Science, Machine Learning y análisis de datos." />
        <meta name="twitter:image" content="https://datarepo.es/meta-image.jpg" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
