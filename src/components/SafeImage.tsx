"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK =
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80";

type Props = Omit<ImageProps, "src" | "onError"> & {
  src: string;
  fallbackSrc?: string;
};

/** next/image wrapper that swaps to a known-good photo if the primary URL 404s */
export function SafeImage({ src, fallbackSrc = FALLBACK, alt, ...rest }: Props) {
  const [current, setCurrent] = useState(src);

  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
