"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  title: string;
  images: string[];
}

export function ProductGallery({ title, images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const activeImage = images[selectedIndex] ?? images[0];

  return (
    <div className="space-y-4 lg:col-span-7">
      {/* Главное изображение */}
      <figure className="relative aspect-square w-full overflow-hidden rounded-3xl bg-card text-card-foreground shadow-sm border border-border">
        {activeImage ? (
          <Image
            src={activeImage}
            alt={`${title} — view ${selectedIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            loading="eager"
            className="object-cover transition-transform duration-300"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6">
            <span className="text-xs font-medium text-muted-foreground">
              Studio Render · {title}
            </span>
          </div>
        )}
        <figcaption className="sr-only">
          {title} — view {selectedIndex + 1}
        </figcaption>
      </figure>

      {/* Сетка миниатюр */}
      {images.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, index) => {
            const isSelected = index === selectedIndex;

            return (
              <button
                key={`${img}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View image ${index + 1}`}
                aria-pressed={isSelected}
                className={`relative aspect-square overflow-hidden rounded-2xl bg-card text-card-foreground shadow-2xs border transition-all focus:outline-none ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-border hover:border-primary/60"
                }`}
              >
                <Image
                  src={img}
                  alt={`${title} thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 25vw, 15vw"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
