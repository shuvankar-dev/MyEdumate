import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0B5394] to-[#084170]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-200">
            We're here to help you succeed. Reach out to us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="tel:+918317542315"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#0B5394]" />
            </div>
            <h3 className="text-white font-bold mb-2">Phone</h3>
            <p className="text-gray-200">+91 83175 42315</p>
          </a>

          <a
            href="https://wa.me/919790736503"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#0B5394]" />
            </div>
            <h3 className="text-white font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-200">+91 97907 36503</p>
          </a>

          <a
            href="mailto:Bhagavanthavva@myedumate.co"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#0B5394]" />
            </div>
            <h3 className="text-white font-bold mb-2">Email</h3>
            <p className="text-gray-200 break-words">Bhagavanthavva@myedumate.co</p>
          </a>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#0B5394]" />
            </div>
            <h3 className="text-white font-bold mb-2">Location</h3>
            <p className="text-gray-200">Vijayawada, Andhra Pradesh, India</p>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-200 mb-6">
            Contact us today for a personalized consultation and let us help you achieve academic excellence.
          </p>
          <a
            href="https://wa.me/919790736503?text=Hi, I would like to know more about your services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#F2C94C] text-[#0B5394] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e0b838] transition-all transform hover:scale-105"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
