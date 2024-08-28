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
      <body className={inter.className}>

        {/* Navigation bar for all pages */}
        <div className="flex h-full flex-col sm:h-16 md:w-full md:flex-row md:overflow-hidden">
          <div className="w-full flex-auto">
            <NavBar />
          </div>
        </div>

        {/* Child components */}
        <div className="flex h-full w-full overflow-hidden">
          {children}
        </div>

        {/* Footer for all pages */}
        <div className="flex w-full flex-row h-40 md:h-14 md:overflow-hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
