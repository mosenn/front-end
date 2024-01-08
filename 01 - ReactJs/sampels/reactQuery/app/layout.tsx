import "./globals.css";
import { Lexend } from "next/font/google";
const inter = Lexend({ subsets: ["latin"] });
import { Providers } from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
