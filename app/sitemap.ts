import type { MetadataRoute } from "next";
import { categories, products } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexstore.local";
  const staticRoutes = [
    "",
    "/shop",
    "/categories",
    "/wishlist",
    "/cart",
    "/checkout",
    "/order-success",
    "/login",
    "/register",
    "/forgot-password",
    "/account",
    "/account/orders",
    "/account/addresses",
    "/account/profile",
    "/account/settings",
    "/search",
    "/contact",
    "/about",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...categories.map((category) => ({ url: `${baseUrl}/categories/${category.slug}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${baseUrl}/products/${product.slug}`, lastModified: new Date() })),
  ];
}
