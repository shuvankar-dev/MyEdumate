import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
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
              Empowering Students Through Ethical Academic Support
            </p>
            <p className="text-xs text-gray-500">
              Registered Address: Vijayawada, Andhra Pradesh, India
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-[#F2C94C] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#F2C94C] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#F2C94C] transition-colors">About Us</a></li>
              <li><a href="#calculator" className="hover:text-[#F2C94C] transition-colors">Get Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">Delivery Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">
              © {new Date().getFullYear()} Bhagavan Global Educational Services LLP. All rights reserved.
            </p>
            <p className="text-xs">
              MyEdumate provides ethical academic editing, mentoring, and research support services.
              We do not engage in ghostwriting or any unethical academic practices.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
