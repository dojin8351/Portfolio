import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://portfolio-dohyeon.vercel.app/sitemap.xml", // 실제 배포 URL로 변경 필요
  }
}
