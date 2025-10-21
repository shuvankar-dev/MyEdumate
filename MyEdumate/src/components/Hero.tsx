import { useState } from 'react';
import { ArrowRight, Calculator as CalcIcon, DollarSign, Sparkles } from 'lucide-react';
import backgroundImage from '../assets/background.png';

const serviceTypes = [
  { value: 'editing', label: 'Editing & Proofreading', rate: 8 },
  { value: 'plagiarism', label: 'Plagiarism Improvement', rate: 12 },
  { value: 'research', label: 'Research Mentoring', rate: 15 },
  { value: 'formatting', label: 'Formatting & Citation', rate: 6 },
  { value: 'presentation', label: 'Presentation Preparation', rate: 10 },
  { value: 'coaching', label: 'Academic Skill Coaching', rate: 18 }
];

const urgencyLevels = [
  { value: '7', label: '7+ Days', multiplier: 1 },
  { value: '5', label: '5-6 Days', multiplier: 1.2 },
  { value: '3', label: '3-4 Days', multiplier: 1.5 },
  { value: '2', label: '2 Days', multiplier: 1.8 },
  { value: '1', label: '24 Hours', multiplier: 2.2 }
];

const academicLevels = [
  { value: 'high-school', label: 'High School', multiplier: 0.8 },
  { value: 'undergraduate', label: 'Undergraduate', multiplier: 1 },
  { value: 'masters', label: 'Masters', multiplier: 1.3 },
  { value: 'phd', label: 'PhD/Doctorate', multiplier: 1.6 }
];

export default function Hero() {
  const [serviceType, setServiceType] = useState('editing');
  const [wordCount, setWordCount] = useState(1000);
  const [urgency, setUrgency] = useState('7');
  const [academicLevel, setAcademicLevel] = useState('undergraduate');

  const calculatePrice = () => {
    const service = serviceTypes.find(s => s.value === serviceType);
    const urgencyMultiplier = urgencyLevels.find(u => u.value === urgency)?.multiplier || 1;
    const levelMultiplier = academicLevels.find(l => l.value === academicLevel)?.multiplier || 1;

    const basePrice = (wordCount / 250) * (service?.rate || 8);
    const totalPrice = basePrice * urgencyMultiplier * levelMultiplier;

    return Math.round(totalPrice);
  };

  const estimatedPages = Math.ceil(wordCount / 250);
  const totalPrice = calculatePrice();
  const priceInINR = Math.round(totalPrice * 83);

  return (
    <section 
      id="home" 
      className="relative text-white py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2C94C] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 10,000+ Students Worldwide</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in">
              <span className="block">Excellence in</span>
              <span className="bg-gradient-to-r from-[#F2C94C] to-[#FFD700] bg-clip-text text-transparent">Academic Support</span>
              <span className="block">Services</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl animate-fade-in">
              MyEdumate provides <span className="font-semibold text-[#FFD700]">ethical academic editing, mentoring, and research support</span> services.<br />
              Trusted by Telugu student communities across USA, UK & Australia since 2021.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0B5394] transition-all"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Content - Premium Calculator Card */}
          <div className="flex-1 flex items-center justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F2C94C]/30 to-[#FFD700]/30 rounded-3xl transform rotate-1 opacity-60 blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/30">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#0B5394] to-[#084170] rounded-xl mb-3 shadow-lg">
                    <CalcIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B5394] mb-2">Quick Quote Calculator</h3>
                  <p className="text-gray-600">Get instant pricing for your project</p>
                </div>

                <div className="space-y-4">
                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0B5394] focus:outline-none transition-all bg-white text-gray-900"
                    >
                      {serviceTypes.map(service => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Word Count */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Words: {wordCount.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="250"
                      max="5000"
                      step="250"
                      value={wordCount}
                      onChange={(e) => setWordCount(Number(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0B5394]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>250</span>
                      <span>5,000</span>
                    </div>
                  </div>

                  {/* Academic Level & Deadline */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Level
                      </label>
                      <select
                        value={academicLevel}
                        onChange={(e) => setAcademicLevel(e.target.value)}
                        className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0B5394] focus:outline-none transition-all bg-white text-gray-900 text-sm"
                      >
                        {academicLevels.map(level => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Deadline
                      </label>
                      <select
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0B5394] focus:outline-none transition-all bg-white text-gray-900 text-sm"
                      >
                        {urgencyLevels.map(level => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="bg-gradient-to-r from-[#0B5394] to-[#084170] rounded-2xl p-6 text-white mt-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-[#F2C94C]" />
                        <span className="font-semibold">Estimated Price</span>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#F2C94C]">${totalPrice}</div>
                        <div className="text-sm text-gray-300">≈ ₹{priceInINR.toLocaleString('en-IN')}</div>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm mb-4">
                      <span>Pages: {estimatedPages}</span>
                      <span>Time: {urgencyLevels.find(u => u.value === urgency)?.label}</span>
                    </div>

                    <a
                      href={`https://wa.me/919790736503?text=Hi, I need help with ${serviceTypes.find(s => s.value === serviceType)?.label}. Word count: ${wordCount}, Deadline: ${urgencyLevels.find(u => u.value === urgency)?.label}, Level: ${academicLevels.find(l => l.value === academicLevel)?.label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] py-3 rounded-xl font-bold text-center hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      Get Started on WhatsApp
                    </a>
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
