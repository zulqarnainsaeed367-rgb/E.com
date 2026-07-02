import { categories, products } from "@/data/catalog";

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatPrice(value: number) {
  return moneyFormatter.format(value);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(categoryName: string) {
  return products.filter((product) => product.category.toLowerCase() === categoryName.toLowerCase());
}

export function getRelatedProducts(productSlug: string) {
  const product = getProductBySlug(productSlug);

  if (!product) {
    return [];
  }

  return products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 4);
}

export function searchProducts(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) => {
    return [product.name, product.description, product.brand, product.category, product.sku].some((field) =>
      field.toLowerCase().includes(normalizedQuery),
    );
  });
}

export function filterProducts(filters: {
  query?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
}) {
  return products.filter((product) => {
    if (filters.query && !searchProducts(filters.query).some((item) => item.slug === product.slug)) {
      return false;
    }

    if (filters.category && filters.category !== "All" && product.category !== filters.category) {
      return false;
    }

    if (filters.brand && filters.brand !== "All" && product.brand !== filters.brand) {
      return false;
    }

    if (typeof filters.minPrice === "number" && product.price < filters.minPrice) {
      return false;
    }

    if (typeof filters.maxPrice === "number" && product.price > filters.maxPrice) {
      return false;
    }

    if (typeof filters.rating === "number" && product.rating < filters.rating) {
      return false;
    }

    return true;
  });
}
