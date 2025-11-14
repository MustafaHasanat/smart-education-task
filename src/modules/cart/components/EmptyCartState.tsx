import { Container, Title, Text, Button, Stack } from "@mantine/core";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { RoutePath } from "@/constants";

export function EmptyCartState() {
  return (
    <Container size="sm" py="xl" className="text-center" m={"auto"}>
      <Stack align="center" gap="xl">
        <ShoppingCart size={80} className="text-gray-300" />

        <div>
          <Title order={2} c="dimmed">
            Your cart is empty
          </Title>
          <Text size="lg" color="dimmed" mt={4}>
            Looks like you haven't added anything yet.
          </Text>
        </div>

        <Button
          component={Link}
          to={RoutePath.PRODUCTS_LISTING}
          size="lg"
          leftSection={<ShoppingCart size={18} />}
          className="bg-linear-to-r from-blue-600 to-violet-600"
        >
          Continue Shopping
        </Button>
      </Stack>
    </Container>
  );
}
