import { Inter } from "next/font/google";
import Link from "next/link";
import Navigation from "../components/navigation";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next..."
  },
  description: "Best Movie"
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
