"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/img8.jpeg",
  "/images/img9.jpeg",
   "/images/img10.jpeg",
"/images/img11.jpeg",
"/images/img12.jpeg",
"/images/img14.jpeg",
"/images/img15.jpeg",
"/images/img16.jpeg",
"/images/img17.jpeg",
"/images/img18.jpeg",
"/images/img20.jpeg",

  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img5.jpeg",
  "/images/img6.jpeg",
  "/images/img7.jpeg",
  
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="inline-block px-5 py-2 rounded-full bg-[#0B5D4D]/10 text-[#0B5D4D] text-sm font-semibold mb-4">
            Photo Gallery
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Moments of Impact
          </h1>

          <div className="w-20 h-1 bg-[#0B5D4D] rounded-full mx-auto mt-4 mb-4" />

          <p className="text-gray-600 max-w-2xl mx-auto">
            Capturing our journey of community development,
            empowerment and sustainable social transformation.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
            >

              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={400}
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                <div className="px-4 py-2 rounded-full bg-white text-black font-medium">
                  View Image
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >

          <div className="relative max-w-5xl w-full">

            <Image
              src={selectedImage}
              alt="Selected Image"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-black font-bold shadow-lg hover:scale-110 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}