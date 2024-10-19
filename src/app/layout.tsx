import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/header";
import Footer from "./Components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "getforbe.com",
  description: "Welcome to our website! We’re glad you’re here. Our website is your one-stop destination for a variety of interesting topics. We cover multiple niches, bringing you the best content in technology, animals, biographies, and education. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <meta name="google-site-verification" content="EjDBug0W2H7n6sAOEbjCCg7HhhRXEkttHT7sm76tiSk" />
        <Header/>
        <br /><br /><br />
        {children}

        <Footer/>
      </body>
    </html>
  );
}
