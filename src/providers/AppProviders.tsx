"use client";

import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "@/constants";
import { TanStackProvider } from "@/providers";
import { CartProvider } from "@/modules/cart";
import { Notifications } from "@mantine/notifications";

type ProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <CartProvider>
          <TanStackProvider>
            <Notifications position="bottom-left" />
            {children}
          </TanStackProvider>
        </CartProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}
