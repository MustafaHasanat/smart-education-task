import { faker } from "@faker-js/faker";
import type { PaginatedData, Product } from "@/types";
import { delay } from "@/lib";
import { PRODUCTS_PAGE_SIZE, PRODUCTS_TOTAL_PRODUCTS } from "@modules/cart";

const generateProducts = ({
  productsCount = PRODUCTS_TOTAL_PRODUCTS,
}: {
  productsCount?: number;
}): Product[] => {
  return Array.from({ length: productsCount }, () => {
    const images: string[] = new Array(15)
      ?.fill(0)
      ?.map(() => `https://picsum.photos/seed/${faker.string.uuid()}/400/400`);

    return {
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
      image: images[0],
      images,
    };
  });
};

export async function fetchProducts(
  page: number
): Promise<PaginatedData<Product>> {
  await delay(300); // simulate network

  const products = generateProducts({});
  const start = (page - 1) * PRODUCTS_PAGE_SIZE;
  const end = start + PRODUCTS_PAGE_SIZE;
  const isEmpty = products?.length === 0;

  return {
    products: products.slice(start, end),
    total: PRODUCTS_TOTAL_PRODUCTS,
    page,
    totalPages: Math.ceil(PRODUCTS_TOTAL_PRODUCTS / PRODUCTS_PAGE_SIZE),
    isEmpty,
  };
}

export async function fetchOneProduct(): Promise<Product> {
  await delay(300); // simulate network

  const products = generateProducts({ productsCount: 1 });

  return products[0];
}
