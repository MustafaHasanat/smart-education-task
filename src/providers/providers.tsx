"use client";

import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../constants";
import TanStackProvider from "./tanstack-provider";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <TanStackProvider>{children}</TanStackProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}
