import { useState } from 'react';
import { Calculator as CalcIcon, FileText, Clock, DollarSign } from 'lucide-react';

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

export default function Calculator() {
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
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2C94C] rounded-full mb-4">
            <CalcIcon className="w-8 h-8 text-[#0B5394]" />
          </div>
          <h2 className="text-4xl font-bold text-[#0B5394] mb-4">Calculate Your Quote</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your academic support services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#0B5394] mb-6">Project Details</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0B5394] focus:outline-none transition-colors"
                >
                  {serviceTypes.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label} (${service.rate}/page)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Word Count: {wordCount.toLocaleString()} words
                </label>
                <input
                  type="range"
                  min="250"
                  max="10000"
                  step="250"
                  value={wordCount}
                  onChange={(e) => setWordCount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0B5394]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>250</span>
                  <span>10,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Academic Level
                </label>
                <select
                  value={academicLevel}
                  onChange={(e) => setAcademicLevel(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0B5394] focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0B5394] focus:outline-none transition-colors"
                >
                  {urgencyLevels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0B5394] to-[#084170] rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Price Estimate</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-[#F2C94C]" />
                    <span>Estimated Pages</span>
                  </div>
                  <span className="font-bold text-lg">{estimatedPages}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-white/20">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-[#F2C94C]" />
                    <span>Delivery Time</span>
                  </div>
                  <span className="font-bold text-lg">
                    {urgencyLevels.find(u => u.value === urgency)?.label}
                  </span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#F2C94C] font-semibold">Total Price (USD)</span>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-6 h-6 text-[#F2C94C]" />
                    <span className="text-4xl font-bold">{totalPrice}</span>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-300">
                  Approx. ₹{priceInINR.toLocaleString('en-IN')}
                </div>
              </div>

              <a
                href={`https://wa.me/919790736503?text=Hi, I would like a quote for ${serviceTypes.find(s => s.value === serviceType)?.label} service. Word count: ${wordCount}, Deadline: ${urgencyLevels.find(u => u.value === urgency)?.label}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#F2C94C] text-[#0B5394] py-4 rounded-xl font-bold text-lg text-center hover:bg-[#e0b838] transition-all transform hover:scale-105"
              >
                Get Started on WhatsApp
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-[#0B5394] mb-3">What's Included:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F2C94C] mr-2">✓</span>
                  <span>Expert review by qualified professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F2C94C] mr-2">✓</span>
                  <span>Unlimited revisions until satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F2C94C] mr-2">✓</span>
                  <span>100% confidential service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F2C94C] mr-2">✓</span>
                  <span>On-time delivery guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
