import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getFileLastModified(filePath: string): Date {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      return fs.statSync(fullPath).mtime;
    }
  } catch (e) {
    // fallback
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getsayyan.com";

  const routes = [
    {
      path: "",
      file: "app/page.tsx",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      path: "/about",
      file: "app/about/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/services",
      file: "app/services/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/works",
      file: "app/works/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/case-studies",
      file: "app/case-studies/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/contact",
      file: "app/contact/page.tsx",
      changeFrequency: "yearly" as const,
      priority: 0.9,
    },
    {
      path: "/web-developer-kerala",
      file: "app/web-developer-kerala/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/hire-web-developer-gcc",
      file: "app/hire-web-developer-gcc/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Service Subpages
    {
      path: "/services/web-development",
      file: "app/services/web-development/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/services/mobile-app-development",
      file: "app/services/mobile-app-development/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/services/ecommerce-development",
      file: "app/services/ecommerce-development/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/services/warehouse-management-systems",
      file: "app/services/warehouse-management-systems/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/services/academic-projects",
      file: "app/services/academic-projects/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Case Study Subpages
    {
      path: "/case-studies/vazhayil-natural",
      file: "app/case-studies/vazhayil-natural/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/case-studies/qint-group",
      file: "app/case-studies/qint-group/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/case-studies/chocolate-pos-dashboard",
      file: "app/case-studies/chocolate-pos-dashboard/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/case-studies/abate-emr-platform",
      file: "app/case-studies/abate-emr-platform/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/case-studies/swa-diamonds",
      file: "app/case-studies/swa-diamonds/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/case-studies/velota",
      file: "app/case-studies/velota/page.tsx",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: getFileLastModified(route.file),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
