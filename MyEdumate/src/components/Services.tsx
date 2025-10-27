import { FileText, Shield, BookOpen, FileCheck, Presentation, Award } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Editing & Proofreading',
    description: 'Professional editing services to refine your academic work with attention to grammar, style, and clarity.',
    price: 'Starts at ₹399',
    bullets: ['Language & grammar', 'Structure & flow', 'Reference checks']
  },
  {
    icon: Shield,
    title: 'Plagiarism Improvement',
    description: 'Ethical guidance to improve originality and proper citation practices in your academic work.',
    price: 'Starts at ₹299',
    bullets: ['Reference cleanup', 'Paraphrasing suggestions', 'Citation fixes']
  },
  {
    icon: BookOpen,
    title: 'Research Mentoring',
    description: 'Expert mentorship to guide you through research methodology, analysis, and academic writing.',
    price: 'Hourly mentorship',
    bullets: ['Methodology review', 'Data interpretation', 'Draft feedback']
  },
  {
    icon: FileCheck,
    title: 'Formatting & Citation',
    description: 'Precise formatting according to APA, MLA, Chicago, Harvard, and other citation styles.',
    price: 'Starts at ₹199',
    bullets: ['Citation styling', 'Reference formatting', 'Layout & margins']
  },
  {
    icon: Presentation,
    title: 'Presentation Preparation',
    description: 'Professional support in creating compelling presentations for your academic projects.',
    price: 'Starts at ₹499',
    bullets: ['Slide design', 'Speaker notes', 'Visual data polishing']
  },
  {
    icon: Award,
    title: 'Academic Skill Coaching',
    description: 'Personalized coaching to develop your academic writing and research skills for long-term success.',
    price: 'Custom packages',
    bullets: ['Writing workshops', 'Citation tutorials', 'Study planning']
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
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border border-white/60 relative overflow-hidden"
            >
              {/* Icon */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0B5394] to-[#084170] rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <service.icon className="w-6 h-6 text-[#F2C94C]" />
                </div>
              </div>

              <div className="relative">
                <h3 className="text-lg md:text-xl font-semibold text-[#0B5394] mb-2 group-hover:text-[#084170] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>

                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-[#0B5394]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <a
                    href="/pricing"
                    className="inline-flex items-center text-[#0B5394] font-semibold hover:text-[#084170] transition-colors"
                  >
                    Learn More →
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center bg-[#F2C94C] text-[#0B5394] px-3 py-2 rounded-lg font-semibold hover:opacity-90"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small trust row and process steps */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#0B5394] flex items-center justify-center text-white">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-sm">
              <div className="font-semibold text-slate-800">Confidential & Secure</div>
              <div className="text-slate-600">We protect your data and privacy.</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#0B5394] flex items-center justify-center text-white">
              <FileCheck className="w-5 h-5" />
            </div>
            <div className="text-sm text-center">
              <div className="font-semibold text-slate-800">Quality Checked</div>
              <div className="text-slate-600">Each delivery is reviewed by senior editors.</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="w-10 h-10 rounded-full bg-[#0B5394] flex items-center justify-center text-white">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-sm text-right">
              <div className="font-semibold text-slate-800">Trusted by Students</div>
              <div className="text-slate-600">10,000+ projects completed with high satisfaction.</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-12">
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
