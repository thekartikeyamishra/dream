import type { Metadata } from "next";
import {ClerkProvider} from "@clerk/nextjs";
import { IBM_Plex_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight:['400','500','600','700'],
  variable: '--font-ibn-plex'
});

export const metadata: Metadata = {
  title: "Dream",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
