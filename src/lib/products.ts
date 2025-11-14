import { faker } from "@faker-js/faker";
import type { Product } from "../types";
import { delay } from "./helpers";

// Generate 10,000 products once
const TOTAL_PRODUCTS = 10_000;
const PAGE_SIZE = 24;

const generateProducts = (): Product[] => {
  return Array.from({ length: TOTAL_PRODUCTS }, () => ({
    id: faker.string.uuid(),
    slug: faker.helpers.slugify(faker.commerce.productName()).toLowerCase(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription().slice(0, 120) + "...",
    price: parseFloat(
      faker.commerce.price({
        dec: 2,
        max: 500,
        min: 50,
      })
    ),
    image: `https://picsum.photos/seed/${faker.string.uuid()}/400/400`,
  }));
};

let cachedProducts: Product[] | null = null;

const getAllProducts = () => {
  if (!cachedProducts) {
    cachedProducts = generateProducts();
  }
  return cachedProducts;
};

export async function fetchProducts(page: number): Promise<{
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}> {
  await delay(300); // simulate network

  const products = getAllProducts();
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return {
    products: products.slice(start, end),
    total: TOTAL_PRODUCTS,
    page,
    totalPages: Math.ceil(TOTAL_PRODUCTS / PAGE_SIZE),
  };
}
