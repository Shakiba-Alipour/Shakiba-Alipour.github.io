import type { ImageType } from "../../../../types";

export type GalleryLayout =
  | "single"
  | "row"
  | "two-column"
  | "portrait-left"
  | "grid"
  | "masonry";

interface GalleryLayoutResult {
  layout: GalleryLayout;
}

export function getGalleryLayout(
  images: ImageType[],
): GalleryLayoutResult {
  const count = images.length;

  if (count === 0) {
    return { layout: "grid" };
  }

  if (count === 1) {
    return { layout: "single" };
  }

  const portraits = images.filter(
    (image) => image.aspect === "portrait",
  );

  const landscapes = images.filter(
    (image) => image.aspect === "landscape",
  );

  const squares = images.filter(
    (image) => image.aspect === "square",
  );

  // One portrait + at least two landscape images:
  // portrait on the left, landscapes stacked on the right.
  if (
    portraits.length === 1 &&
    landscapes.length >= 2 &&
    squares.length === 0
  ) {
    return { layout: "portrait-left" };
  }

  // All images have the same aspect ratio.
  if (
    portraits.length === count ||
    landscapes.length === count ||
    squares.length === count
  ) {
    if (count === 2) {
      return { layout: "two-column" };
    }

    return { layout: "row" };
  }

  // Mixed combinations that do not match a dedicated layout.
  return { layout: "masonry" };
}