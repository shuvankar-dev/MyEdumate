import { Phone, Mail, MapPin, MessageCircle, Clock, Building } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B5394] via-[#084170] to-[#063153]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2C94C]/10 rounded-full filter blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] px-6 py-2 rounded-full text-sm font-bold mb-6">
            Connect With Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Get in <span className="text-[#F2C94C]">Touch</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We're here to help you succeed in your academic journey. Reach out to us today and let's discuss how we can support your goals!
          </p>
        </div>

        {/* Company Information */}
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/30 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Company Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[#F2C94C] mb-2">Legal Entity</h4>
              <p className="text-white mb-4">BHAGAVAN GLOBAL EDUCATIONAL SERVICES LLP</p>
              
              <h4 className="text-lg font-semibold text-[#F2C94C] mb-2">Business Address</h4>
              <p className="text-gray-200">
                Vijayawada, Andhra Pradesh 520010<br />
                India
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#F2C94C] mb-2">Founder & CEO</h4>
              <p className="text-white mb-4">Mr. Naga Surya Bhagavan</p>
              
              <h4 className="text-lg font-semibold text-[#F2C94C] mb-2">Business Hours</h4>
              <p className="text-gray-200">
                Monday - Sunday: 24/7 Support Available<br />
                Response within 2-4 hours
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <a
            href="tel:+918317542315"
            className="group bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#F2C94C] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Phone className="w-8 h-8 text-[#0B5394]" />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Primary Phone</h3>
            <p className="text-gray-200 group-hover:text-white transition-colors">+91 83175 42315</p>
            <p className="text-sm text-gray-300 mt-2">Call for urgent queries</p>
          </a>

          <a
            href="https://wa.me/919790736503"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#F2C94C] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <MessageCircle className="w-8 h-8 text-[#0B5394]" />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">WhatsApp Support</h3>
            <p className="text-gray-200 group-hover:text-white transition-colors">+91 97907 36503</p>
            <p className="text-sm text-gray-300 mt-2">Preferred contact method</p>
          </a>

          <a
            href="mailto:Bhagavanthavva@myedumate.co"
            className="group bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#F2C94C] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Mail className="w-8 h-8 text-[#0B5394]" />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Email Support</h3>
            <p className="text-gray-200 group-hover:text-white transition-colors break-words text-sm">
              Bhagavanthavva@myedumate.co
            </p>
            <p className="text-sm text-gray-300 mt-2">For detailed inquiries</p>
          </a>
        </div>

        {/* Additional Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F2C94C] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Building className="w-8 h-8 text-[#0B5394]" />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Business Registration</h3>
            <p className="text-gray-200 mb-2">Registered under the Limited Liability Partnership Act, 2008</p>
            <p className="text-gray-200">Government of India</p>
          </div>

          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F2C94C] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Clock className="w-8 h-8 text-[#0B5394]" />
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Support Availability</h3>
            <p className="text-gray-200 mb-2">24/7 WhatsApp Support</p>
            <p className="text-gray-200 mb-2">Email responses within 2-4 hours</p>
            <p className="text-gray-200">Emergency support available</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/30 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get <span className="text-[#F2C94C]">Started</span>?
            </h3>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Contact us today for a personalized consultation and let us help you achieve academic excellence with our proven methods and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919790736503?text=Hi, I would like to know more about your services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <MessageCircle className="mr-3 w-5 h-5" />
                Start a Conversation
              </a>
              
              <a
                href="mailto:Bhagavanthavva@myedumate.co"
                className="inline-flex items-center justify-center border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0B5394] transition-all"
              >
                <Mail className="mr-3 w-5 h-5" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
