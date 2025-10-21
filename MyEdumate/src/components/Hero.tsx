import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#0B5394] via-[#084170] to-[#063153] text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-[#F2C94C] text-[#0B5394] px-4 py-2 rounded-full text-sm font-semibold">
                Trusted by 10,000+ Students Worldwide
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Excellence in <span className="text-[#F2C94C]">Academic Support</span> Services
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              MyEdumate provides ethical academic editing, mentoring, and research support services.
              Trusted by Telugu student communities across USA, UK & Australia since 2021.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#F2C94C] flex-shrink-0" />
                <span className="text-gray-100">99.99% Pass Rate on Completed Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#F2C94C] flex-shrink-0" />
                <span className="text-gray-100">Expert Academic Mentors & Editors</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#F2C94C] flex-shrink-0" />
                <span className="text-gray-100">100% Confidential & Ethical Practices</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center bg-[#F2C94C] text-[#0B5394] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e0b838] transition-all transform hover:scale-105 shadow-lg"
              >
                Calculate Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0B5394] transition-all"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F2C94C] rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="bg-white/20 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#F2C94C] font-semibold">Success Rate</span>
                      <span className="text-3xl font-bold">99.99%</span>
                    </div>
                    <div className="w-full bg-white/30 rounded-full h-3">
                      <div className="bg-[#F2C94C] h-3 rounded-full" style={{width: '99.99%'}}></div>
                    </div>
                  </div>

                  <div className="bg-white/20 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-[#F2C94C] mb-2">10,000+</div>
                      <div className="text-gray-200">Projects Completed</div>
                    </div>
                  </div>

                  <div className="bg-white/20 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-[#F2C94C] mb-2">4+ Years</div>
                      <div className="text-gray-200">Of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
