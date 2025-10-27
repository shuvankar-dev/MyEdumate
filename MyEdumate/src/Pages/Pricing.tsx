import { Check, Star, ArrowRight, DollarSign } from 'lucide-react';

export default function Pricing() {
  const services = [
    {
      category: "Academic Editing & Proofreading",
      description: "Professional editing and proofreading services to enhance your academic work",
      baseRate: 8,
      features: [
        "Grammar and syntax correction",
        "Spelling and punctuation check",
        "Clarity and readability improvement",
        "Academic style formatting",
        "Reference and citation review",
        "Two rounds of revision included"
      ]
    },
    {
      category: "Plagiarism Improvement",
      description: "Comprehensive plagiarism detection and improvement services",
      baseRate: 12,
      features: [
        "Advanced plagiarism scanning",
        "Content rewriting and paraphrasing",
        "Source verification",
        "Citation improvement",
        "Originality enhancement",
        "Detailed plagiarism report"
      ]
    },
    {
      category: "Research Mentoring",
      description: "Expert guidance for research methodology and academic writing",
      baseRate: 15,
      features: [
        "Research methodology guidance",
        "Literature review assistance",
        "Data analysis support",
        "Academic writing coaching",
        "Research proposal development",
        "One-on-one mentoring sessions"
      ]
    },
    {
      category: "Formatting & Citation",
      description: "Professional formatting according to academic standards",
      baseRate: 6,
      features: [
        "APA, MLA, Chicago, Harvard styles",
        "Document formatting",
        "Table and figure formatting",
        "Bibliography creation",
        "In-text citation correction",
        "Reference list compilation"
      ]
    },
    {
      category: "Presentation Preparation",
      description: "Creating compelling academic presentations",
      baseRate: 10,
      features: [
        "Slide design and layout",
        "Content organization",
        "Visual elements integration",
        "Speaker notes preparation",
        "Presentation flow optimization",
        "Practice session guidance"
      ]
    },
    {
      category: "Academic Skill Coaching",
      description: "Comprehensive academic skill development",
      baseRate: 18,
      features: [
        "Writing skills development",
        "Critical thinking enhancement",
        "Time management coaching",
        "Study strategies",
        "Academic planning",
        "Personalized learning plans"
      ]
    }
  ];

  const urgencyMultipliers = [
    { days: "7+ Days", multiplier: 1.0, popular: false },
    { days: "5-6 Days", multiplier: 1.2, popular: false },
    { days: "3-4 Days", multiplier: 1.5, popular: true },
    { days: "2 Days", multiplier: 1.8, popular: false },
    { days: "24 Hours", multiplier: 2.2, popular: false }
  ];

  const academicLevels = [
    { level: "High School", multiplier: 0.8, description: "High school level academic work" },
    { level: "Undergraduate", multiplier: 1.0, description: "Bachelor's degree level work" },
    { level: "Masters", multiplier: 1.3, description: "Master's degree level work" },
    { level: "PhD/Doctorate", multiplier: 1.6, description: "Doctoral level research work" }
  ];

  const calculatePrice = (baseRate: number, words: number = 1000, urgency: number = 1.0, level: number = 1.0) => {
    const pages = Math.ceil(words / 250);
    const basePrice = pages * baseRate;
    return Math.round(basePrice * urgency * level);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] px-6 py-2 rounded-full text-sm font-bold mb-6">
            Transparent Pricing
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0B5394] mb-6">
            Affordable Academic Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality academic services at competitive prices. No hidden fees, transparent pricing structure.
          </p>
        </div>

        {/* Pricing Formula */}
        <div className="bg-[#0B5394] text-white rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">How We Calculate Pricing</h2>
          <div className="text-center mb-6">
            <div className="text-lg bg-white/20 rounded-lg p-4 inline-block">
              <strong>Final Price = (Pages × Service Rate) × Urgency Multiplier × Academic Level Multiplier</strong>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-bold text-[#F2C94C] mb-2">Page Count</h3>
              <p>Based on 250 words per page (standard academic format)</p>
            </div>
            <div>
              <h3 className="font-bold text-[#F2C94C] mb-2">Service Rate</h3>
              <p>Varies by service type (see detailed rates below)</p>
            </div>
            <div>
              <h3 className="font-bold text-[#F2C94C] mb-2">Multipliers</h3>
              <p>Applied based on deadline urgency and academic level</p>
            </div>
          </div>
        </div>

        {/* Services Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B5394] mb-8 text-center">Service Rates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100 hover:border-[#F2C94C] transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#0B5394] mb-2">{service.category}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-[#0B5394]" />
                    <span className="text-3xl font-bold text-[#0B5394]">{service.baseRate}</span>
                    <span className="text-gray-600 ml-1">/page</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Base rate (250 words per page)</p>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-center">
                  <div className="text-sm text-gray-600 mb-2">Example: 1000 words (4 pages)</div>
                  <div className="font-bold text-[#0B5394]">
                    Starting from ${calculatePrice(service.baseRate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Multipliers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B5394] mb-8 text-center">Deadline Pricing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {urgencyMultipliers.map((urgency, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-6 text-center border-2 ${urgency.popular ? 'border-[#F2C94C] ring-4 ring-[#F2C94C]/20' : 'border-gray-200'} hover:shadow-lg transition-all`}>
                {urgency.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#F2C94C] text-[#0B5394] px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-[#0B5394] mb-2">{urgency.days}</h3>
                <div className="text-2xl font-bold text-gray-700">×{urgency.multiplier}</div>
                <p className="text-sm text-gray-600 mt-2">multiplier</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Level Multipliers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B5394] mb-8 text-center">Academic Level Pricing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border-2 border-gray-200 hover:border-[#F2C94C] hover:shadow-lg transition-all">
                <h3 className="font-bold text-[#0B5394] mb-2">{level.level}</h3>
                <div className="text-2xl font-bold text-gray-700 mb-2">×{level.multiplier}</div>
                <p className="text-sm text-gray-600">{level.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Calculations */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#0B5394] mb-8 text-center">Sample Pricing Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-[#0B5394] mb-4">Basic Editing</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>• 1000 words (4 pages)</p>
                <p>• Editing & Proofreading ($8/page)</p>
                <p>• 7+ days deadline (×1.0)</p>
                <p>• Undergraduate level (×1.0)</p>
              </div>
              <div className="text-2xl font-bold text-[#0B5394]">$32</div>
              <div className="text-sm text-gray-500">≈ ₹2,656</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-[#0B5394] mb-4">Research Mentoring</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>• 2000 words (8 pages)</p>
                <p>• Research Mentoring ($15/page)</p>
                <p>• 3-4 days deadline (×1.5)</p>
                <p>• Masters level (×1.3)</p>
              </div>
              <div className="text-2xl font-bold text-[#0B5394]">$234</div>
              <div className="text-sm text-gray-500">≈ ₹19,422</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-[#0B5394] mb-4">Urgent Formatting</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>• 1500 words (6 pages)</p>
                <p>• Formatting & Citation ($6/page)</p>
                <p>• 24 hours deadline (×2.2)</p>
                <p>• PhD level (×1.6)</p>
              </div>
              <div className="text-2xl font-bold text-[#0B5394]">$127</div>
              <div className="text-sm text-gray-500">≈ ₹10,541</div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-[#0B5394] text-white rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Payment Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#F2C94C] mb-4">Accepted Payment Methods</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3" />Razorpay (UPI, Cards, Net Banking)</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3" />International Wire Transfer</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3" />PayPal (for international clients)</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3" />Bank Transfer (NEFT/RTGS)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#F2C94C] mb-4">Payment Terms</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3" />50% advance payment required</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3" />Balance payment on completion</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3" />Secure payment processing</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-3" />Invoice provided for all transactions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0B5394] mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Use our calculator to get an instant quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#home"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#F2C94C] to-[#FFD700] text-[#0B5394] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Calculate Your Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919790736503?text=Hi, I would like to get a custom quote for my project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-[#0B5394] text-[#0B5394] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0B5394] hover:text-white transition-all"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}