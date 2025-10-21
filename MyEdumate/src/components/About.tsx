import { Users, Globe, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0B5394] mb-6">About MyEdumate</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                <span className="font-bold text-[#0B5394]">BHAGAVAN GLOBAL EDUCATIONAL SERVICES LLP</span>, operating as MyEdumate,
                is your trusted partner in academic excellence. Founded and led by <span className="font-semibold">Mr. Naga Surya Bhagavan</span>,
                we have been empowering students since 2021.
              </p>

              <p>
                Based in Vijayawada, Andhra Pradesh, we specialize in providing ethical academic editing,
                mentoring, and research support services. Our commitment is to help students develop their
                academic skills while maintaining the highest standards of integrity.
              </p>

              <p>
                We are particularly proud to serve the Telugu student communities across USA, UK, and Australia,
                having successfully completed over 10,000 academic projects with an outstanding 99.99% pass rate.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#0B5394] to-[#084170] rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Our Commitment</h3>
              <p className="text-gray-100">
                MyEdumate stands for ethical academic support. We don't write papers for you—we mentor,
                guide, and help you develop the skills needed to excel independently in your academic journey.
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
              <div className="text-gray-600 font-medium">Pass Rate</div>
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
      </div>
    </section>
  );
}
