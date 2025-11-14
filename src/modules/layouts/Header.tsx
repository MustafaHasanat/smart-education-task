import { ActionIcon, AppShell, Flex, Group, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { House, ShoppingCart, Store } from "lucide-react";
import { RoutePath } from "../../constants";

export function Header() {
  const location = useLocation();

  // // Get total cart items count from Redux
  // const cartItemsCount = useSelector((state: RootState) =>
  //   state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  // );

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppShell.Header className="fixed h-16 shadow-sm border-b border-gray-200">
      <Group align="center" justify="space-between" px="xl" className="h-full">
        <Flex align="center" gap={8} visibleFrom="sm">
          <Store />

          <Text size="xl" fw={700} me={20} className="text-gray-800">
            SmartEducation
          </Text>

          <Link
            to={RoutePath.PRODUCTS_LISTING}
            className={`relative flex items-center space-x-1 no-underline transition-colors ${
              isActive(RoutePath.PRODUCTS_LISTING)
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            <House />
            <Text fw={500}>Products</Text>

            <div
              className={`
              absolute -bottom-2 bg-blue-400 h-0.5 transition-all rounded-md left-1/2 -translate-x-1/2
              ${isActive(RoutePath.PRODUCTS_LISTING) ? "w-full" : "w-0"}
              `}
            />
          </Link>
        </Flex>

        <Link
          to="/cart"
          className={`flex items-center space-x-1 no-underline transition-colors relative ${
            isActive("/cart")
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          <ActionIcon size="lg" variant="subtle" color="gray">
            <ShoppingCart />
          </ActionIcon>

          {/* {cartItemsCount > 0 && (
              <Badge
                size="xs"
                color="red"
                variant="filled"
                className="absolute -top-1 -right-1 min-w-[18px] h-[18px] p-0 flex items-center justify-center text-xs font-bold"
              >
                {cartItemsCount}
              </Badge>
            )} */}
        </Link>
      </Group>
    </AppShell.Header>
  );
}
