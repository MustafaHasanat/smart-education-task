import { Container, Grid, Skeleton, Stack } from "@mantine/core";

export function ProductDetailSkeleton() {
  return (
    <Container size="xl" py="xl" w={"100%"}>
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Skeleton height={400} radius="xl" />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap={20}>
            <Skeleton height={40} width="80%" />
            <Skeleton height={30} width={100} />
            <Skeleton height={80} />
            <Skeleton height={50} width="100%" />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
