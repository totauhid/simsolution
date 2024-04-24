import type { Metadata } from "next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "SIM Solution Ltd | Best IT Company In Bangladesh",
  description: "Best IT Company In Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextTopLoader color="#4199fd" showSpinner={false} />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
