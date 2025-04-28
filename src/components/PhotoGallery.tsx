
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function PhotoGallery() {
  const swiperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
      
      return () => {
        swiper.destroy();
      };
    }
  }, []);
  
  // Removed images: "Social skills development", "Children doing water play", "Child playing in colorful tunnel", and any slides with no picture.
  // Kept only main classroom and candid photos where heads are not cut off.
  const galleryImages = [
    {
      src: "/lovable-uploads/4782802126642597472.jpg",
      alt: "Child learning and playing"
    },
    {
      src: "/lovable-uploads/76340a11-bb0a-43de-8a24-d431853848aa.png",
      alt: "Children learning and playing"
    },
    {
      src: "/lovable-uploads/ec663bf1-44d5-4695-a9a6-0b38a56105e2.png",
      alt: "Open for play schedule"
    },
    {
      src: "/lovable-uploads/6e26cb94-68a3-4b62-823e-e6b9cab3b359.png",
      alt: "Visit us today"
    }
    // Retained only the slides where people are visible and heads are not cut off.
  ];
  
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container">
        <h2 className="section-heading mb-12">Our Little Scholars at Play</h2>
        
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {galleryImages.map((image, index) => (
              <div key={index} className="swiper-slide">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-6"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}
