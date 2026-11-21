import type { ImageType } from "../../../types";
import { getGalleryLayout } from "./utils/projectGallery";

interface ProjectGalleryProps {
  images: ImageType[];
  title: string;
}

interface GalleryImageProps {
  image: ImageType;
  className?: string;
}

function GalleryImage({
  image,
  className = "",
}: GalleryImageProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt || "Project screenshot"}
        className="block h-auto w-full"
        loading="lazy"
      />
    </div>
  );
}

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const { layout } = getGalleryLayout(images);

  if (layout === "single") {
    return (
      <div className="overflow-hidden rounded-xl border border-border">
        <img
          src={images[0].src}
          alt={images[0].alt || `${title} preview`}
          className="block h-auto w-full"
          loading="lazy"
        />
      </div>
    );
  }

  if (layout === "portrait-left") {
    const portraitImage = images.find(
      (image) => image.aspect === "portrait",
    );

    const landscapeImages = images.filter(
      (image) => image.aspect === "landscape",
    );

    if (!portraitImage || landscapeImages.length === 0) {
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {images.map((image) => (
            <GalleryImage
              key={image.src}
              image={image}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]">
        <GalleryImage
          image={portraitImage}
          className="min-h-0"
        />

        <div className="grid min-h-0 gap-4">
          {landscapeImages.map((image) => (
            <GalleryImage
              key={image.src}
              image={image}
              className="min-h-0"
            />
          ))}
        </div>
      </div>
    );
  }

  if (layout === "two-column") {
    return (
      <div className="grid items-stretch gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <GalleryImage
            key={image.src}
            image={image}
          />
        ))}
      </div>
    );
  }

  if (layout === "row") {
    return (
      <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <GalleryImage
            key={image.src}
            image={image}
          />
        ))}
      </div>
    );
  }

  if (layout === "grid") {
    return (
      <div className="grid items-stretch gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <GalleryImage
            key={image.src}
            image={image}
          />
        ))}
      </div>
    );
  }

  // Fallback for mixed or uncommon aspect-ratio combinations.
  return (
    <div className="columns-1 gap-4 sm:columns-2">
      {images.map((image) => (
        <div
          key={image.src}
          className="mb-4 break-inside-avoid"
        >
          <GalleryImage image={image} />
        </div>
      ))}
  </div>
);
}