import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bryan's Portfolio",
  description: "Modern & Minimalist Portfolio",
  metadataBase: new URL("https://bryanpalad.vercel.app"),
  openGraph: {
    title: "Bryan's Portfolio",
    description: "A modern & minimalist web developer portfolio.",
    url: "https://bryanpalad.vercel.app",
    siteName: "Bryan's Portfolio",
    images: [
      {
        url: "/BryanThumbnail.PNG",
        width: 1200,
        height: 630,
        alt: "Bryan's Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan's Portfolio",
    description: "A modern & minimalist web developer portfolio.",
    images: ["/BryanThumbnail.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>  
      </body>
    </html>
  );
}
