import {
  Badge,
  Divider,
  Group,
  Paper,
  Rating,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import type { Product } from "@/types";
import { ProductActions } from "@modules/products";
import { ChevronRight, Star } from "lucide-react";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <Stack gap={20}>
      <div>
        <Title order={1} size="h2" fw={700} className="text-gray-800">
          {product.name}
        </Title>

        <Group mt={4}>
          <Rating defaultValue={4.5} readOnly />

          <Text size="sm" color="dimmed">
            (4.5 • 128 reviews)
          </Text>
        </Group>
      </div>

      <Group align="center">
        <Badge size="xl" color="violet" variant="filled" radius="md">
          $ {product.price.toFixed(2)}
        </Badge>

        <Text size="sm" color="green" fw={600}>
          In Stock
        </Text>
      </Group>

      <Paper p="md" withBorder radius="md" className="bg-gray-50">
        <Text size="sm" color="dimmed" lineClamp={4}>
          {product.description}
        </Text>
      </Paper>

      <Divider />

      <ProductActions product={product} />

      {/* Extra Info */}
      <Stack gap="xs" mt="xl">
        <Group>
          <Star size={18} className="text-yellow-500" />
          <Text size="sm">Free shipping on orders over $50</Text>
        </Group>

        <Group>
          <ChevronRight size={18} className="text-gray-500" />
          <Text size="sm">30-day returns</Text>
        </Group>
      </Stack>
    </Stack>
  );
}
