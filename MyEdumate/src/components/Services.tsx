import { FileText, Shield, BookOpen, FileCheck, Presentation, Award } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Editing & Proofreading',
    description: 'Professional editing services to refine your academic work with attention to grammar, style, and clarity.'
  },
  {
    icon: Shield,
    title: 'Plagiarism Improvement',
    description: 'Ethical guidance to improve originality and proper citation practices in your academic work.'
  },
  {
    icon: BookOpen,
    title: 'Research Mentoring',
    description: 'Expert mentorship to guide you through research methodology, analysis, and academic writing.'
  },
  {
    icon: FileCheck,
    title: 'Formatting & Citation',
    description: 'Precise formatting according to APA, MLA, Chicago, Harvard, and other citation styles.'
  },
  {
    icon: Presentation,
    title: 'Presentation Preparation',
    description: 'Professional support in creating compelling presentations for your academic projects.'
  },
  {
    icon: Award,
    title: 'Academic Skill Coaching',
    description: 'Personalized coaching to develop your academic writing and research skills for long-term success.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#F2C94C]/10 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0B5394]/10 to-transparent rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] px-6 py-2 rounded-full text-sm font-bold mb-4">
            Premium Academic Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#0B5394] to-[#084170] bg-clip-text text-transparent mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive academic support services designed to help you excel in your educational journey with confidence and integrity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border border-white/50 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B5394]/5 to-[#F2C94C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Icon */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B5394] to-[#084170] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-[#F2C94C]" />
                </div>
              </div>

              <div className="relative">
                <h3 className="text-xl font-bold text-[#0B5394] mb-4 group-hover:text-[#084170] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Call to action that appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="h-px bg-gradient-to-r from-[#0B5394] to-[#F2C94C] mb-3"></div>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-[#0B5394] font-semibold hover:text-[#F2C94C] transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0B5394] to-[#084170] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Excel in Your Academic Journey?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their academic goals with our expert support
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get Started Today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
