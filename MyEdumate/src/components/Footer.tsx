import { GraduationCap, Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0B5394] to-[#084170] rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#F2C94C]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MyEdumate</h3>
                <p className="text-xs text-gray-400">By Bhagavan Global Educational Services LLP</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering Students Through Ethical Academic Support Services Since 2021
            </p>
            <div className="space-y-2 text-xs text-gray-500">
              <p><strong>Registered Office:</strong></p>
              <p>Vijayawada, Andhra Pradesh 520010, India</p>
              <p><strong>LLP Registration:</strong> Under LLP Act, 2008</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#home" className="hover:text-[#F2C94C] transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-[#F2C94C] transition-colors">Services</a></li>
              <li><a href="/#about" className="hover:text-[#F2C94C] transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-[#F2C94C] transition-colors">Contact</a></li>
              <li><Link to="/pricing" className="hover:text-[#F2C94C] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms-and-conditions" className="hover:text-[#F2C94C] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#F2C94C] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-[#F2C94C] transition-colors">Refund Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-[#F2C94C] transition-colors">Data Protection</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#F2C94C]" />
                <a href="mailto:Bhagavanthavva@myedumate.co" className="hover:text-[#F2C94C] transition-colors">
                  Bhagavanthavva@myedumate.co
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#F2C94C]" />
                <a href="tel:+918317542315" className="hover:text-[#F2C94C] transition-colors">
                  +91 83175 42315
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-[#F2C94C]" />
                <a href="https://wa.me/919790736503" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2C94C] transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 mb-2">Business Hours:</p>
              <p className="text-xs text-gray-400">24/7 WhatsApp Support Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h5 className="text-white font-semibold mb-2 text-sm">Our Services Include:</h5>
              <p className="text-xs text-gray-400">
                Academic Editing, Plagiarism Improvement, Research Mentoring, 
                Formatting & Citation, Presentation Preparation, Academic Skill Coaching
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2 text-sm">Payment Methods:</h5>
              <p className="text-xs text-gray-400">
                Razorpay (UPI, Cards, Net Banking), PayPal, Wire Transfer, Bank Transfer (NEFT/RTGS)
              </p>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">
              © {new Date().getFullYear()} BHAGAVAN GLOBAL EDUCATIONAL SERVICES LLP. All rights reserved.
            </p>
            <p className="text-xs mb-2">
              MyEdumate provides ethical academic editing, mentoring, and research support services.
              We maintain the highest standards of academic integrity and do not engage in ghostwriting.
            </p>
            <p className="text-xs text-gray-600">
              Registered in India | Serving students globally since 2021 | 
              Trusted by 10,000+ students worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
