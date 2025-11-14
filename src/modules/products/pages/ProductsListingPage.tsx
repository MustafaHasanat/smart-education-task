import { useState } from "react";
import {
  Alert,
  Container,
  Grid,
  LoadingOverlay,
  Pagination,
  Text,
  Title,
} from "@mantine/core";
import { AlertCircle } from "lucide-react";
import { usePagination } from "@mantine/hooks";
import { PRODUCTS_TOTAL_PRODUCTS } from "@modules/cart";
import { useGetProducts, ProductCard } from "@modules/products";

export function ProductsListingPage() {
  const [page, onChange] = useState(1);
  const pagination = usePagination({
    total: PRODUCTS_TOTAL_PRODUCTS,
    page,
    onChange,
  });

  const { data, isLoading, isError, error } = useGetProducts({ page });

  return (
    <Container size="xl" py="xl" className="w-full">
      <Title order={1} mb="xl">
        All Products
      </Title>

      {/* loading */}
      {isLoading && !data && (
        <div className="relative h-96 w-full">
          <LoadingOverlay visible />
        </div>
      )}

      {/* error */}
      {isError && (
        <Alert
          icon={<AlertCircle size={16} />}
          title="Error"
          color="red"
          mb="xl"
        >
          {error instanceof Error ? error.message : "Failed to load products"}
        </Alert>
      )}

      {/* empty state */}
      {data?.isEmpty && <Text>Products list is empty</Text>}

      {/* products listing */}
      {data?.products && data?.products?.length > 0 && (
        <>
          <Grid gutter="lg">
            {data?.products.map((product) => (
              <Grid.Col
                key={product.id}
                span={{ base: 12, xs: 6, sm: 4, lg: 3 }}
              >
                <ProductCard product={product} />
              </Grid.Col>
            ))}
          </Grid>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <Pagination
              total={data.totalPages}
              value={page}
              onChange={pagination?.setPage}
              size="lg"
              radius="md"
              withEdges
            />
          </div>
        </>
      )}
    </Container>
  );
}
