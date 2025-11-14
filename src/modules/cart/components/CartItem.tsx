import {
  Card,
  Image,
  Text,
  Group,
  ActionIcon,
  NumberInput,
  Badge,
  Stack,
  Flex,
} from "@mantine/core";
import { Link } from "react-router-dom";
import type { CartItem } from "@/types";
import { useCart } from "@modules/cart";
import { Trash } from "lucide-react";

interface CartItemProps {
  item: CartItem;
}

export function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <Card
      padding="lg"
      radius="md"
      withBorder
      className="hover:shadow-md transition-shadow"
    >
      <Group
        align="flex-start"
        gap="md"
        className="flex-nowrap flex-col! sm:flex-row!"
      >
        <Flex className="w-full sm:w-fit">
          <Image
            src={item.image}
            alt={item.name}
            radius="md"
            fit="cover"
            className="size-full sm:size-60"
          />
        </Flex>

        <Stack gap="xs" className="flex-1 min-w-0">
          <Text
            fw={600}
            size="lg"
            lineClamp={2}
            component={Link}
            to={`/product/${item.slug}`}
            className="text-blue-600 hover:underline"
          >
            {item.name}
          </Text>

          <Group gap="xs">
            <Badge color="gray" variant="light">
              ${item.price.toFixed(2)} each
            </Badge>
            <Text size="sm" color="dimmed">
              <span>{"x"}</span>
              <span>{item.quantity}</span>
            </Text>
          </Group>

          <Group align="center" gap="xl" mt="auto">
            <Group gap="xs">
              <ActionIcon
                size="sm"
                variant="light"
                color="blue"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                −
              </ActionIcon>

              <NumberInput
                value={item.quantity}
                onChange={(val) => updateQuantity(item.id, Number(val) || 1)}
                min={1}
                max={99}
                style={{ width: 60 }}
                size="xs"
                hideControls
              />

              <ActionIcon
                size="sm"
                variant="light"
                color="blue"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </ActionIcon>
            </Group>

            <Text fw={700} size="lg" color="green">
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </Group>
        </Stack>

        <ActionIcon
          size="lg"
          color="red"
          variant="light"
          onClick={() => removeFromCart(item.id)}
          ms={"auto"}
        >
          <Trash size={18} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
