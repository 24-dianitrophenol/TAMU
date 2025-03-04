import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { Mail, MapPin, Apple as WhatsApp, Home, Briefcase, Users, Phone, Heart, Code, Server, PenTool, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import footerImage from './images/logo/logo.png';
import backImage from './images/projects/footer.jpg';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backImage}
          alt="Footer Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-indigo-800 opacity-95"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={footerImage} 
                alt="Logo" 
                className="h-10 w-auto" 
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Creating exceptional digital experiences through innovative web solutions.
            </p>
            <div className="space-y-2">
              <a href="https://wa.me/256782283902" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                <WhatsApp className="h-5 w-5 mr-2" />
               +256 782 283902
              </a>
              <a href="mailto:tamuwebsolutions@gmail.com" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                tamuwebsolutions@gmail.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                Banda, Kampala-Uganda
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/tamuwebsolutions1?igsh=MmI5OXA2aGhrdjJu" className="bg-indigo-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-indigo-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-indigo-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-indigo-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/tamuwebsolution?t=6-FLSx3Nv0ELUFQhFp-uUw&s=08" className="bg-indigo-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-indigo-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-indigo-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-indigo-700 transition-colors">
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#home')} className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#portfolio')} className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Code className="h-4 w-4 mr-2" />
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#team')} className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Users className="h-4 w-4 mr-2" />
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#services')} className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Code className="h-4 w-4 mr-2" />
                  Web Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <PenTool className="h-4 w-4 mr-2" />
                  UI/UX Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#hosting')} className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Server className="h-4 w-4 mr-2" />
                  Web Hosting
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Heart className="h-4 w-4 mr-2" />
                  Support & Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium">Monday - Friday:</span>
                <br />
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Saturday:</span>
                <br />
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Sunday:</span>
                <br />
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} All rights reserved TAMU WEB.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}