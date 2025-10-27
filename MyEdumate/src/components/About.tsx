import { Users, Globe, Award, TrendingUp, Target, Shield, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B5394] mb-6">About MyEdumate</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in ethical academic excellence, empowering students worldwide since 2021
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div className="bg-[#0B5394] text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Company Information</h3>
                <p className="mb-2"><strong>Legal Name:</strong> BHAGAVAN GLOBAL EDUCATIONAL SERVICES LLP</p>
                <p className="mb-2"><strong>Brand Name:</strong> MyEdumate</p>
                <p className="mb-2"><strong>Founder & CEO:</strong> Mr. Naga Surya Bhagavan</p>
                <p className="mb-2"><strong>Established:</strong> 2021</p>
                <p><strong>Headquarters:</strong> Vijayawada, Andhra Pradesh, India</p>
              </div>

              <div className="prose max-w-none text-slate-700">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-slate-900">MyEdumate</span> is a trusted educational services partner that specializes in
                  <span className="font-medium"> ethical academic editing</span>, <span className="font-medium">research mentoring</span>, and
                  <span className="font-medium"> student skill development</span>. We deliver personalized, evidence-based support to
                  students pursuing higher education globally while protecting academic integrity.
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Our offerings are designed to <span className="font-semibold">strengthen academic skills</span>, improve clarity and
                  structure, and help learners meet deadlines—all while maintaining the <em>highest standards of honesty</em> in scholarship.
                </p>

                <div className="mt-4">
                  <p className="text-sm text-slate-600">We proudly serve Telugu student communities across the USA, UK, Australia, and students worldwide.</p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="inline-flex items-center bg-[#0B5394] text-white px-3 py-1 rounded-full text-sm font-semibold">10,000+ Projects</span>
                    <span className="inline-flex items-center bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">99.99% Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#0B5394]" />
              </div>
              <div className="text-3xl font-bold text-[#0B5394] mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Students Helped</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#0B5394]" />
              </div>
              <div className="text-3xl font-bold text-[#0B5394] mb-2">3</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#0B5394]" />
              </div>
              <div className="text-3xl font-bold text-[#0B5394] mb-2">99.99%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#0B5394]" />
              </div>
              <div className="text-3xl font-bold text-[#0B5394] mb-2">4+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Service chips moved below the stats cards for better flow */}
        <div className="mt-6 mb-16 flex flex-wrap gap-2 justify-center md:justify-start">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs rounded-full border">Editing & Proofreading</span>
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs rounded-full border">Plagiarism Improvement</span>
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs rounded-full border">Research Mentoring</span>
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs rounded-full border">Formatting & Citation</span>
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs rounded-full border">Presentation Prep</span>
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs rounded-full border">Academic Coaching</span>
        </div>

        {/* Mission, Vision, Values */}
        {/* Our Approach & Team (added for more detail and trust) */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#0B5394] mb-6">Our Approach</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0B5394] flex items-center justify-center text-white">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-800">Discover</h4>
              </div>
              <p className="text-sm text-slate-600">We review your brief and requirements, check submission guidelines, and set clear timelines.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0B5394] flex items-center justify-center text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-800">Plan & Execute</h4>
              </div>
              <p className="text-sm text-slate-600">We assign experienced editors/mentors and follow a structured plan to improve quality and clarity.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0B5394] flex items-center justify-center text-white">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-800">Review & Deliver</h4>
              </div>
              <p className="text-sm text-slate-600">Senior editors verify quality and we deliver with clear revision instructions and next steps.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#0B5394] mb-6">Meet the Team</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#0B5394]" />
              </div>
              <div className="font-semibold text-slate-800">Lead Editor</div>
              <div className="text-sm text-slate-600 mt-2">Experienced academic editor with a background in social sciences and publication editing.</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#0B5394]" />
              </div>
              <div className="font-semibold text-slate-800">Research Mentor</div>
              <div className="text-sm text-slate-600 mt-2">Guides methodology, data interpretation and helps structure research for publication readiness.</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#0B5394]" />
              </div>
              <div className="font-semibold text-slate-800">Quality & Compliance</div>
              <div className="text-sm text-slate-600 mt-2">Ensures ethical practices, plagiarism checks, and compliance with university guidelines.</div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#0B5394] rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0B5394] mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide ethical academic support that empowers students to achieve excellence while 
              developing independent learning skills and maintaining academic integrity.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#0B5394] rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0B5394] mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading global platform for ethical academic support, fostering a culture of 
              learning, growth, and academic excellence among students worldwide.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-[#0B5394] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0B5394] mb-4">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Excellence, Confidentiality, and Student Success. We are committed to ethical 
              practices that support genuine learning and academic growth.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-[#0B5394] to-[#084170] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose MyEdumate?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">✓ Ethical Approach</h4>
              <p className="text-gray-200 mb-4">We focus on mentoring and skill development, not academic dishonesty.</p>
              
              <h4 className="font-bold mb-2">✓ Expert Team</h4>
              <p className="text-gray-200 mb-4">Our team consists of qualified academic professionals and subject matter experts.</p>
              
              <h4 className="font-bold mb-2">✓ Proven Track Record</h4>
              <p className="text-gray-200">99.99% success rate with over 10,000 completed projects.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">✓ Global Reach</h4>
              <p className="text-gray-200 mb-4">Serving students across USA, UK, Australia, and India.</p>
              
              <h4 className="font-bold mb-2">✓ 24/7 Support</h4>
              <p className="text-gray-200 mb-4">Round-the-clock customer support and assistance.</p>
              
              <h4 className="font-bold mb-2">✓ Confidential Service</h4>
              <p className="text-gray-200">Complete privacy and confidentiality guaranteed for all clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
