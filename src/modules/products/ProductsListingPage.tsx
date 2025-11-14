import { useState } from "react";
import { useGetProducts } from "../../hooks/useGetProducts";
import {
  Alert,
  Container,
  Grid,
  LoadingOverlay,
  Pagination,
  Title,
} from "@mantine/core";
import { AlertCircle } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { usePagination } from "@mantine/hooks";

export function ProductsListingPage() {
  const [page, onChange] = useState(1);
  const pagination = usePagination({ total: 10, page, onChange });

  const { data, isLoading, isError, error } = useGetProducts({ page });

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xl">
        All Products
      </Title>

      {/* loading */}
      {isLoading && !data && (
        <div className="relative h-96">
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

      {/* Grid */}
      {data && (
        <>
          <Grid gutter="lg">
            {data.products.map((product) => (
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
