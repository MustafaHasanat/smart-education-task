import {
  Container,
  Grid,
  Breadcrumbs,
  Anchor,
  Alert,
  Stack,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import { RoutePath } from "@/constants";
import {
  useProductDetails,
  ProductDetails,
  ProductDetailSkeleton,
  ProductFeatures,
  ProductImageGallery,
} from "@modules/products";

export function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading, isError } = useProductDetails(slug!);

  const items = [
    { title: "Products", href: RoutePath.PRODUCTS_LISTING },
    { title: "Details", href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} c="dimmed" size="sm">
      {item.title}
    </Anchor>
  ));

  if (isError) {
    return (
      <Container size="lg" py="xl">
        <Alert color="red" title="Product not found">
          We couldn't find the product you're looking for.
        </Alert>
      </Container>
    );
  }

  return (
    <Stack w={"100%"}>
      <Container size="xl" py="md" w={"100%"}>
        <Breadcrumbs separator="/">{items}</Breadcrumbs>
      </Container>

      {isLoading || !product ? (
        <ProductDetailSkeleton />
      ) : (
        <Container size="xl" py="xl" w={"100%"}>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 5 }}>
              <ProductImageGallery images={product?.images || []} />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <ProductDetails product={product} />
            </Grid.Col>
          </Grid>

          <ProductFeatures />
        </Container>
      )}
    </Stack>
  );
}
