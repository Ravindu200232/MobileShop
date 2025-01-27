import { useState, useEffect } from "react";

export default function Banner() {
  // Array of image and text content
  const slides = [
    {
      image: "/poster1.jpg",
      title: "iPhone 15 Pro",
      subtitle: "Pro. Beyond.",
      description: "Created to change everything for the better. For everyone.",
    },
    {
      image: "/poster2.jpg",
      title: "MacBook Pro M3",
      subtitle: "Power. Reimagined.",
      description: "The ultimate device for creators and professionals.",
    },
    {
      image: "/poster3.jpg",
      title: "Apple Watch Series 9",
      subtitle: "Future on Your Wrist.",
      description: "Advanced health and fitness features. Redesigned.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const currentSlide = slides[currentSlideIndex]; // Get current slide data

  return (
    <div className="w-screen h-[calc(100vh/1.5)] relative flex justify-center items-center bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <img
        src={currentSlide.image}
        alt={`slide-${currentSlideIndex}`}
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute flex flex-col left-[150px] bottom-[150px] text-white">
        <h3 className="text-xl">{currentSlide.subtitle}</h3>
        <h1 className="text-6xl font-bold">{currentSlide.title}</h1>
        <h4 className="font-semibold text-gray-300 mt-2">
          {currentSlide.description}
        </h4>
        <button className="mt-5 px-6 py-3 bg-gray-400 rounded-3xl hover:bg-gray-700">
          Shop Now
        </button>
      </div>
    </div>
  );
}
