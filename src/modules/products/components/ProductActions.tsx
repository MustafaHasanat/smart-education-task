import { Button, Group, NumberInput } from "@mantine/core";
import type { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@modules/cart";
import { notifications } from "@mantine/notifications";

type ProductActionsProps = {
  product: Product;
};

export function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);

    setQuantity(1);

    notifications.show({
      title: "Added to cart",
      message: `${product?.name} has been added to your cart successfully!`,
      color: "green",
    });
  };

  return (
    <Group align="end" gap="md">
      <NumberInput
        value={quantity}
        onChange={(value) => setQuantity(Number(value) || 1)}
        min={1}
        max={99}
        step={1}
        style={{ width: 100 }}
        label="Quantity"
        size="md"
      />

      <Button
        size="md"
        leftSection={<ShoppingCart />}
        onClick={handleAddToCart}
        className="bg-linear-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 shadow-lg"
        radius="md"
        fullWidth
      >
        Add to Cart
      </Button>
    </Group>
  );
}
