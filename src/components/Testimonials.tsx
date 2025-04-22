
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  rating: number;
}

function Testimonial({ quote, author, rating }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-daycare-yellow fill-daycare-yellow" />
        ))}
      </div>
      
      <blockquote className="mb-6">
        <p className="text-lg italic text-gray-700">{quote}</p>
      </blockquote>
      
      <footer className="font-semibold text-daycare-blue">— {author}</footer>
    </div>
  );
}

export function Testimonials() {
  const swiperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
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
  
  const testimonials = [
    {
      quote: "My son has thrived at Aliyas Little Scholars! The teachers are attentive and the curriculum is perfectly balanced between learning and fun.",
      author: "Jessica M., Parent",
      rating: 5,
    },
    {
      quote: "The overnight care option has been a lifesaver for our family. We know our daughter is in good hands even during non-traditional hours.",
      author: "Michael T., Parent",
      rating: 5,
    },
    {
      quote: "We've seen tremendous growth in our child's social skills and confidence since enrolling at Aliyas. The staff truly cares about each child.",
      author: "Samantha K., Parent",
      rating: 5,
    },
    {
      quote: "The facilities are clean, bright, and engaging. Every time I pick up my kids, they don't want to leave!",
      author: "Robert J., Parent",
      rating: 5,
    },
    {
      quote: "From the nutritious meals to the educational activities, everything at Aliyas is designed with children's wellbeing in mind.",
      author: "Tiffany L., Parent",
      rating: 5,
    },
  ];
  
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-heading mb-12">What Parents Say</h2>
        
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide h-auto">
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-8"></div>
        </div>
      </div>
    </section>
  );
}
