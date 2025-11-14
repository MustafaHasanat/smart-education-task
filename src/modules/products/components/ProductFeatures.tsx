import { ActionIcon, Grid, Group, Paper, Text, Title } from "@mantine/core";
import { Star } from "lucide-react";

export function ProductFeatures() {
  return (
    <Paper
      mt="xl"
      p="xl"
      radius="lg"
      className="bg-linear-to-br from-blue-50 to-indigo-50"
    >
      <Title order={3} mb="md">
        Why You'll Love It
      </Title>

      <Grid>
        {[
          "Premium Quality",
          "Eco-Friendly",
          "Handcrafted",
          "Lifetime Warranty",
        ].map((feat) => (
          <Grid.Col key={feat} span={{ base: 6, sm: 3 }}>
            <Group>
              <ActionIcon size="lg" radius="xl" color="blue" variant="light">
                <Star size={18} />
              </ActionIcon>

              <Text fw={500}>{feat}</Text>
            </Group>
          </Grid.Col>
        ))}
      </Grid>
    </Paper>
  );
}
