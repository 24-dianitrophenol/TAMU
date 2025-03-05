import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000',
    title: 'Web Development Excellence',
    description: 'Custom solutions built with cutting-edge technologies'
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
    title: 'Professional Design Services',
    description: 'Creating stunning visuals that capture attention'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    title: 'Reliable Hosting Solutions',
    description: 'Fast, secure, and always available'
  }
];

export default function Hero() {
  const navigate = useNavigate();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  };

  const handleStartProject = () => {
    // Scroll to hosting section
    const hostingSection = document.querySelector('#hosting');
    if (hostingSection) {
      hostingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => {
    // Scroll to recent projects section
    const recentProjectsSection = document.querySelector('#recent-projects');
    if (recentProjectsSection) {
      recentProjectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-indigo-900 to-indigo-800 pt-16">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 z-0">
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-screen object-cover opacity-10"
              />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 min-h-[calc(100vh-4rem)]">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStartProject}
                    className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors flex items-center text-sm sm:text-base sm:px-8"
                  >
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleViewWork}
                    className="border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-md hover:bg-teal-400 hover:text-white transition-colors text-sm sm:text-base sm:px-8"
                  >
                    View Our Work
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}