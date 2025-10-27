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

              <p className="text-lg">
                MyEdumate is a leading educational services company specializing in ethical academic editing,
                mentoring, and research support. We provide comprehensive academic assistance to students
                pursuing higher education across the globe.
              </p>

              <p>
                Our services are designed to enhance students' academic skills, improve their understanding
                of complex subjects, and help them achieve their educational goals while maintaining the
                highest standards of academic integrity.
              </p>

              <p>
                We are particularly proud to serve the Telugu student communities across USA, UK, and Australia,
                having successfully completed over 10,000 academic projects with an outstanding 99.99% success rate.
              </p>
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
