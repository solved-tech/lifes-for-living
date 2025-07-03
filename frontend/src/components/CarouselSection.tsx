import { Container, Box, Title, Text, Stack, Space } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';

interface CarouselSlide {
  image: string;
  title: string;
  description: string;
}

interface CarouselSectionProps {
  slides: CarouselSlide[];
}

export function CarouselSection({ slides }: CarouselSectionProps) {
  return (
    <>
      <Space h={60} />
      <Container size="xl" px="xl">
        <Carousel
          withIndicators
          height={400}
          slideSize="100%"
          slideGap="md"
          className="elegant-carousel"
        >
          {slides.map((slide, index) => (
            <Carousel.Slide key={index}>
              <Box
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: rem(8)
                }}
              >
                <Stack align="center" gap="xs">
                  <Title order={2} c="white" ta="center" fw={300} style={{ letterSpacing: '0.03em' }}>
                    {slide.title}
                  </Title>
                  <Text size="lg" c="white" ta="center" fw={300} style={{ letterSpacing: '0.02em' }}>
                    {slide.description}
                  </Text>
                </Stack>
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
