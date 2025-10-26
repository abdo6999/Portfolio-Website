import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelrahman Mahmoud | Full-Stack Developer",
  description:
    "Portfolio of Abdelrahman Mahmoud — a Full-Stack Developer specializing in Angular, Node.js, Express, and PostgreSQL. Explore projects, skills, and contact information.",
  authors: [{ name: "Abdelrahman Mahmoud" }],
  keywords: [
    "Abdelrahman Mahmoud",
    "Full Stack Developer",
    "Web Developer",
    "Angular",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "SASS",
    "Developer Egypt",
  ],
  themeColor: "#0d0d1f",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Abdelrahman Mahmoud | Full-Stack Developer",
    description:
      "Discover the futuristic portfolio of Abdelrahman Mahmoud — Full-Stack Developer skilled in modern web technologies and UI design.",
    url: "https://www.linkedin.com/in/abdelrahman-mahmoud-akl/",
    siteName: "Abdelrahman Mahmoud Portfolio",
    images: ["/me.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Mahmoud | Full-Stack Developer",
    description:
      "Explore the portfolio of Abdelrahman Mahmoud — a creative full-stack developer with expertise in Angular, Node.js, and PostgreSQL.",
    images: ["/me.jpg"],
    creator: "@abdoakl18",
  },
  other: {
    "google-site-verification": "Sfgnw7gsxkiwTSMbE9wkDZcrl4lWYqx2F1DEkeWsiII",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
