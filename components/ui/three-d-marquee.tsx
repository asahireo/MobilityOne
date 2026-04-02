"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

interface ThreeDMarqueeProps {
  images?: string[];
  className?: string;
}

const ThreeDMarquee = ({
  images = [],
  className,
}: ThreeDMarqueeProps) => {
  // Duplicate images to fill 4 columns well
  const allImages = images.length < 12 ? [...images, ...images] : images;
  const chunkSize = Math.ceil(allImages.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return allImages.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[560px] w-full overflow-hidden rounded-2xl",
        className
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1200px] shrink-0 max-xl:size-full max-xl:scale-100 max-sm:scale-110">
          <div
            style={{ transform: "rotateX(50deg) rotateY(0deg) rotateZ(45deg)" }}
            className="relative -top-20 right-[-40%] grid size-full origin-top-left grid-cols-4 gap-4 transform-3d max-xl:-top-16 max-xl:right-[-30%] max-sm:-top-10 max-sm:right-[-20%] max-sm:gap-3"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.figure
                animate={{ y: colIndex % 2 === 0 ? [0, -80] : [-80, 0] }}
                transition={{
                  duration: colIndex % 2 === 0 ? 12 : 16,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-4 max-sm:gap-3"
              >
                {subarray.map((src, imageIndex) => (
                  <div
                    className="relative flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
                    key={imageIndex + src}
                  >
                    <Image
                      className="h-full w-full select-none object-contain drop-shadow-lg"
                      src={src}
                      draggable={false}
                      alt={`Partner ${imageIndex + 1}`}
                      width={480}
                      height={360}
                    />
                  </div>
                ))}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDMarquee;
