"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/logo-1.jpeg",
    "/logo-2.jpeg",
    "/logo-3.jpeg",
    "/logo-4.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col justify-center items-center font-mono h-screen">
      <Image
        src={images[currentImageIndex]}
        alt="Bruta Collectif Logo"
        width={300}
        height={300}
        className="mb-4"
      />
      <div className="flex flex-col m-4">
        <h1 className="text-xl text-blue-700">BRUTA COLLECTIF</h1>
        <h2 className="text-blue-700">collectif culinaire // private events</h2>
        <p>
          contact us on{" "}
          <a
            href="https://www.instagram.com/bruta.collectif/"
            className="border-b border-blue-700"
          >
            instagram
          </a>
        </p>
      </div>
    </div>
  );
}
