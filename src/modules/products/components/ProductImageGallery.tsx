import { useState } from "react";
import { Image, AspectRatio, ActionIcon, Stack, Flex } from "@mantine/core";

interface ProductImageGalleryProps {
  images: string[];
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Stack>
      {/* main image */}
      <AspectRatio ratio={1} className="overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt="Product"
          fit="cover"
          radius="xl"
          className="transition-opacity duration-300 rounded-xl"
        />
      </AspectRatio>

      {/* thumbnails */}
      {images.length > 1 && (
        <div className="w-full overflow-scroll">
          <Flex gap={10}>
            {images.map((img, i) => (
              <ActionIcon
                key={i}
                size={60}
                radius="md"
                variant={activeIndex === i ? "filled" : "light"}
                color={activeIndex === i ? "blue" : "gray"}
                onClick={() => setActiveIndex(i)}
                className="overflow-hidden"
              >
                <Image src={img} alt={`Thumbnail ${i + 1}`} fit="cover" />
              </ActionIcon>
            ))}
          </Flex>
        </div>
      )}
    </Stack>
  );
}
