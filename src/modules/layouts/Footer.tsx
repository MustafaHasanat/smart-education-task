import { AppShell, Text } from "@mantine/core";

export function Footer() {
  return (
    <AppShell.Footer
      component="footer"
      className="w-full flex justify-center items-center text-center relative!"
      bg={"blue"}
      p={20}
    >
      <Text>© 2025 All Rights Reserved - Smart Education Task</Text>
    </AppShell.Footer>
  );
}
