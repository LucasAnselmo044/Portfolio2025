import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import PageTransition from "./ui/PageTransition";
import StairTransition from "./ui/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Lucas Anselmo - Software Developer",
  description: "Lucas Anselmo Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
