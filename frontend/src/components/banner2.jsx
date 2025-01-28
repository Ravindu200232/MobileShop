import { useEffect, useState } from "react"

export default function Banner2(){

    const slides1 = [
        { image: "/plastaiton.jpg", title: "PlayStation", details: "Experience next-gen gaming with the PlayStation 5." },
        { image: "/xbox.jpg", title: "Xbox Series X", details: "Power your dreams with ultra-performance gaming." },
      ];
      
      const slides2 = [
        { image: "/samsung galaxys23.jpg", title: "Samsung Galaxy S23", details: "Explore the world with a 200MP camera and powerful performance." },
        { image: "/apple15.jpg", title: "iPhone 15 Pro", details: "Redefining innovation with titanium design and A17 Bionic chip." },
      ];
      
      const slides3 = [
        { image: "/pixcel8.png", title: "Google Pixel 8", details: "Your AI-powered companion with Pixel's best camera yet." },
        { image: "/oneplus.jpg", title: "OnePlus 12", details: "Fast, smooth, and powerful with Snapdragon 8 Gen 3." },
      ];
      
      const slides4 = [
        { image: "/sony.jpg", title: "Sony Xperia 1 V", details: "Pro-grade photography and 4K HDR OLED display in your hand." },
        { image: "/asus.jpg", title: "Asus ROG Phone 7", details: "The ultimate gaming smartphone with uncompromised speed." },
      ];
      
    
   
    
      // State and effects for each slideshow
      const [currentSlideIndex1, setCurrentSlideIndex1] = useState(0);
      const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);
      const [currentSlideIndex3, setCurrentSlideIndex3] = useState(0);
      const [currentSlideIndex4, setCurrentSlideIndex4] = useState(0);
      
    
      // Auto-slide logic for each slideshow
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlideIndex1((prevIndex) =>
            prevIndex === slides1.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
    
        return () => clearInterval(interval);
      }, [slides1.length]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlideIndex2((prevIndex) =>
            prevIndex === slides2.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
    
        return () => clearInterval(interval);
      }, [slides2.length]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlideIndex3((prevIndex) =>
            prevIndex === slides3.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
    
        return () => clearInterval(interval);
      }, [slides3.length]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlideIndex4((prevIndex) =>
            prevIndex === slides4.length - 1 ? 0 : prevIndex + 1
          );
        }, 6000);
    
        return () => clearInterval(interval);
      }, [slides4.length]);
    
     
    
      // Current slides
      const currentSlide1 = slides1[currentSlideIndex1];
      const currentSlide2 = slides2[currentSlideIndex2];
      const currentSlide3 = slides3[currentSlideIndex3];
      const currentSlide4 = slides4[currentSlideIndex4];






    return(
        <div className="w-screen h-[600px] flex  text-white flex-wrap ">
            
            <div className="w-1/2 h-full ">

                <div className="w-full h-1/2 bg-white relative justify-center ">
                <img src={currentSlide1.image} alt={`Slide ${setCurrentSlideIndex1}`} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 w-full h-full  justify-center">
                        <h1 className="mt-52 ml-10 text-2xl font-bold">{currentSlide1.title}</h1>
                        <h2 className="ml-10">{currentSlide1.details}</h2>
                    </div>
                </div>

                <div className="w-full h-1/2  flex">

                    <div className="w-1/2 h-full relative justify-center">
                    <img src={currentSlide2.image} alt={`Slide ${setCurrentSlideIndex2}`} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 w-full h-full  justify-center">
                        <h1 className="mt-52 ml-10 text-2xl font-bold">{currentSlide2.title}</h1>
                        <h2 className="ml-10">{currentSlide2.details}</h2>
                    </div>
                    </div> 

                    <div className="w-1/2 h-full relative justify-center">
                    <img src={currentSlide3.image} alt={`Slide ${setCurrentSlideIndex3}`} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 w-full h-full  justify-center">
                        <h1 className="mt-52 ml-10 text-2xl font-bold">{currentSlide3.title}</h1>
                        <h2 className="ml-10">{currentSlide3.details}</h2>
                    </div>
                    </div>

                </div>
            </div>
            <div className="w-1/2 h-full relative justify-center">
            <img src={currentSlide4.image} alt={`Slide ${setCurrentSlideIndex4}`} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 w-full h-full  justify-center">
                        <h1 className="mt-96 ml-10 text-4xl font-bold">{currentSlide4.title}</h1>
                        <h2 className="ml-10">{currentSlide4.details}</h2>
                    </div>
            </div>
          
        </div>
    )
}