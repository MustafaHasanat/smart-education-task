import { AspectRatio, Badge, Card, Group, Image, Text } from "@mantine/core";
import type { Product } from "@/types";
import { Link } from "react-router-dom";
import { RoutePath } from "@/constants";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      component={Link}
      to={RoutePath.PRODUCT_DETAILS?.replace("slug", product.slug)}
      shadow="sm"
      padding="lg"
      radius="md"
      className="h-full flex flex-col transition-transform hover:scale-[1.02] hover:shadow-md"
      withBorder
    >
      <Card.Section>
        <AspectRatio ratio={1}>
          <Image
            src={product.image}
            alt={product.name}
            fit="cover"
            radius="md"
            className="w-full h-full"
          />
        </AspectRatio>
      </Card.Section>

      <Group mt="md" mb="xs">
        <Text fw={600} size="lg" lineClamp={1}>
          {product.name}
        </Text>

        <Badge color="blue" variant="light">
          ${product.price.toFixed(2)}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" lineClamp={2} mb="auto">
        {product.description}
      </Text>
    </Card>
  );
}
