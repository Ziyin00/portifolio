import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransiton from "@/components/StairTransiton";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Ziyin's Portifolio",
  description: "Developed by Ziyin Ab.",
  image: "/public/assets/photo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransiton />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
