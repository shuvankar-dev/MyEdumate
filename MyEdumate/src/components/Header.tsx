import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0B5394] to-[#084170] rounded-full flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-[#F2C94C]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0B5394]">MyEdumate</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Empowering Students Through Ethical Academic Support</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#0B5394] transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-[#0B5394] transition-colors font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-[#0B5394] transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-[#0B5394] transition-colors font-medium">Contact</a>
            <a href="#calculator" className="bg-[#F2C94C] text-[#0B5394] px-6 py-2 rounded-lg font-semibold hover:bg-[#e0b838] transition-colors">
              Get Quote
            </a>
          </nav>

          <button
            className="md:hidden text-[#0B5394]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block py-2 text-gray-700 hover:text-[#0B5394] transition-colors">Home</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-[#0B5394] transition-colors">Services</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-[#0B5394] transition-colors">About</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-[#0B5394] transition-colors">Contact</a>
            <a href="#calculator" className="block py-2 text-[#0B5394] font-semibold">Get Quote</a>
          </div>
        )}
      </div>
    </header>
  );
}
