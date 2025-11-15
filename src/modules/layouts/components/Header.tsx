import {
  ActionIcon,
  AppShell,
  Badge,
  Flex,
  Group,
  NavLink,
  Text,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { House, ShoppingCart, Store } from "lucide-react";
import { RoutePath } from "@/constants";
import { useCart } from "@modules/cart";

export function Header() {
  const location = useLocation();
  const { cartItemsCount } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppShell.Header
      className="fixed h-16 shadow-sm border-b border-gray-200"
      bg={"blue"}
      c={"white"}
    >
      <Group align="center" justify="space-between" px="xl" className="h-full">
        <Flex align="center" gap={50}>
          <Flex align="center" gap={8} visibleFrom="sm">
            <Store />

            <Text size="xl" fw={700} className="text-gray-800">
              SmartEducation
            </Text>
          </Flex>

          <NavLink
            href={RoutePath.PRODUCTS_LISTING}
            className={`relative flex items-center space-x-1 no-underline transition-colors`}
            active={isActive(RoutePath.PRODUCTS_LISTING)}
            label={"Products"}
            variant="filled"
            color="blue"
            leftSection={<House />}
            rightSection={
              <div
                className={`
                  absolute bottom-0 bg-white h-0.5 transition-all rounded-md left-1/2 -translate-x-1/2
                  ${isActive(RoutePath.PRODUCTS_LISTING) ? "w-full" : "w-0"}
                `}
              />
            }
          />
        </Flex>

        <Link
          to="/cart"
          className={`flex items-center space-x-1 no-underline transition-colors relative`}
        >
          <ActionIcon size="lg" variant="subtle" color="white">
            <ShoppingCart />
          </ActionIcon>

          {cartItemsCount > 0 && (
            <Badge
              size="xs"
              color="red"
              variant="filled"
              className="absolute -top-1 -right-1 min-w-[18px] h-[18px] p-0 flex items-center justify-center text-xs font-bold"
            >
              {cartItemsCount}
            </Badge>
          )}
        </Link>
      </Group>
    </AppShell.Header>
  );
}
