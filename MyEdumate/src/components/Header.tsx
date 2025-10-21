import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0B5394] to-[#084170] rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7 text-[#F2C94C]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0B5394] to-[#084170] bg-clip-text text-transparent">
                MyEdumate
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block font-medium">
                Empowering Students Through Ethical Academic Support
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <a
              href="#home"
              className="relative px-4 py-2 text-gray-700 hover:text-[#0B5394] transition-all font-medium rounded-lg hover:bg-gray-50 group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0B5394] to-[#F2C94C] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="relative px-4 py-2 text-gray-700 hover:text-[#0B5394] transition-all font-medium rounded-lg hover:bg-gray-50 group"
            >
              Services
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0B5394] to-[#F2C94C] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="relative px-4 py-2 text-gray-700 hover:text-[#0B5394] transition-all font-medium rounded-lg hover:bg-gray-50 group"
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0B5394] to-[#F2C94C] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="relative px-4 py-2 text-gray-700 hover:text-[#0B5394] transition-all font-medium rounded-lg hover:bg-gray-50 group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0B5394] to-[#F2C94C] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </a>
            <div className="pl-4">
              <a
                href="https://wa.me/919790736503"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-105 hover:from-[#FFD700] hover:to-[#F2C94C]"
              >
                Get Quote
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#0B5394] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <a
              href="#home"
              className="block px-4 py-3 text-gray-700 hover:text-[#0B5394] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-4 py-3 text-gray-700 hover:text-[#0B5394] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-gray-700 hover:text-[#0B5394] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-gray-700 hover:text-[#0B5394] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-4 pt-2">
              <a
                href="https://wa.me/919790736503"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
