// Hello World
import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Fonte da assinatura ViraWeb no rodapé (abaixo da dobra: sem preload)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "700"],
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "PRX · Propostas de Parceria Estratégica",
  description:
    "Plataforma unificada de propostas comerciais e parcerias estratégicas do ecossistema PRX. Desenvolvido por ViraWeb.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "PRX · Propostas de Parceria Estratégica",
    description: "Ecossistema de benefícios e inovação digital unificados.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${montserrat.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-white text-zinc-900 antialiased min-h-screen selection:bg-[#7607FD] selection:text-white"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
