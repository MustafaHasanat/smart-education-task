import { Route, Routes } from "react-router-dom";
import { Layout, NotFoundPage } from "..";
import { RoutePath } from "@/constants";
import { ProductDetailsPage, ProductsListingPage } from "@modules/products";
import { CartPage } from "@modules/cart";

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={RoutePath.PRODUCTS_LISTING}
          element={<ProductsListingPage />}
        />
        <Route
          path={RoutePath.PRODUCT_DETAILS}
          element={<ProductDetailsPage />}
        />
        <Route path={RoutePath.CART_PAGE} element={<CartPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
