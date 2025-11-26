import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import aboutMeData from "@/data/aboutMe.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "프론트엔드 포트폴리오",
    template: "%s | 프론트엔드 포트폴리오",
  },
  description: `${aboutMeData.name} - ${aboutMeData.job} 개발자 포트폴리오. React.js와 Next.js를 활용한 모던 웹 애플리케이션 개발 경험이 있습니다.`,
  keywords: [
    "프론트엔드 개발자",
    "React",
    "Next.js",
    "TypeScript",
    "포트폴리오",
    "웹 개발",
    aboutMeData.name,
    aboutMeData.job,
  ],
  authors: [{ name: aboutMeData.name, url: aboutMeData.githubLink }],
  creator: aboutMeData.name,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://portfolio-dohyeon.vercel.app", // 실제 배포 URL로 변경 필요
    title: "프론트엔드 포트폴리오",
    description: `${aboutMeData.name} - ${aboutMeData.job} 개발자 포트폴리오`,
    siteName: "프론트엔드 포트폴리오",
    images: [
      {
        url: "/bijeuniseu-salam-eul-gajanghaneun-gwiyeoun-gang-aji.jpg", // OG 이미지로 사용할 이미지
        width: 1200,
        height: 630,
        alt: `${aboutMeData.name} 포트폴리오`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "프론트엔드 포트폴리오",
    description: `${aboutMeData.name} - ${aboutMeData.job} 개발자 포트폴리오`,
    images: ["/bijeuniseu-salam-eul-gajanghaneun-gwiyeoun-gang-aji.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://portfolio-dohyeon.vercel.app"), // 실제 배포 URL로 변경 필요
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: aboutMeData.name,
    jobTitle: `${aboutMeData.job} 개발자`,
    email: aboutMeData.email,
    url: aboutMeData.githubLink,
    sameAs: [aboutMeData.githubLink],
    description: `${aboutMeData.job} 개발자 포트폴리오`,
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAFAF9] dark:bg-dark`}
      >
        {children}
      </body>
    </html>
  );
}
