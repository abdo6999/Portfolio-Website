import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://abdelrahman-mahmoud.netlify.app"),
  title: "Abdelrahman Mahmoud | Full-Stack Developer (Angular & ASP.NET Core)",
  description:
    "Portfolio of Abdelrahman Mahmoud — a Full-Stack Developer specializing in Angular, ASP.NET Core, C#, SQL Server, and modern web technologies. Explore projects, backend APIs, and UI designs.",
  authors: [{ name: "Abdelrahman Mahmoud" }],
  keywords: [
    "Abdelrahman Mahmoud",
    "Full Stack Developer",
    "Web Developer",
    "Angular",
    "ASP.NET Core",
    "C#",
    "SQL Server",
    "Entity Framework",
    "Node.js",
    "Express",
    "PostgreSQL",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "SASS",
    "Next.js",
    "Developer Egypt",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  openGraph: {
    title: "Abdelrahman Mahmoud | Full-Stack Developer (Angular & ASP.NET Core)",
    description:
      "Discover the portfolio of Abdelrahman Mahmoud — a Full-Stack Developer skilled in Angular, ASP.NET Core, C#, and SQL Server with experience in scalable APIs and modern UI development.",
    url: "https://abdelrahman-mahmoud.netlify.app",
    siteName: "Abdelrahman Mahmoud Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Abdelrahman Mahmoud Portrait",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Mahmoud | Full-Stack Developer (Angular & ASP.NET Core)",
    description:
      "Explore the portfolio of Abdelrahman Mahmoud — a creative full-stack developer with expertise in Angular, ASP.NET Core, C#, and SQL Server.",
    images: ["/me.jpg"],
    creator: "@abdoakl18",
  },
  other: {
    "google-site-verification": "Sfgnw7gsxkiwTSMbE9wkDZcrl4lWYqx2F1DEkeWsiII",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d1f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdelrahman Mahmoud",
              jobTitle: "Full-Stack Developer",
              description: "Full-Stack Developer specializing in Angular, ASP.NET Core, C#, and SQL Server",
              url: "https://abdelrahman-mahmoud.netlify.app",
              image: "https://abdelrahman-mahmoud.netlify.app/me.jpg",
              sameAs: [
                "https://www.linkedin.com/in/your-linkedin", // Replace with your actual LinkedIn URL
                "https://github.com/abdo6999",
                "https://twitter.com/abdoakl18"
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Your University" // Replace with your actual education
              },
              knowsAbout: [
                "Angular",
                "ASP.NET Core",
                "C#",
                "SQL Server",
                "Entity Framework",
                "Node.js",
                "Express",
                "PostgreSQL",
                "TypeScript",
                "JavaScript",
                "Next.js"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
