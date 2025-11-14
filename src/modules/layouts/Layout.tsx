import { Header } from "./Header";
import { AppShell, Stack } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <AppShell padding={0} header={{ height: 64 }}>
      <Header />
      <Stack component="main" p={20} pt={84}>
        <Outlet />
      </Stack>
      <Footer />
    </AppShell>
  );
}
