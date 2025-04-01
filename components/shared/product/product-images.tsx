"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        height={1000}
        width={1000}
        className="min-h-[300px] object-cover objcet-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-500",
              current === index && "border-orange-500"
            )}
            onClick={() => setCurrent(index)}
          >
            <Image src={image} alt="image" height={100} width={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
