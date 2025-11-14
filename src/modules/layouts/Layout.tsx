import { AppShell, Stack } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@modules/layouts";

export function Layout() {
  return (
    <AppShell padding={0} header={{ height: 64 }}>
      <Header />
      <Stack component="main" p={20} pt={84} mih={"calc(100vh - 64px)"}>
        <Outlet />
      </Stack>
      <Footer />
    </AppShell>
  );
}
