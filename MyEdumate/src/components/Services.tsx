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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B5394] mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic support services designed to help you excel in your educational journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[#F2C94C]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0B5394] to-[#084170] rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[#F2C94C]" />
              </div>

              <h3 className="text-xl font-bold text-[#0B5394] mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
