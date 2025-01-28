import { useState, useEffect } from "react";

export default function Banner() {
  // Array of image and text content
  const slides = [
    {
      image: "/poster1.jpg",
      title: "iPhone 15 Pro",
      subtitle: "Pro. Beyond.",
      description: "Created to change everything for the better. For everyone.",
      link : "",
    },
    {
      image: "/poster2.jpg",
      title: "SAMSUNG S25",
      subtitle: "Power. Reimagined.",
      description: "The ultimate device for creators and professionals.",
      link : "",
    },
    {
      image: "/poster3.jpg",
      title: "Google PIXEL 9",
      subtitle: "Future on Your Wrist.",
      description: "Advanced health and fitness features. Redesigned.",
      link : "",
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
    <div className="w-screen h-[600px] flex justify-center items-center bg-gray-100 relative overflow-hidden flex-wrap">
    {/* Background Image */}
    <img
      src={currentSlide.image}
      alt={`Slide ${currentSlideIndex}`}
      className="w-full h-full object-cover"
    />
  
    {/* Text Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
    <div className="absolute left-4 sm:left-20 bottom-10 text-white max-w-[500px] space-y-4">
      <h3 className="text-lg">{currentSlide.subtitle}</h3>
      <h1 className="text-4xl sm:text-6xl font-bold">{currentSlide.title}</h1>
      <p className="text-gray-200">{currentSlide.description}</p>
      <a href={currentSlide.link}>
        <button className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-blue-800 transition">
          Shop Now
        </button>
      </a>
    </div>
  </div>


  );
}
