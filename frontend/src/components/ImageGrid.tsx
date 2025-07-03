import { Container, SimpleGrid, Card, Image, Box, Text, Space } from '@mantine/core';

interface GridImage {
  src: string;
  caption: string;
}

interface ImageGridProps {
  images: GridImage[];
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <>
      <Space h={80} />
      <Container size="xl" px="xl" pb={80}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {images.map((item, index) => (
            <Card key={index} shadow="sm" radius="md" p={0} className="grid-card">
              <Image
                src={item.src}
                alt={item.caption}
                h={300}
                style={{ objectFit: 'cover' }}
              />
              <Box p="md">
                <Text size="sm" c="dark.6" fw={300} ta="center" style={{ letterSpacing: '0.05em' }}>
                  {item.caption}
                </Text>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
