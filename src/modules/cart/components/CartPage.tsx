import {
  Badge,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { EmptyCartState, CartItem, useCart } from "@modules/cart";
import { ShoppingCart, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export function CartPage() {
  const { cart, clearCart, cartTotal, cartItemsCount } = useCart();

  if (cart.items.length === 0) {
    return <EmptyCartState />;
  }
  return (
    <Container size="lg" py="xl" w={"100%"}>
      <Title order={1} mb="md" className="flex items-center gap-2">
        <ShoppingCart size={32} />
        <Text>Your Cart</Text>
        <Badge size="lg" color="blue" variant="filled" radius="xl">
          {cartItemsCount}
        </Badge>
      </Title>

      <Stack gap="lg">
        {cart.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Stack>

      <Divider my="xl" />

      <Paper
        p="md"
        radius="md"
        withBorder
        className="bg-linear-to-r from-blue-50 to-indigo-50"
      >
        <Group justify="between" align="center">
          <Text size="xl" fw={700} className="text-gray-800">
            Total:
          </Text>
          <Text size="xl" fw={700} color="blue">
            ${cartTotal.toFixed(2)}
          </Text>
        </Group>
      </Paper>

      {/* Actions */}
      <Group justify="between" mt="xl">
        <Button
          variant="light"
          color="red"
          leftSection={<Trash size={18} />}
          onClick={clearCart}
        >
          Clear Cart
        </Button>

        <Button
          component={Link}
          to="#"
          className="bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
          disabled
        >
          Proceed to Checkout (soon)
        </Button>
      </Group>
    </Container>
  );
}
