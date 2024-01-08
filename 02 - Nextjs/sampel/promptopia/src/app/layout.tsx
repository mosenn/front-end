import "./globals.css";
import type { Metadata } from "next";
import { connecetToDb } from "../../utils/database";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Nav from "./components/Nav";
import Provider from "./components/Provider";
export const metadata: Metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // connecetToDb();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
