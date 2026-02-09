import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shido Nakajima's Personal Website",
  description: "Aspiring Medical Researcher / Medical Device Developer"
}

export default function RootLayout({ children }: { children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${inter.className} site-root`}>

        {/* Header (sticky) */}
        <header className="site-header">
          <NavBar />
        </header>

        {/* Main content - centers and grows with content */}
        <main className="site-main">
          <div className="site-content">
            {children}
          </div>
        </main>

        {/* Footer - stays at bottom when content is short */}
        <footer className="site-footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
